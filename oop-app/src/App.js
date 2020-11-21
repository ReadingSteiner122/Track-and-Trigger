import { BrowserRouter as Router} from "react-router-dom";
import { Link,Route,Switch } from 'react-router-dom';
import './App.css';
import Dashboard from "./InsideApp/Dashboard";
import Form1 from "./OutsideApp/ForgotPassword/Form1";
import Form2 from "./OutsideApp/ForgotPassword/Form2";
import Login from './OutsideApp/Login/Login'

function App() {
  return (
    <Router>
    
    <div className="App">
      {/* <Login/> */}
      <Route exact path="/"><Login /></Route>  
      <Route exact path="/forgot1"><Form1 /></Route>
      <Route exact path="/forgot2"><Form2 /></Route> 
      <Route exact path="/dashboard"><Dashboard /></Route>
    </div>
    </Router>
    
  );
}

export default App;
