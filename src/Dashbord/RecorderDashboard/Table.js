import React from 'react';
const RecorderDashboard = () => {
  return (
    <div> 
        <table class="table dashboardtable table-hover bg-primary auto-resize -10 mt-2">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Current Main Supplier</th>
        <th scope="col">Supplier Name</th>
        <th scope="col">Supplier Art. No.</th>
        <th scope="col">SKU</th>
        <th scope="col">Reorder Quantity</th>
        <th scope="col">Reorder Quantity in VPE</th>
        <th scope="col">"Total stock range in days</th>
        <th scope="col">GLD per 100 units</th>
       
      
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        
        <td> </td>
        <td>Mark</td>
        <td>Mark</td>
        <td>Mark</td>
        <td>Mark</td>
        <td>Mark</td>
        <td>Mark</td>
        
      </tr>
      <tr>

        <th scope="row">2</th>
        <td>Sunil</td>
        <td>kumar</td>
        <td>Pd</td>
        <td>india</td>
        <td>MP- Bhopal</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        <td>Linkdin</td>
        <td>Insatgram</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export default RecorderDashboard


 

