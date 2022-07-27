import React from 'react'

 const Table = () => {

  return (

    <div> 

      <div className='table-responsive '>

      <table className="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">

    <thead>

      <tr>

        <th scope="col">#</th>

        <th scope="col">Transfer Number</th>

        <th scope="col">Position Type</th>

        <th scope="col">Expected delivery date</th>

        <th scope="col">item number</th>

        <th scope="col">Transfer quantity</th>

        <th scope="col">starting camp</th>

        <th scope="col">Target camp</th>

        <th scope="col">Shipping method</th>

        <th scope="col">Redistribution weight</th>

        <th scope="col">Supplier Lead Time in days</th>

        <th scope="col">Reorder Quantity</th>

        <th scope="col">Expected OOS in days</th>

      </tr>

    </thead>

    <tbody>

      <tr>

        <th scope="row">1</th>

        <td>Chari-dick</td>

        <td>Germany</td>

        <td>@mdo</td>
        
      </tr>
      
      <tr>

        <th scope="row">2</th>

        <td>Jacob</td>

        <td>Thornton</td>

        <td>@fat</td>

      </tr>

      <tr>

        <th scope="row">3</th>

        <td colspan="2">Larry the Bird</td>

        <td>@twitter</td>
        
        <td>@twitter</td>


      </tr>

    </tbody>

  </table>

      </div>

  </div>
  
  )
}

export default Table