import { BrowserRouter as Router} from "react-router-dom";
import { Link,Route,Switch } from 'react-router-dom';
import './App.css';
import Dashboard from "./InsideApp/Dashboard";
import Form1 from "./OutsideApp/ForgotPassword/Form1";
import Form2 from "./OutsideApp/ForgotPassword/Form2";
import Login from './OutsideApp/Login/Login'
import Account from './InsideApp/Pages/Account/Account';
import Notes from './InsideApp/Pages/Notes/Notes';
import Inventory from './InsideApp/Pages/Inventory/Inventory';
import Files from './InsideApp/Pages/Files/Files';
import ToDo from './InsideApp/Pages/ToDo List/ToDo';

function App() {
  return (
    <Router>
    
    <div className="App">
      {/* <Login/> */}
      <Route exact path="/"><Login /></Route>  
      <Route exact path="/forgot1"><Form1 /></Route>
      <Route exact path="/forgot2"><Form2 /></Route> 
      <Route exact path="/dashboard"><Dashboard /></Route>
      <Route exact path="/dashboard/account"><Account /></Route>
      <Route exact path="/dashboard/notes"><Notes /></Route>
      <Route exact path="/dashboard/inventory"><Inventory /></Route>
      <Route exact path="/dashboard/file"><Files /></Route>
      <Route exact path="/dashboard/to-do"><ToDo /></Route>
    </div>
    </Router>
    
  );
}

export default App;
