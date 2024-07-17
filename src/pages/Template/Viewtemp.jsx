import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
const Viewtemp = () => {
  const url=assets.url;
  const [list,setList]=useState([]);
  
  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/gallery/listTemp`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error('error')
    }
  }
  const removeImage=async(imageId)=>{
    const response=await axios.post(`${url}/api/gallery/removeTemp`,{id:imageId});
    if(response.data.success){
      toast.success('removed')
    }
    await fetchList();
  }
  
  useEffect(()=>{
    fetchList();
  },[])
  
  return (
    <div className='view-container'>
        <div className='view-titles'>
            <b>Image</b>
            <b>Url</b>
        </div>
        {
          list.map((item,index)=>{
            return (
            <div className='table'>
              <img src={`${url}/timages/`+item.image} alt="" />
              <p name="" id="">{item.url}</p>
              <button onClick={()=>removeImage(item._id)} className='remove'>Remove</button>
            </div>)
          })
        }
        
    </div>
  )
}

export default Viewtemp