import React, { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
import { BsFillSendFill } from "react-icons/bs";

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage();
  const [ message, setMessage ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message){return};
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className="px-4 mt-3 mb-0" onSubmit={handleSubmit}>
        <div className="w-full bg-base-100 flex items-center justify-between px-3 py-1.5 rounded-lg">
            <input type="text" placeholder="Send message..." className="border w-full px-2 py-2.5 text-md text-primary-content bg-transparent border-none focus:border-base-content focus:outline-0"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}/>
            <button type="submit" className="cursor-pointer btn btn-md btn-soft btn-success">
              {loading ? <span className="loading loading-spinner"></span> : <BsFillSendFill className="size-5 text-primary-content"/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput;