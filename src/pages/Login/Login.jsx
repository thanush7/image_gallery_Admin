import React, { useContext, useState } from 'react'
import  './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'
import { assets } from '../../assets/assets';
const Login = () => {
  const url=assets.url;
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  
  const navigate = useNavigate();


  const onSubmitHandler=async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${url}/api/admin/login`, {email,password});
        if (response.data.success) {
            navigate('/home');
        }else{
          toast.error('wrong credentials')
        }
    } catch (error) {
        console.error('There was an error logging in!', error);
    }
};

  
  return (
    <div className='login-container'>
        <form onSubmit={onSubmitHandler} className="login-details">
            <input type="text" onChange={(event)=>setEmail(event.target.value)} name='email'  placeholder='enter Id'required/>
            <input type="password" onChange={(event)=>setPassword(event.target.value)} name='password'  placeholder='enter password' required />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login