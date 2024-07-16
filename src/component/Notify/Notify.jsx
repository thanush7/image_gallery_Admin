import React from 'react'
import './Notify.css'
import { useState,useEffect } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets'
const Notify = () => {
  const url=assets.url;
  const [list,setList]=useState([])
  
  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/order/listcontact`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error('error')
    }
  }
  const removemsg=async(msgId)=>{
    const respone=await axios.post(`${url}/api/order/deletemsg`,{id:msgId});
    console.log(msgId)
    if(respone.data.success){
      toast.success(' message deleted');
    }
    else{
      toast.error('not deleted');
    }
    await fetchList();
  }
  
  useEffect(()=>{
    fetchList();
  },[])
  
  return (
    <div className='notify-container'>
      <div className="table-format">
      <b>Name</b>
        <b>Email</b>
        <b>subject</b> 
        <b>phone</b>
      </div>
        
        {
      list.map((item,index)=>{
        return (
          <div  className='table-format'>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.subject}</p>
            <p>{item.phone}</p>
            <div className='but'> <button onClick={()=>removemsg(item._id)}>Remove</button></div>
          </div>
          
        )
      })
    }
    
    </div>
    
  )
}

export default Notify