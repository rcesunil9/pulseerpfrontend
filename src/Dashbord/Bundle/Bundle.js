import React from 'react'

import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/sidebar';
import Table from "./Table"


const Bundle = () => {
  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-between dashboard'>
          
       <Sidebar/>
      <Table/>
      
     
      </div>
    
    </div>
  )
}

export default Bundle