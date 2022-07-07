// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './User/Login';
import Signup from './User/Signup';
import Forgotpage from "./User/Forgotpassword"
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
      <Route path="/logout" exact element={<Signup/>} />
      <Route path="/forgot" element={<Forgotpage />} />
    </Routes>
  
     {/* <Signup/> */}
    </div>
  );
}

export default App;
