import React from 'react'
import axios from 'axios';
import './Template.css'
import { useState } from 'react';
import { assets } from '../../assets/assets';
import {toast} from 'react-toastify'
const Addtempl = () => {
    const url=assets.url;
    const [image, setImage] = useState(false);
    const [data, setData] = useState(
      {
        url:"",
        name:""
      }
    )
      const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("url", data.url);
      formData.append("name",data.name);
      formData.append('image', image);
      const response = await axios.post(`${url}/api/gallery//addTemp`,formData);
      if (response.data.success) {
        setData({
          url:"",
          name:""
        });
        setImage(false);
        toast.success('image added')
      }
      else{
        toast.error('error');
      }
    }
  return (
    <form onSubmit={onSubmitHandler} className='add-temp-container'>
          <div className="upload-containr">
          <p>Template</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="image" hidden required />
        </div>
        
        <input placeholder='URL' onChange={onChangeHandler} name='url' value={data.url} type="text" />
        <input placeholder='Enter Name' onChange={onChangeHandler} name='name' value={data.name} type="text"  id="" />
        <button type='submit'>Add</button>
    </form>
  )
}

export default Addtempl