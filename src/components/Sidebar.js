import React from 'react';
import { AiOutlinePieChart, AiOutlineUser } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { IoCalendarSharp } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';
import { RiSettings3Line } from 'react-icons/ri';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="bg-black rounded-3xl p-8 sidepane">
      <div className="mb-8">
        <h1 className="font-montserrat font-bold bold-head  text-5xl leading-9 text-white">Board.</h1>
      </div>
      <ul className="list-sidepaneP">
        <li className='list-pane' >
          <AiOutlinePieChart className="clip" />
          <span className=" text-pane">Dashboard</span>
        </li>
        <li className='list-pane' >
          <BsGraphUp className="clip" />
          <span className="text-paneN">Transactions</span>
        </li>
        <li className='list-pane' >
          <IoCalendarSharp className="clip" />
          <span className="text-paneN ">Schedules</span>
        </li>
        <li className='list-pane' >
          <AiOutlineUser className="clip" />
          <span className=" text-paneN">Users</span>
        </li>
        <li  className='list-pane'>
          <RiSettings3Line className="clip" />
          <span className=" text-paneN">Settings</span>
        </li>
      </ul>
      <ul className='lowerpane'>
        <li className='liLower' >
        <span className='lowerText'>Help</span>  
          </li>
        <li >
         <span className='lowerText'>Contact Us </span>  
           </li>

      </ul>
    </div>
  );
};

export default Sidebar;
