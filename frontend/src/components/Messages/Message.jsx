import React from 'react';
import {useAuthContext} from "../../contexts/AuthContext";
import useConversation from '../../zustand/useConversation';
import { extractTime } from "../../utils/extractTime.js";

const Message = ({message}) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = authUser._id === message.senderId;
    const fromMeSide = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe? authUser.profilePic : selectedConversation.profilePic;
    const bubbleColor = fromMe ? "bg-info-content" : "bg-accent-content";
    const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${fromMeSide} ${message.shouldAnimate ? "message-enter" : ""}`}>

        <div className="chat-image avatar">
            <div className="rounded-full size-10 ">
                <img src={profilePic} alt="Profile picture" />
            </div>
        </div>

        <div className={`chat-bubble ${bubbleColor} text-primary-content`}>
            {message.message}
        </div>
        <div className="chat-footer opacity-50">{formattedTime}</div>
    </div>
  )
}

export default Message;