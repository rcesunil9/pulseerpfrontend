import React from 'react'
const CoreDataDashboard = () => {
  return (
    <div> 
        <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Basisc SKU</th>
        <th scope="col">Current GLD</th>
        <th scope="col">Total stock Value</th>
        <th scope="col">Current FBA Stock</th>
        <th scope="col">Incoming Stock</th>
        <th scope="col">Daily Sales Velocity</th>
        <th scope="col">Total stock range in days</th>
        <th scope="col">Minimum Stock Range in days</th>
        <th scope="col">Main supplier</th>
        <th scope="col">Supplier Lead Time in days</th>
        <th scope="col">Reorder Quantity</th>
        <th scope="col">Expected OOS in days</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
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

      </tr>

    </tbody>

  </table>

  </div>
  
  )
}

export default CoreDataDashboard