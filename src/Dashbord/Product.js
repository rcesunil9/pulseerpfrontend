import React from 'react'

import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/sidebar';
import StockDashboard from './StockDashboard';
// import FBAStockDashboard from "./FbaStock/FBAStockDashboard"
// import CoreDataDashboard from './CoreDataDashboard';
// import CoreDataSuplierDashboard from './CoreDataSuplierDashboard';
// import RecorderDashboard from './RecorderDashboard';


const Product = () => {
  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-center dashboard'>
          
       <Sidebar/>
    
      
      <StockDashboard/> 
      {/* <FBAStockDashboard/> */}
      {/* <CoreDataDashboard/> */}
      {/* <CoreDataSuplierDashboard/> */}
      {/* <RecorderDashboard/> */}

      </div>
    
    </div>
  )
}

export default Product