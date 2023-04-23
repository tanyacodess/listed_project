import React from 'react'
import Sidebar from '../components/Sidebar';





import Dashboard from '../components/Dashboard';

const MainPage = () => {
  return (
    <div className="flex app">
    <div className='basis-[20%] h-[100vh] border'>
      <Sidebar />
    </div>
    <div className='basis-[80%]'>
      <Dashboard />
       </div>

  </div>
  )
}

export default MainPage