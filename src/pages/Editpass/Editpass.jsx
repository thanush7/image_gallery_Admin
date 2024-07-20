import React, { useEffect, useState } from 'react'
import './Editpass.css'
import axios from 'axios';
import { assets } from '../../assets/assets';
import {toast} from 'react-toastify'
const Editpass = () => {
  const url=assets.url;
  const [data,setData]=useState(
    {
        email:"",
        oldPassword:"",
        newPassword:""
    }
)
const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}));
}

const onSubmitHandler = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('email',data.email);
  formData.append('oldPassword',data.oldPassword);
  formData.append('newPassword',data.newPassword);
  try {
    const {email,oldPassword,newPassword}=data;
    const response = await axios.post(`${url}/api/admin/editpass`,{email,oldPassword,newPassword});
    if(response.data.success){
      toast.success('updated successfully')
      setData({
        email:"",
        oldPassword:"",
        newPassword:""
    })
    }
  } catch (error) {
    console.error('Error updating profile', error);
  }
};

  return (
    <form onSubmit={onSubmitHandler} className='edit-container'>
        <div className="inputs">
            <input placeholder='Id' onChange={onChangeHandler} name='email' value={data.email} type="text" required/>
            <input type="password" onChange={onChangeHandler} name='oldPassword' value={data.oldPassword} placeholder='current password' required/>
            <input type="password" onChange={onChangeHandler} name='newPassword' value={data.newPassword} required placeholder='new password'/>
            <button type='submit'>Update</button>
        </div>
    </form>
  )
}

export default Editpass