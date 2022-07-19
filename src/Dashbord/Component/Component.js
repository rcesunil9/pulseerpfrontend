import React from 'react'

import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/sidebar';

import FBAStockDashboard from "./FBAStockDashboard"


const Component = () => {
  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-between dashboard'>

       <Sidebar/>

      <FBAStockDashboard/>

      </div>
      
    
    </div>
  )
}

export default Component