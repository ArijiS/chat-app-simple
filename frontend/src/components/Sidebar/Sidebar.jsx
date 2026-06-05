import React from 'react';
import SearchInput from "./SearchInput";
import Conversations from './Conversations';
import Logout from './Logout';
import useConversation from "../../zustand/useConversation.js";

const Sidebar = () => {
  const { selectedConversation } = useConversation();



  return (
    <div className={`flex flex-col h-full sm:border-r sm:border-accent-content p-4 max-sm:w-full w-sm md:w-md ${ selectedConversation ? 'max-sm:hidden' : 'max-sm:flex' } `}>
        <SearchInput />
        <div className="divider my-2 p-0 h-2" />
        <Conversations />
        <Logout />
    </div>
  )
}

export default Sidebar;