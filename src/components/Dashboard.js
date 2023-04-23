import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { BiBell } from 'react-icons/bi';
import './Dashboard.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart, Pie, Sector, Cell, ResponsiveContainer
} from "recharts";
import { AiFillCreditCard, AiOutlineLike } from 'react-icons/ai';
import Piechart from './Piechart';
import { BsGraphUp } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';

const data = [
  {
    name: "Week 1",
    Guest: 4000,
    User: 2400,
    amt: 121
  },
  {
    name: "Week 2",
    Guest: 3000,
    User: 1398,
    amt: 89
  },
  {
    name: "Week 3",
    Guest: 2000,
    User: 9800,
    amt: 210
  },
  {
    name: "Week 4",
    Guest: 2780,
    User: 3908,
    amt: 134
  },
];

const Dashboard = () => {
  return (
    <div className='dashContainer'>
      <div className="headCont">
        <h1 className="font-montserrat font-bold text-2xl leading-6 text-black">
          Dashboard
        </h1>
        <div className='head2'>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-180 h-30 border-2 rounded-lg pl-10"
          />
          <div className="absolute top-1 left-1">
            <RiSearchLine />
          </div>
        </div>
        <BiBell className="w-6 h-6" />
        </div>
      </div >
      <div className=" tile-container">
        <div className="tile1">
        <AiFillCreditCard className='icn'/>
          <p className="tilemaintext">Total Revenue</p>
          <p className="val">$2,129,430</p>
        </div>
        <div className="tile2">
        <BsGraphUp className='icn'/>
          <p className="tilemaintext">Total Transaction</p>
          <p className="val">1,520</p>
        </div>
        <div className="tile3">
        <AiOutlineLike className='icn'/>
          <p className="tilemaintext">Total Likes</p>
          <p className="val">9,721</p>
        </div>
        <div className="tile4">
        <FaUserFriends className='icn'/>
          <p className="tilemaintext">Total Comments</p>
          <p className="val">892</p>
        </div>
      </div>
      <div className='linechart-stl'>
        <text className='text-Act'> Activities</text> 
        <br></br>
        
        <text className='text-dat'> May - June 2021</text>
      
        
        <LineChart
          width={1200}
          height={340}
          data={data}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line
    type="monotone"
    dataKey="User"
    stroke="#8884d8"
    activeDot={{ r: 8 }}
  />
  <Line type="monotone" dataKey="Guest" stroke="#82ca9d" />
</LineChart>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
  <div className='tile-bot'>
    <text className='text-Act'>Top Prodcust</text>
    <text className='text-datt'> May - June 2021</text>
<div style={{display:'flex'}}>
<Piechart />
    <div className='pievalues'>
   
    <span class="dot1"></span>
        <text className='valtext'>Basic Tees</text> <br/>
        <text className='valPer'>55%</text> <br/>
        <span class="dot2"></span>
        <text className='valtext'>Custom Short Pants</text> <br/>
        <text  className='valPer'>31%</text> <br/>
        <span class="dot3"></span>
        <text className='valtext'>Super Hoodies</text> <br/>
        <text className='valPer'>14%</text>

    </div>
</div>
    
  </div>
  <div className='tile-bot'>
    
    <text className='text-Act'>Today's Schdule</text> <br/>
    <div className='calcon1' style={{display:'flex'}}>
    <div class="vl"></div>

<div >
<text className=''> Meeting with suppliers from Kuta Bali</text> <br/>
<text className='valPer'> 10:00 AM - 11:00 AM</text> <br/>
<text className='valPer'> at Sunset Road, Kuta, Bali</text> <br/>
</div>
    </div>
    <br></br>
    <div className='calcon2' style={{display:'flex'}}>
    <div class="v2"></div>

<div >
<text className=''> Meeting with suppliers from Kuta Bali</text> <br/>
<text className='valPer'> 10:00 AM - 11:00 AM</text> <br/>
<text className='valPer'> at Sunset Road, Kuta, Bali</text> <br/>
</div>
    </div>
   
  </div>
</div>
    </div>
  );
};
export default Dashboard;
