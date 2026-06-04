import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainer from '../../components/Messages/MessageContainer';

const Home = () => {
  return (
    <div className="flex h-full w-full lg:h-9/10 lg:w-9/10 rounded-lg overflow-hidden bg-[#18181b] p-4">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home;