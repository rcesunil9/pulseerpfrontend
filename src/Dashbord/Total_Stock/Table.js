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

        <td class="first_name">Raj kumar Prasad</td>
            <td class="first_name">+91-9041414538</td>
            <td class="first_name">Sprasad@cd-commerece.de</td>
            <td class="first_name">CD-commmerce ltd</td>
            <td class="first_name">Active</td>
            <td class="first_name">B/16, Gachnanagar</td>
            <td class="first_name">Indore</td>
            <td class="first_name">Madhay Pradesh</td>

      </tr>

      <tr>
        <th scope="row">2</th>
        <td class="first_name">Raj kumar Prasad</td>
            <td class="first_name">+91-9041414538</td>
            <td class="first_name">Sprasad@cd-commerece.de</td>
            <td class="first_name">CD-commmerce ltd</td>
            <td class="first_name">Active</td>
            <td class="first_name">B/16, Gachnanagar</td>
            <td class="first_name">Indore</td>
            <td class="first_name">Madhay Pradesh</td>

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

      </tr>
    </tbody>
  </table>
  </div>
  
  )
}

export default Table;