import React from 'react'
const Table = () => {
  return (
    <div> 
         <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">
    <thead>

      <tr>

        <th scope="col">#</th>
        <th scope="col">"Supplier Name short form</th>
        <th scope="col">"Supplier Name according to JTL</th>
        <th scope="col">Country</th>
        <th scope="col">Lead Time</th>
        <th scope="col">Minimum stock range</th>
        <th scope="col">Fillrate in days</th>
        <th scope="col">Comment</th>
        <th scope="col">Main Supplier</th>
  
      </tr>
    </thead>
    <tbody>
      <tr>
        
        <th scope="row">1</th>

        <td> </td>
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

export default Table;