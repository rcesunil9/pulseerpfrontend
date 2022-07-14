// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './User/Login';
import Signup from './User/Signup';
import Forgotpage from "./User/Forgotpassword";
import Dashboard from "./Dashbord/Dashbord";
import FbaDashboard from "./Dashbord/FbaStock/FbaDadhboard"
import CoreDataDashboard from "./Dashbord/CoreData/CoreDataDashboard"
import CoreDataSupplier from './Dashbord/CoreDataSupplier/CoreDataSuplierDashboard';
import RecorderDashboard from './Dashbord/RecorderDashboard/RecorderDashboard';
import SalesPricing from './Dashbord/SalesPricing/SalesPricingDashboard';
import SpCoredata from './Dashbord/SP-CoreData/SP-CoreDataDashboard';
import SpSpaCoreData from './Dashbord/SP-FBA-CoreData/SP-CoreDataDashboard';
import SPanalytics from './Dashbord/SP-Analytics/SP-Analytics';
import PurchasePrice from "./Dashbord/Purchase-price/PurchasePrice"
import StockPuchase from "./Dashbord/StockPuchase/StockPuchase"
import UTS_JTL from "./Dashbord/StockPuchase/StockPuchase"
import Import_jtl from './Dashbord/Import_JTL/Import_JTL';


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


      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/fbadashboard" element={<FbaDashboard />} />
      <Route path="/dashboard/coredatadashboard" element={<CoreDataDashboard />} />
      <Route path="/dashboard/coredatasupplier" element={<CoreDataSupplier />} />
      <Route path="/dashboard/RecorderDashboard" element={<RecorderDashboard />} />
      <Route path="/dashboard/salespricing" element={<SalesPricing />} />
      <Route path="/dashboard/spcoredata" element={<SpCoredata />} />
      <Route path="/dashboard/spspacoredata" element={<SpSpaCoreData />} />
      <Route path="/dashboard/spanalytics" element={<SPanalytics />} />
      <Route path="/dashboard/purchaseprice" element={<PurchasePrice />} />
      <Route path="/dashboard/StockPuchase" element={<StockPuchase />} />
      <Route path="/dashboard/UTS_JTL" element={<UTS_JTL />} />
      <Route path="/dashboard/imp_jtl" element={<Import_jtl />} />

      

    </Routes>
  
     {/* <Signup/> */}
    </div>
  );
}

export default App;
