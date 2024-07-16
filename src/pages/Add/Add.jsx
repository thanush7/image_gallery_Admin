import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {
  const url=assets.url;
  const [image, setImage] = useState(false);
  const [data, setData] = useState(
    {
      imageName: "",
      category: "baby",
      likes: 0
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
    formData.append("imageName", data.imageName);
    formData.append('category', data.category);
    formData.append('likes', data.likes);
    formData.append('image', image);
    const response = await axios.post(`${url}/api/gallery/add`,formData);
    if (response.data.success) {
      setData({
        imageName: "",
        category: "baby",
        likes: 0
      })
      setImage(false);
      toast.success('image added')
    }
    else{
      toast.error('error');
    }
  }

  return (
    <div className='add-container'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="upload-container">
          <p>upload</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="image" hidden required />
        </div>
        <div className="inputs">
          <p>Image name</p>
          <input onChange={onChangeHandler} value={data.imageName} name='imageName' placeholder='Name' type="text" />
        </div>
        <div className="add-category">
          <p>Image Category</p>
          <select onChange={onChangeHandler} value={data.category} name="category">
            <option value="architecture">architecture</option>
            <option value="wedding">wedding</option>
            <option value="model">model</option>
            <option value="product">product</option>
            <option value="street">street</option>
            <option value="macro">macro</option>
            <option value="landscape">landscape</option>
            <option value="nature">nature</option>
            <option value="black and white">black and white</option>
            <option value="astro">astro</option>
            <option value="baby">baby</option>
          </select>
        </div>

        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Add