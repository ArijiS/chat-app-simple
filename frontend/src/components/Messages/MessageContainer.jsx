import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TbMessages } from "react-icons/tb";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from '../../contexts/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setselectedConversation } = useConversation();
  return (

    <div className="md:min-w-120 flex flex-col">
        {!selectedConversation ? <NoMessageSelected /> : (
          <>
            <div className="bg-accent-content text-base-content px-4 py-2 mb-4 w-full">
              <span className="text-neutral-content font-light">To: </span>
              <span className="font-bold">{selectedConversation.fullName}</span>
            </div>

            <Messages />
            <MessageInput />
          </>
        )}

    </div>
  )
}

export default MessageContainer;

const NoMessageSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col text-primary-content text-center sm:text-lg md:text-xl font-semibold items-center gap-1">
        <p>Welcome {`${authUser.fullName}`} 👋</p>
        <p>Select a chat to start messaging</p>
        <TbMessages className="text-3xl md:text-6xl mt-2"/>
      </div>
    </div>
  );
}