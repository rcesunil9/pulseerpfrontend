import React from 'react'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/sidebar';
import StockDashboard from './StockDashboard';
import FBAStockDashboard from "./FBAStockDashboard"
import CoreDataDashboard from './CoreDataDashboard';
import CoreDataSuplierDashboard from './CoreDataSuplierDashboard';
import RecorderDashboard from './RecorderDashboard';


const Dashbord = () => {
  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-center'>
          
       <Sidebar/>
      
      {/* <StockDashboard/>  */}
      {/* <FBAStockDashboard/> */}
      {/* <CoreDataDashboard/> */}
      {/* <CoreDataSuplierDashboard/> */}

      <RecorderDashboard/>

      </div>
    
    </div>
  )
}

export default Dashbord