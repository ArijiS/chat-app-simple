import Conversation from "../models/conversationModel.js";
import Message from "../models/messagesModel.js";

export const sendMessage = async (req, res) => {
    try{
        const { message } = req.body;
        const { id:receiverId } = req.params; // Renaming id from params to receiverId
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [receiverId, senderId]}
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [receiverId, senderId]
            });
        };

        //await conversation.save()

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //await newMessage.save();
        await Promise.all([newMessage.save(), conversation.save()]);

        res.status(201).json({newMessage});
    }
    catch(error){
        console.log("Error in the getMessage handler");
        res.status(500).json({error: error.message});
    }
};

export const getMessage = async (req, res, next) => {
    try{
        const { id:userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        };
        const messages = conversation.messages;

        res.status(200).json(messages);
    }
    catch(error){
        console.log("Error in the getMessage handler");
        res.status(500).json({error: error.message});

    }
};

