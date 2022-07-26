import React from 'react'

import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/sidebar';
import Table from "./Table"


const Purchase_Pricing = () => {
  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-between.table-striped dashboard'>
          
       <Sidebar/>
      <Table/>
      
     
      </div>
    
    </div>
  )
}

export default Purchase_Pricing