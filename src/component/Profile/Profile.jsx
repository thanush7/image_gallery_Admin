import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Profile.css';
import axios from 'axios'
import { toast } from 'react-toastify';
const Profile = () => {
  const [image,setImage]=useState(false)
  const [profile, setProfile] = useState({});
  const [preview, setPreview] = useState('');
  const url=assets.url;
  const profileId='669b4c4cfa16b0abc2dc6d3f'
  
  
  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/profile/getProfile/${profileId}`);
    if(response.data.success){
      setProfile(response.data);
      setPreview(response.data.proImage);
      // console.log(preview)
    }
  }
  
  
  useEffect(()=>{
    fetchList();
  },[profileId])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('proImage', image);
    formData.append('bio', profile.bio);
    formData.append('whatsapp', profile.whatsapp);
    formData.append('instagram', profile.instagram);
    formData.append('facebook', profile.facebook);
    formData.append('email', profile.email);

    try {
      const response = await axios.put(`${url}/api/profile/editProfile/${profileId}`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('updated successfully')
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className='profile-container'>
      <div className="upload-container">
          <p>upload size(268x523)px</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) :assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="image" hidden />
        </div>
        <div className="bio">
          <p>Bio</p>
              <textarea name="bio" value={profile.bio} onChange={handleChange} id=""/>
            </div>
        <div className="social">
          <h4>Social Media</h4>
            <div className="social-add">
              <img src={assets.whatsapp} alt="" />
              <input type="text" name='whatsapp' value={profile.whatsapp} onChange={handleChange} />
            </div>
            <div className="social-add">
              <img src={assets.instagram} alt="" />
              <input type="text" name='instagram' value={profile.instagram} onChange={handleChange} />
            </div>
            <div className="social-add">
              <img src={assets.facebook} alt="" />
              <input type="text" name='facebook' value={profile.facebook} onChange={handleChange} />
            </div>
            <div className="social-add">
              <img src={assets.mail} alt="" />
              <input type="text" name='email' value={profile.email} onChange={handleChange} />
            </div>
        </div>
        <button type='submit'>Update</button>
    </form>
  )
}

export default Profile