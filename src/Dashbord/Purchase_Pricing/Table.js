import React from 'react'
 const Table = () => {
  return (
    <div> 
        <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">
    <thead>

      <tr>

        <th scope="col">#</th>
        <th scope="col">FBA SKU</th>
        <th scope="col">Current VK</th>
        <th scope="col">Current DB</th>
        <th scope="col">ROI</th>
        <th scope="col">Marge</th>
        <th scope="col">New VK</th>
        <th scope="col">DB</th>
        <th scope="col">ROI</th>
        <th scope="col">Marge</th>

        <th scope="col">Sales Velocity</th>
      </tr>

    </thead>

    <tbody>

      <tr>
        
        <th scope="row">1</th>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        
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

        <td>@twitter</td>

        <td>@twitter</td>
        
        <td>@twitter</td>


      </tr>

    </tbody>

  </table>

  </div>
  
  )
}

export default Table
