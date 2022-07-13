import React from 'react'

const sidebar = () => {
  return (
    <div>
        <div class="wrapper">
    <nav id="sidebar">
        <div class="sidebar-header">

            <h3>Dashboard</h3>
        </div>

        <ul class="list-unstyled components text-center">
            
            <li class="active">

                <a href="/dashboard" data-toggle="collapse" aria-expanded="false" class="text-decoration-none">Stock</a>
                
                {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul> */}
            </li>
            <li>
                <a href="/dashboard/fbadashboard" className='text-decoration-none'>FBA </a>
            </li>
            <li>
                <a href="/dashboard/coredatadashboard" data-toggle="collapse" aria-expanded="false" class="text-decoration-none">Core Data</a>
                {/* <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul> */}
            </li>
               <li>
                <a href="/dashboard/coredatasupplier" className='text-decoration-none'>Core Data Supplier</a>
            </li>
              <li>
              <a href="/dashboard/RecorderDashboard" className='text-decoration-none'>Recorder</a>

               </li>
              <li> 
                <a href="/dashboard/salespricing" className='text-decoration-none'>Sales pricing</a>
              </li>
              <li>  <a href="/dashboard/spcoredata" className='text-decoration-none'>SP Core Data</a>
              </li>
              <li> <a href="/dashboard/spspacoredata" className='text-decoration-none'>SP FBA Core Data</a>
              </li>
              <li> <a href="/dashboard/spanalytics" className='text-decoration-none'>SP Analytics</a>
              </li>
              <li><a href="/dashboard/purchaseprice" className='text-decoration-none'>Purchase Price</a> 
              </li>
              <li><a href="/dashboard/StockPuchase" className='text-decoration-none'>Stock Purchase</a> 
              </li>
              <li><a href="/dashboard/UTS_JTL" className='text-decoration-none'>Upload Stock Transfer JTL</a> 
              </li>
              <li><a href="/dashboard/purchaseprice" className='text-decoration-none'>b</a> 
              </li>
              <li><a href="/dashboard/purchaseprice" className='text-decoration-none'>b</a> 
              </li>
              <li><a href="/dashboard/purchaseprice" className='text-decoration-none'>b</a> 
              </li>
              <li><a href="/dashboard/purchaseprice" className='text-decoration-none'>b</a> 
              </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>

</div></div>
  )
}

export default sidebar