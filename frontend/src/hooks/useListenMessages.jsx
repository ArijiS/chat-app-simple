import React from 'react';
import { useSocketContext } from '../contexts/SocketContext';
import useConversation from '../zustand/useConversation';
import { useEffect } from 'react';
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { setMessages } = useConversation();
    

    useEffect( ()=>{
        socket?.on("newMessage", (newMessage)=>{
            const currentMessages = useConversation.getState().messages;
            newMessage.shouldAnimate = true;
            const sound = new Audio( notificationSound );
            sound.play();
            setMessages( [...currentMessages, newMessage] )
        });

        return ()=>{
            socket?.off("newMessage");
        }
    }, [ socket, setMessages ] );
  
}

export default useListenMessages;
