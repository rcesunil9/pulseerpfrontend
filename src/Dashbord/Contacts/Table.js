import React from 'react'
 const Table = () => {

  return (

    <div> 
        <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">
    <thead>
      <tr>
        <th scope="col">#</th>
        
        <th scope="col"> Full Name </th>

        <th scope="col"> Phone </th>

        <th scope="col"> Email id</th>

        <th scope="col"> Company </th>

        <th scope="col"> Status </th>

        <th scope="col"> Address </th>

        <th scope="col"> City </th>

        <th scope="col"> State </th>

        <th scope="col"> ZIPCODE </th>

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