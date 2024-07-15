import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Slidebar from '../../component/Sidebar/Slidebar'
import { Routes, Route } from 'react-router-dom'
import Add from '../../pages/Add/Add'
import List from '../../pages/List/List'
import './Home.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from '../../pages/Orders/Orders'
import Notify from '../../component/Notify/Notify'
import Profile from '../../component/Profile/Profile'
const Home = () => {
  return (
    <div>
         <Navbar />
      <div className="app-content">
        <Slidebar />
        <Routes>
          <Route path='add' element={<Add />} />
          <Route path='list' element={<List />} />
          <Route path='order' element={<Orders />} />
          <Route path='message' element={<Notify />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home