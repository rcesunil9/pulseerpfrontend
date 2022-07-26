import React from 'react'
 const Table = () => {
  return (
    <div> 
        <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">
    <thead>

    <table class="center"> </table>

      <tr>
        <th scope="col">#</th>

        <th scope="col">FBA SKU</th>

        <th scope="col">Current VK</th>

        <th scope="col">Current DB</th>

        <th scope="col">ROI</th>

        <th scope="col">Marge</th>

        <th scope="col">Sales Velocity</th>

        <th scope="col">Ratio New VK vs Current VK</th>

        <th scope="col">New VK</th>

        <th scope="col">DB</th>

        <th scope="col">ROI</th>

        <th scope="col">Marge</th>

        <th scope="col">Sales Velocity</th>

      </tr>

    </thead>

    <tbody>

      <tr>

      <table class="center"> </table>

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