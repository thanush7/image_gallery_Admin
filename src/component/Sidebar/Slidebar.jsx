import React from 'react'
import './Slidebar.css'
import add from '../../assets/add_icon.png'
import list from '../../assets/order_icon.png'
import notify from '../../assets/parcel_icon.png'
import message from '../../assets/message.jpg'
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom'
const Slidebar = () => {
  return (
    <div className='slidebar-container'>
        <h3>Dashboard</h3>
        <div className='add-items'>
          <Link to='/home/add' style={{textDecoration:'none'}}><button><img src={add} alt="" />Add Image</button></Link>
        </div>
        <div className='add-items'>
            <Link to='/home/list' style={{textDecoration:'none'}}><button><img src={list} alt="" />List Image</button></Link>
        </div>
        <div className='add-items'>
           <Link to='/home/profile' style={{textDecoration:'none'}}><button><img src={profile} alt="" />Shop</button></Link> 
        </div>
        <div className='add-items'>
           <Link to='/home/order' style={{textDecoration:'none'}}><button><img src={notify} alt="" />Orders</button></Link> 
        </div>
        <div className='add-items'>
           <Link to='/home/message' style={{textDecoration:'none'}}><button><img src={message} alt="" />Message</button></Link> 
        </div>
        <div className='add-items'>
           <Link to='/home/profile' style={{textDecoration:'none'}}><button><img src={profile} alt="" />Edit Profile</button></Link> 
        </div>
      
    </div>
  )
}

export default Slidebar