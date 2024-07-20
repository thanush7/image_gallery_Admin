import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Slidebar from '../../component/Sidebar/Slidebar'
import { Routes, Route } from 'react-router-dom'
import Add from '../../pages/Add/Add'
import List from '../../pages/List/List'
import './Home.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notify from '../../component/Notify/Notify'
import Profile from '../../component/Profile/Profile'
import Template from '../Template/Template'
import Editpass from '../Editpass/Editpass'
const Home = () => {
  return (
    <div>
         <Navbar />
      <div className="app-content">
        <Slidebar />
        <Routes>
          <Route path='add' element={<Add/>} />
          <Route path='list' element={<List/>} />
          <Route path='message' element={<Notify/>} />
          <Route path='edit' element={<Profile/>} />
          <Route path='video' element={<Template/>}   />
          <Route path='editpass' element={<Editpass/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Home