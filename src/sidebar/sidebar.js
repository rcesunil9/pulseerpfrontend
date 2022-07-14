import React from "react";

const sidebar = () => {
  return (
    <div>
      <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
            <h2>Dashboard</h2>
          </div>

          <ul class="list-unstyled components text-center">
            <li class="active">
              <a
                href="/dashboard"
                
                class="text-decoration-none"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/dashboard/fbadashboard"
                className="text-decoration-none"
              >
                Components
              </a>
            </li>
            <li>
              <a
                href="/dashboard/coredatadashboard"
                
                class="text-decoration-none"
              >
                Bundle
              </a>
            </li>
            <li>
              <a
                href="/dashboard/coredatasupplier"
                className="text-decoration-none"
              >
            Supplier
              </a>
            </li>
            <li>
              <a
                href="/dashboard/RecorderDashboard"
                className="text-decoration-none"
              >
                Inventory Dashboard
              </a>
            </li>
            <li>
              <a
                href="/dashboard/salespricing"
                className="text-decoration-none"
              >
                Total Stock
              </a>
            </li>
            <li>
              
              <a href="/dashboard/spcoredata" className="text-decoration-none">
                FBA Stock
              </a>
            </li>
            <li>
              
              <a
                href="/dashboard/spspacoredata"
                className="text-decoration-none"
              >
                Recorder Management
              </a>
            </li>
            <li>
              
              <a href="/dashboard/spanalytics" className="text-decoration-none">
                Purchase Pricing
              </a>
            </li>
            <li>
              <a
                href="/dashboard/purchaseprice"
                className="text-decoration-none"
              >
                Sales Pricing
              </a>
            </li>
            <li>
              <a
                href="/dashboard/StockPuchase"
                className="text-decoration-none"
              >
                Core Data 
              </a>
            </li>
            <li>
              <a href="/dashboard/UTS_JTL" className="text-decoration-none">
                Analytics
              </a>
            </li>
            <li>
              <a href="/dashboard/imp_jtl" className="text-decoration-none">
                Stock Transfer
              </a>
            </li>
            <li>
              <a
                href="/dashboard/purchaseprice"
                className="text-decoration-none"
              >
                Import To JTL
              </a>
            </li>
            <li>
              <a
                href="/dashboard/purchaseprice"
                className="text-decoration-none"
              >
                Import
              </a>
            </li>
            <li>
              <a
                href="/dashboard/purchaseprice"
                className="text-decoration-none"
              >
                JTL
              </a>
            </li>
            <li>
              <a href="#">SELLERBOARD</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default sidebar;
