import React from 'react';
import SearchInput from "./SearchInput";
import Conversations from './Conversations';
import Logout from './Logout';


const Sidebar = () => {
  return (
    <div className="flex flex-col h-full border-r border-accent-content p-4">
        <SearchInput />
        <div className="divider my-2 p-0 h-2" />
        <Conversations />
        <Logout />
    </div>
  )
}

export default Sidebar;