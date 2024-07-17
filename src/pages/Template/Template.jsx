import React from 'react'
import './Template.css'
import { useState } from 'react'
import Addtempl from './Addtempl';
import Viewtemp from './Viewtemp';
const Template = () => {
    const[view,setView]=useState('');
  return (

    <div className='template-container'>
        <div className="top">
            <button onClick={()=>setView('add-temp')}>Add</button>
            <button onClick={()=>setView('')}>View</button>
        </div>
        {
          view==='add-temp'? <Addtempl/>:<Viewtemp/>
        }
        
    </div>
    
  )
}

export default Template