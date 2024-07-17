import React from 'react'
import axios from 'axios';
import './Template.css'
import { useState } from 'react';
import { assets } from '../../assets/assets';
import {toast} from 'react-toastify'
const Addtempl = () => {
    const url=assets.url;
    const [image, setImage] = useState(false);
    const [data, setData] = useState("")
  
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("url", data);
      formData.append('image', image);
      const response = await axios.post(`${url}/api/gallery//addTemp`,formData);
      if (response.data.success) {
        setData("");
        setImage(false);
        toast.success('image added')
      }
      else{
        toast.error('error');
      }
    }
  return (
    <form onSubmit={onSubmitHandler} className='add-temp-container'>
          <div className="upload-container">
          <p>Template</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="image" hidden required />
        </div>
        <input onChange={(e)=>setData(e.target.value)} type="text" />
        <button type='submit'>Add</button>
    </form>
  )
}

export default Addtempl