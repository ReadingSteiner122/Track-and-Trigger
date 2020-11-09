import { BrowserRouter } from "react-router-dom";
import { Link,Route,Switch } from 'react-router-dom';
import './App.css';

import Login from './OutsideApp/Login/Login'
function App() {
  return (
    <div className="App">
      <Login/>
      <Route path="/"><Login /></Route> 
    </div>
  );
}

export default App;
