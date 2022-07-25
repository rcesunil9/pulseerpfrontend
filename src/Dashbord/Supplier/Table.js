import React from 'react'
const Table = () => {
  return (
    <div> 


         <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">

    <thead class="thead-light">



      <tr>
        <th scope="col">#</th>

        <th scope="col">Supplier Name-short form</th>

        <th scope="col">Supplier Name-according to JTL</th>

        <th scope="col">Country</th>

        <th scope="col"> Lead Time </th>

        <th scope="col">Minimum stock range</th>

        <th scope="col">Comment</th>  

  
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
      </tr>

      <tr>

        <th scope="row">2</th>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>

      </tr>

      <tr>

        <th scope="row">3</th>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>
        <td><input type="text" name="links" /></td>


      </tr>

    </tbody>
  </table>
  </div>

  )
}

export default Table;


