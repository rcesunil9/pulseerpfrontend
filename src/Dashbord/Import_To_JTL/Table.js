import React from 'react'
 const Table = () => {
  return (
    
    <div> 
      <div className='table-responsive '>
      <table className="table dashboardtable table-hover bg-Darkgrey auto-resize -10 mt-2">
    <thead>
      <tr>

        <th scope="col">#</th>

        <th scope="col">Item number</th>

        <th scope="col">Inventory Wiedemann</th>

        <th scope="col">Incoming</th>

        <th scope="col">Item weight</th>

        <th scope="col">Ek net (for GLD)</th>

      </tr>

    </thead>

    <tbody>

      <tr>
        
        <th scope="row">1</th>
        <td class="item_number">ULG-D6799-A2-M4-BASIS</td>
            <td class="Inventory_Wiedemann">0</td>
            <td class="incoming"> 0 </td>
            <td class="item_weight">0,0001</td>
            <td class="EKnet_for GLD">0</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td class="item_number">ULG-D6799-A2-M4-PARENT</td>
            <td class="Inventory_Wiedemann">0</td>
            <td class="incoming"> 0 </td>
            <td class="item_weight">0,0001</td>
            <td class="EKnet_for GLD">0</td>


      </tr>
      
      <tr>

        <th scope="row">3</th>

        <td class="item_number">ULS-D9021-A2-M2-BASIS</td>
            <td class="Inventory_Wiedemann">11</td>
            <td class="incoming"> 0 </td>
            <td class="item_weight">0,00018</td>
            <td class="EKnet_for GLD">0,0026</td>

      </tr>

    </tbody>

  </table>

      </div>

  </div>
  
  )
}

export default Table