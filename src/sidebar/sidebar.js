import React from 'react'

const sidebar = () => {
  return (
    <div><div class="wrapper">
    {/* <!-- Sidebar --> */}
    <nav id="sidebar">
        <div class="sidebar-header">

            <h3>Dashboard</h3>
        </div>

        <ul class="list-unstyled components">
            
            <li class="active">

                <a href="/FBAStockDashboard" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Compoments</a>
                
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
                <a href="#">Products</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Third Tab</a>
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
                <a href="#">Forth Tab</a>
            </li>
              <li>
              <a herf="#">Five Tab</a>
               </li>
              <li> <a herf="#"> Six Tab </a>
              </li>
              <li> <a herf="#"> Seven tab </a>
              </li>
              <li><a herf="#"> Eight tab </a> 
              </li>
              <li><a herf="#"> Nine tab </a> 
              </li>
              <li><a herf="#"> Ten tab </a> 
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