import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  return (
    <div className="flex flex-col py-2 overflow-auto gap-y-2 my-2">
        {loading ? <span className="loading loading-spinner"></span> : null}
        {conversations.map((conversation, index) => (
          <Conversation key={conversation._id} conversation={conversation} lastIndex={ index === conversations.length - 1 }/>
        ))}
    </div>
  )
}

export default Conversations;