import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../contexts/SocketContext';

const Conversation = ( {conversation, lastIndex} ) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-accent-content cursor-pointer py-1 px-2 rounded-lg ${isSelected ? "bg-accent-content" : ""}`}
            onClick={ ()=> setSelectedConversation(conversation) }>

            <div className={`avatar ${isOnline ? "avatar-online" : ""}`} >
                <div className="size-12 rounded-full">
                    <img src={conversation.profilePic} alt="Profile Picture" />
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between items-center">
                    <p className="font-bold text-primary-content">{conversation.fullName}</p>
                </div>
                
            </div>
        </div>
        {!lastIndex && <div className="divider my-0 py-0 h-1"/>}
        
    </>
  )
}

export default Conversation;