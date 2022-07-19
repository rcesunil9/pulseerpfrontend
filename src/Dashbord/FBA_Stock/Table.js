import React from 'react'
 const Table = () => {
  return (
    <div> 
        <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">
    <thead>
      <tr>
        <th scope="col">#</th>
        
        <th scope="col">JTL/ FBM SKU/ Bundle</th>

        <th scope="col">FBA SKU</th>

        <th scope="col">Basis SKU/ Component</th>

        <th scope="col">Units of Basis SKU</th>

        <th scope="col">Daily Sales Velocity - Daum</th>

        <th scope="col">Daily Sales Velocity currently Sellerboard</th>

        <th scope="col">Daily Sales Velocitiy - Average</th>

        <th scope="col">50 days sales velocity VPE</th>

        <th scope="col">Current FBA stock VPE</th>

        <th scope="col">FBA stock range</th>

        <th scope="col">Stock transfer proposal</th>

        <th scope="col">Shortage!</th>

      </tr>

    </thead>

    <tbody>

      <tr>

        <th scope="row">1</th>
        <td>Chari</td>
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
  
  )
}

export default Table