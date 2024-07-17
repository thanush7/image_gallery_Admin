import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Profile.css'
const Profile = () => {
  const [image,setImage]=useState(false)
  return (
    <form className='profile-container'>
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