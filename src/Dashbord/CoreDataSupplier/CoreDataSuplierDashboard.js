import React from 'react'

import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/sidebar';
import Table from "./Table"


const CoreDataSupplier = () => {
  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-center'>
          
       <Sidebar/>
      <Table/>
      
     
      </div>
    
    </div>
  )
}

export default CoreDataSupplier