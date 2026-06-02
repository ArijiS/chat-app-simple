import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';
import useConversation from "../../zustand/useConversation";


const Logout = () => {
    const { setSelectedConversation } = useConversation();
    const {loading, logout} = useLogout();
  return (
        <div className="mt-auto">
            {loading ?
            <span className="loading loading-spinner"></span> :
            <button className="flex btn btn-outline btn-error btn-md" onClick={()=> {
                logout();
                setSelectedConversation(null);
            }}>                
                <RiLogoutBoxLine className="text-lg"/>
                <p className="text-sm font-light">Logout</p>
            </button>}            
        </div>  
  )
}

export default Logout;