import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_image.png'
import notify from '../../assets/notifi.png'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token,setToken]=useState("");
  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  useEffect(()=>{
      if(localStorage.getItem("token"))
         {
             setToken(localStorage.getItem("token"));
         }
});

  
  return (
    <div className='navbar-container'>
        <div className="nav-left">
            <img src={logo} alt="" />
            <h4>Image_factory</h4>
        </div>
        <div className="nav-right">
            <img src={notify} alt="" />
            {/* <div className={false?"":"dot"}></div> */}
            <img src={profile} alt="" />
            <button onClick={logout}>log out</button>
        </div>
    </div>
  )
}

export default Navbar