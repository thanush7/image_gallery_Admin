import React, { useState } from 'react'
import './Slidebar.css'
import add from '../../assets/add_icon.png'
import list from '../../assets/order_icon.png'
import notify from '../../assets/parcel_icon.png'
import message from '../../assets/message.jpg'
import profile from '../../assets/profile.png'
import video from '../../assets/icons8-video-50.png'
import { Link } from 'react-router-dom'
const Slidebar = () => {
   const [cb,setCb]=useState('');
  return (
    <div className='slidebar-container'>
        <h3>Dashboard</h3>
        <div className='add-items'>
          <Link to='/home/add' style={{textDecoration:'none'}}><button onClick={()=>setCb("add")} className={cb==='add'?'active':''}><img src={add} alt="" />Add Image</button></Link>
        </div>
        <div className='add-items'>
            <Link to='/home/list' style={{textDecoration:'none'}}><button  onClick={()=>setCb("list")} className={cb==='list'?'active':''}><img src={list} alt="" />List Image</button></Link>
        </div>
        <div className='add-items'>
           <Link to='/home/message' style={{textDecoration:'none'}}><button onClick={()=>setCb("msg")} className={cb==='msg'?'active':''}><img src={message} alt="" />Message</button></Link> 
        </div>
        <div className='add-items'>
           <Link to='/home/edit' style={{textDecoration:'none'}}><button onClick={()=>setCb("edit")} className={cb==='edit'?'active':''}><img src={profile} alt="" />Edit Profile</button></Link> 
        </div>
        <div className='add-items'>
           <Link to='/home/video' style={{textDecoration:'none'}}><button onClick={()=>setCb("video")} className={cb==='video'?'active':''}><img src={video} alt="" />Video Template</button></Link> 
        </div>
    </div>
  )
}

export default Slidebar