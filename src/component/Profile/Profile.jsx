import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Profile.css'
const Profile = () => {
  const [image,setImage]=useState(false)
  return (
    <form className='profile-container'>
      <h4>Image</h4>
        <div className="profile-name">
        <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <h4>Bio</h4>
          <textarea name="" id=""></textarea> 
        </div>
        <div className="social">
          <h4>Social Media</h4>
            <div className="social-add">
              <img src={assets.whatsapp} alt="" />
              <input type="url" />
            </div>
            <div className="social-add">
              <img src={assets.instagram} alt="" />
              <input type="url" />
            </div>
            <div className="social-add">
              <img src={assets.facebook} alt="" />
              <input type="url" />
            </div>
            <div className="social-add">
              <img src={assets.utube} alt="" />
              <input type="url" />
            </div>
            <div className="social-add">
              <img src={assets.mail} alt="" />
              <input type="url" />
            </div>
        </div>
        <button type='submit'>Update</button>
    </form>
  )
}

export default Profile