// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './User/Login';
import Signup from './User/Signup';
import Forgotpage from "./User/Forgotpassword";
import Product from "./Dashbord/Product";
import Component from "./Dashbord/Component/Component"
import Bundle from "./Dashbord/Bundle/Bundle"
import Supplier from './Dashbord/Supplier/Supplier';
import Inventory_Dashboard from './Dashbord/Inventory_Dashboard/Inventory_Dashboard';
import Total_Stock from './Dashbord/Total_Stock/Total_Stock';
import FBA_Stock from './Dashbord/FBA_Stock/FBA_Stock';
import Recorder_Management from './Dashbord/Recorder_Management/Recorder_Management';
import Purchase_Pricing from './Dashbord/Purchase_Pricing/Purchase_Pricing';
import Sales_Pricing from "./Dashbord/Sales_Pricing/Sales_Pricing"
import Core_Data from "./Dashbord/Analytics/Analytics"
import Analytics from "./Dashbord/Analytics/Analytics"
import Stock_Transfer from './Dashbord/Stock_Transfer/Stock_Transfer';
import Import_To_JTL from "./Dashbord/Import_To_JTL/Import_To_JTL";
import Import from "./Dashbord/Import/Import";
import JTL from "./Dashbord/JTL/JTL";
import SELLERBOARD from "./Dashbord/SELLERBOARD/SELLERBOARD"


import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/signup" exact element={<Signup/>} />
      <Route path="/forgot" element={<Forgotpage />} />


      
      <Route path="/product" element={<Product/>} />
      <Route path="/product/component" element={<Component />} />
      <Route path="/product/Bundle" element={<Bundle />} />
      <Route path="/product/Supplier" element={<Supplier />} />
      <Route path="/product/inventory_dashboard" element={<Inventory_Dashboard />} />
      <Route path="/product/total_stock" element={<Total_Stock />} />
      <Route path="/product/FBA_stock" element={<FBA_Stock />} />
      <Route path="/product/recorder_management" element={<Recorder_Management />} />
      <Route path="/product/purchase_pricing" element={<Purchase_Pricing />} />
      <Route path="/product/sales_pricing" element={<Sales_Pricing />} />
      <Route path="/product/core_data" element={<Core_Data />} />
      <Route path="/product/analytics" element={<Analytics />} />
      <Route path="/product/stock_transfer" element={<Stock_Transfer />} />
      <Route path="/product/import_to_jtl" element={<Import_To_JTL />} />
      <Route path="/product/import" element={<Import />} />
      <Route path="/product/jtl" element={<JTL />} />
      <Route path="/product/sellerboard" element={<SELLERBOARD />} />

      

    </Routes>
  
     {/* <Signup/> */}
    </div>
  );
}

export default App;
