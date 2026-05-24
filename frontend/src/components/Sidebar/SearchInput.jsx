import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from "../../hooks/useGetConversations";
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search){return;};
    if(search.length < 3){
      return toast.error("Search term should be at least 3 characters wrong");
    }
    const conversationFound = conversations.find((c)=>{return c.fullName.toLowerCase().includes(search.toLowerCase()) });
    if(conversationFound){
      setSelectedConversation(conversationFound);
      setSearch("");
    }
    else{
      return toast.error(`No user found with the name: ${search}`);
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." className="input rounded-full focus:border-base-content focus:outline-0"
        value={search} onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button className="btn btn-circle bg-success text-white">
            <IoSearchOutline className="size-6 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput