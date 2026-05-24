import React, { useRef, useEffect } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef(null);
  useListenMessages();
  useEffect(()=>{
    setTimeout( ()=>{
      lastMessageRef.current?.scrollIntoView( {behavior: "instant"} );
    }, 100 );
  }, [ messages ]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && (
        <>
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
        </>
      )}
      {(!loading && messages.length === 0)&& (<p className="text-center">Send a message to start a conversation</p>)}

      {(!loading && messages.length !== 0) && (
        messages.map((message)=>(
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message}/>
          </div>
        ))
      ) }
    </div>
  )
}

export default Messages;