import React from 'react'

import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/sidebar';
import FBAStockDashboard from "./FBAStockDashboard"


const Dashbord = () => {
  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-center'>
          
       <Sidebar/>
      
      
      {/* <StockDashboard/>  */}
      <FBAStockDashboard/>
      {/* <CoreDataDashboard/> */}
      {/* <CoreDataSuplierDashboard/> */}
      {/* <RecorderDashboard/> */}

      </div>
    
    </div>
  )
}

export default Dashbord