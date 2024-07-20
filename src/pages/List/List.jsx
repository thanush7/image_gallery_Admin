import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
const List = () => {
  const url= assets.url;
  const [list,setList]=useState([])
  const [data,setData]=useState('all')
  
  // const onChangeHandler = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setData(data => ({ ...data, [name]: value }));
  //   console.log(data);
  // }
  
  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/gallery/list`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error('error')
    }
  }
  
  const removeImage=async(imageId)=>{
    const response=await axios.post(`${url}/api/gallery/remove`,{id:imageId});
    if(response.data.success){
      toast.success('removed')
    }
    await fetchList();
  }
  
  useEffect(()=>{
    fetchList();
  },[])
  
  return (
    <div className='list-container'>
        <div className="filter">
        <p>Image Category</p>
          <select onChange={(event)=>setData(event.target.value)} value={data.category}  name="category">
          <option value="all">all</option>
            <option value="baby">baby</option>
            <option value="model">model</option>
            <option value="architecture">architecture</option>
            <option value="wedding">wedding</option>
            <option value="product">product</option>
            <option value="street">street</option>
            <option value="macro">macro</option>
            <option value="landscape">landscape</option>
            <option value="nature">nature</option>
            <option value="black and white">black and white</option>
            <option value="astro">astro</option>
          </select>
        </div>
        <div className="list">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>likes</b>
        </div>
        {
          list.map((item,index)=>{
            if(data===item.category){
              return (
                <div key={index} className='table-for'>
                    <img src={`${url}/images/`+item.image} alt="" />
                    <p>{item.imageName}</p>
                    <p>{item.category}</p>
                    <p>{item.likes}</p>
                    <div className='buttons'>
                    {/* <button className='view'>View</button> */}
                    <button onClick={()=>removeImage(item._id)}className='remove'>Remove</button>
                    </div>
                </div>
              )
            }
            if(data==='all'){
              return (
                <div className='table-for'>
                    <img src={`${url}/images/`+item.image} alt="" />
                    <p>{item.imageName}</p>
                    <p>{item.category}</p>
                    <p>{item.likes}</p>
                    <div className='buttons'>
                    {/* <button className='view'>View</button> */}
                    <button onClick={()=>removeImage(item._id)}className='remove'>Remove</button>
                    </div>
                </div>
              )
            }
            
          })
        }
    </div>
  )
}

export default List