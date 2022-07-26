import React from 'react'
 const Table = () => {
  return (
    <div> 
        <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">FBA SKU</th>
        <th scope="col">Purchase Price for Sellerboard</th>
        <th scope="col">Last updated-automatically</th>
             </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
      </tr>

      <tr>

        <th scope="row">3</th>

        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>

      </tr>

    </tbody>

  </table>

  </div>
  
  )
}

export default Table