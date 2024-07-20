import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import notify from '../../assets/notifi.png'
import { useEffect,useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import profile from '../../assets/profile_image.jpg'

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
            <Link to='/home/editpass'><img src={profile} alt="" /></Link>
            <button onClick={logout}>log out</button>
        </div>
    </div>
  )
}

export default Navbar