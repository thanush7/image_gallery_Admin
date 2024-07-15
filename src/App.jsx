import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <div>
      <ToastContainer />
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home/*' element={<Home/>} />
     </Routes>

    </div>
  )
}


export default App
