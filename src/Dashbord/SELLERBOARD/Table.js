import React from 'react'

 const Table = () => {

  return (

    <div> 

      <div className='table-responsive '>

      <table className="table dashboardtable table-hover bg-Darkgrey auto-resize -0 mt-0">

    <thead>

      <tr>

        <th scope="col">Srno.</th>

        <th scope="col">SKU</th>

        <th scope="col">FBA Stock</th>

        <th scope="col">ASIN</th>

        <th scope="col">ROI, %</th>

        <th scope="col">FBA/FBM Stock</th>

        <th scope="col">Stock value</th>

        <th scope="col">Estimated Sales Velocity</th>

        <th scope="col">Days of stock left</th>

        <th scope="col">Recommended quantity for reordering</th>

        <th scope="col">Running out of stock</th>

        <th scope="col">Reserved</th>

        <th scope="col">Sent to FBA</th>

        <th scope="col">Running out of stock</th>

<th scope="col">FBA Prep. Stock</th>

<th scope="col">Ordered</th>

<th scope="col">time recorder</th>

<th scope= "col">Comment</th>

<th scope="col">Marketplace</th>

<th scope = "col">Target stock range after new order days</th>

<th scope = "col">FBA buffer days</th>

<th scope = "col">Manuf.time days </th>

<th scope = "col">Use a Prep Center</th>

<th scope = "col">Shippingto FBA days</th>


      </tr>

    </thead>

    <tbody>

      <tr>

        <th scope="row">1</th>

        <td class="first_name">DH1_FBA</td>
            <td class="first_name">805</td>
            <td class="first_name">B07KYXQYJ8</td>
            <td class="first_name">105</td>
            <td class="first_name">514</td>
            <td class="first_name">2625,7</td>
            <td class="first_name">19,64</td>
            <td class="first_name">31</td>
            <td class="first_name">1787</td>
            <td class="first_name">NO</td>
            <td class="first_name">91</td>
            <td class="first_name">200</td>
            <td class="first_name">Sprasad</td>
            <td class="first_name">Raj</td>
            <td class="first_name">YES</td>
            <td class="first_name">Amazon</td>
            <td class="first_name">Amazon.de</td>
            <td class="first_name">90</td>
            <td class="first_name">Sprasad</td>
            <td class="first_name">30</td>
            <td class="first_name">YES</td>
            <td class="first_name">10</td>

 
            <td class="first_name">5</td><button className="btn btn-Darkgrey m-1">Edit</button>
            
      </tr>
      
      <tr>

        <th scope="row">2</th>

        <td class="first_name">PH2_FBA-SAL</td>
            <td class="first_name">B08WCCDRKM</td>
            <td class="first_name">182</td>
            <td class="first_name">325</td>
            <td class="first_name">768,22</td>
            <td class="first_name">18,29</td>
            <td class="first_name">30</td>
            <td class="first_name">1664</td>
            <td class="first_name">NO</td>
            <td class="first_name">216</td>
            <td class="first_name">50</td>
            <td class="first_name">----</td>
            <td class="first_name">----</td>
            <td class="first_name">YES</td>
            <td class="first_name">----</td>
            <td class="first_name">Amazon.de</td>
            <td class="first_name">90</td>
            <td class="first_name">30</td>
            <td class="first_name">YES</td>
            <td class="first_name">10</td>
            <td class="first_name">5</td>
            <td class="first_name">----</td>
            
    <td class="first_name">5</td><button className="btn btn-Darkgrey m-1">Edit</button>
            

      </tr>

      <tr>

        <th scope="row">3</th>

        <td class="first_name">ARM01-STK</td>
            <td class="first_name">200</td>
            <td class="first_name">B092CZ1B5D</td>
            <td class="first_name">152</td>
            <td class="first_name">200</td>
            <td class="first_name">544</td>
            <td class="first_name">12,09</td>
            <td class="first_name">17</td>
            <td class="first_name">1100</td>
            <td class="first_name">NO</td>
            <td class="first_name">----</td>
            <td class="first_name">----</td>
            <td class="first_name">----</td>
            <td class="first_name">----</td>
            <td class="first_name">YES</td>
            <td class="first_name">Amazon.de</td>
            <td class="first_name">90</td>
            <td class="first_name">----</td>
            <td class="first_name">30</td>
            <td class="first_name">YES</td>
            <td class="first_name">10</td>
            <td class="first_name">Sprasad@cd-commerece.de</td>
            <td class="first_name">Raj kumar Prasad</td><button className="btn btn-Darkgrey m-1">Edit</button>
            


      </tr>

    </tbody>

  </table>

      </div>

  </div>
  
  )
}

export default Table