import React from 'react'
 
const Table = () => {

  return (

    <div> 
        <table class="table dashboardtable table-hover bg-DarkGray auto-resize -10 mt-2">
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
        <td class="first_name">Sunil kumar Prasad</td>
            <td class="first_mobile">+91-9941414537</td>
            <td class="first_Eamil.id">Sprasad@cd-commerece.de</td>
            <td class="first_Company">CD-commmerce ltd</td>
            <td class="first_name">Active</td>
            <td class="first_name">B/56, Rachnanagar</td>
            <td class="first_name">Bhopal</td>
            <td class="first_name">Madhay Pradesh</td>
            <td class="first_name">462022</td>

      </tr>
      
      <tr>
      
        <th scope="row">2</th>
        <td class="first_name">Thunit kumar Prasad</td>
            <td class="first_name">+91-9941414537</td>
            <td class="first_name">Tprasad@cd-commerece.de</td>
            <td class="first_name">CD-commmerce ltd</td>
            <td class="first_name">Active</td>
            <td class="first_name">B/86, Rachnanagar</td>
            <td class="first_name">Bhopal</td>
            <td class="first_name">Madhay Pradesh</td>
            <td class="first_name">462022</td>


      </tr>

      <tr>

        <th scope="row">3</th>

        <td class="first_name">Raj kumar Prasad</td>
            <td class="first_name">+91-9041414538</td>
            <td class="first_name">Sprasad@cd-commerece.de</td>
            <td class="first_name">CD-commmerce ltd</td>
            <td class="first_name">Active</td>
            <td class="first_name">B/16, Gachnanagar</td>
            <td class="first_name">Indore</td>
            <td class="first_name">Madhay Pradesh</td>
            <td class="first_name">452012</td>



      </tr>

    </tbody>

  </table>

  </div>
  
  )

 }
  

export default Table