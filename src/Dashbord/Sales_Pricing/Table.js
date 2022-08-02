import React from 'react'
 const Table = () => {
  return (


    <div> 

        <table class="table dashboardtable table-hover bg-Darkgrey auto-resize -10 mt-2">

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
        <td class="first_name">Raj kumar Prasad</td>
            <td class="first_name">+91-9041414538</td>
            <td class="first_name">Sprasad@cd-commerece.de</td><button className="btn btn-Darkgrey m-1">Edit</button>

              </tr>
      <tr>
        <th scope="row">2</th>
        <td class="first_name">Raj kumar Prasad</td>
            <td class="first_name">+91-9041414538</td>
            <td class="first_name">Sprasad@cd-commerece.de</td><button className="btn btn-Darkgrey m-1">Edit</button>

              </tr>

      <tr>

        <th scope="row">3</th>

        <td class="first_name">Raj kumar Prasad</td>
            <td class="first_name">+91-9041414538</td>
            <td class="first_name">Sprasad@cd-commerece.de</td><button className="btn btn-Darkgrey m-1">Edit</button>

        
      </tr>

    </tbody>

  </table>

  </div>
  
  )
}

export default Table