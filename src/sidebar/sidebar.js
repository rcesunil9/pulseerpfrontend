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
              <a href="/product" class="text-decoration-none">
                Products
              </a>
            </li>
            <li>
              <a href="/product/component" className="text-decoration-none">
                Components
              </a>
            </li>
            <li>
              <a href="/product/Bundle" class="text-decoration-none">
                Bundle
              </a>
            </li>
            <li>
              <a href="/product/Supplier" className="text-decoration-none">
                Supplier
              </a>
            </li>
            <li>
              <a href="/product/inventory_dashboard" className="text-decoration-none">
                Inventory Dashboard
              </a>
            </li>
            <li>
              <a href="/product/total_stock" className="text-decoration-none">
                Total Stock
              </a>
            </li>
            <li>
              <a href="/product/FBA_stock" className="text-decoration-none">
                FBA Stock
              </a>
            </li>
            <li>
              <a href="/product/recorder_management" className="text-decoration-none">
                Recorder Management
              </a>
            </li>
            <li>
              <a href="/product/purchase_pricing" className="text-decoration-none">
                Purchase Pricing
              </a>
            </li>
            <li>
              <a href="/product/sales_pricing" className="text-decoration-none">
                Sales Pricing
              </a>
            </li>
            <li>
              <a href="/product/core_data" className="text-decoration-none">
                Core Data
              </a>
            </li>
            <li>
              <a href="/product/analytics" className="text-decoration-none">
                Analytics
              </a>
            </li>
            <li>
              <a href="/product/stock_transfer" className="text-decoration-none">
                Stock Transfer
              </a>
            </li>
            <li>
              <a href="/product/import_to_jtl" className="text-decoration-none">
                Import To JTL
              </a>
            </li>
            <li>
              <a href="/product/import" className="text-decoration-none">
                Import
              </a>
            </li>
            <li>
              <a href="/product/jtl" className="text-decoration-none">
                JTL
              </a>
            </li>
            <li>
              <a href="/product/sellerboard" className="text-decoration-none">SELLERBOARD</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default sidebar;
