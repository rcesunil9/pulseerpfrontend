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

      

    </Routes>
  
     {/* <Signup/> */}
    </div>
  );
}

export default App;
