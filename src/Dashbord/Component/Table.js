import React from 'react'
const Table  = () => {
  return (

    <div> <table class="table table-striped table-hover bg-primary auto-resize -text-center mt-5">
      

    <thead>

      <tr>

        <th scope="col">#</th>

        <th scope="col">SKU</th><br></br>

        <th scope="col">Supplier Name</th>

        <th scope="col">Supplier SKU</th>

        <th scope="col">Link To the Online Store</th>

  

      </tr>

    </thead>

    <tbody>

      <tr>

        <th scope="row">1</th>
        <td>Mark</td>
        <td>Mark</td>
        <td>Mark</td>
        <td>Mark</td>
       
       
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

export default Table