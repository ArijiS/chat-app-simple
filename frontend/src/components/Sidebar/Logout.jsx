import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';
import useConversation from "../../zustand/useConversation"

const Logout = () => {
    const { setSelectedConversation } = useConversation();
    const {loading, logout} = useLogout();
  return (
        <div className="mt-auto">
            {loading ?
            <span className="loading loading-spinner"></span> :
            <button className="btn btn-outline btn-error btn-circle btn-sm" onClick={()=> {
                logout();
                setSelectedConversation(null);
            }}>                
                <RiLogoutCircleLine />
            </button>}            
        </div>  
  )
}

export default Logout;