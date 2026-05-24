import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainer from '../../components/Messages/MessageContainer';

const Home = () => {
  return (
    <div className="flex sm:h-112 md:h-140 lg:h-200 rounded-lg overflow-hidden bg-base-300 p-4">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home;