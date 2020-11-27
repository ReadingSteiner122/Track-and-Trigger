import { BrowserRouter as Router} from "react-router-dom";
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from "./InsideApp/Dashboard";
import Login from './OutsideApp/Login/Login'
import Account from './InsideApp/Pages/Account/Account';
import Notes from './InsideApp/Pages/Notes/Notes';
import Inventory from './InsideApp/Pages/Inventory/Inventory';
import Files from './InsideApp/Pages/Files/Files';
import ToDo from './InsideApp/Pages/ToDo List/ToDo';
import 'antd/dist/antd.css';
import Register from "./OutsideApp/Register/Register";
import ForgotPassword1 from "./OutsideApp/ForgotPassword/ForgotPassword1";
import ForgotPassword2 from "./OutsideApp/ForgotPassword/ForgotPassword2";
import NewEntry from "./InsideApp/Pages/Notes/NewEntry";
import { connect } from "react-redux";
import { fetchUserAction } from './Redux/ActionCreator'
import TNewEntry from "./InsideApp/Pages/ToDo List/TNewEntry";
import ANewFile from "./InsideApp/Pages/Files/ANewFile";
import OTP_Form from "./OutsideApp/Register/OTP_Form";
import DeleteFile from "./InsideApp/Pages/Files/DeleteFile";


function App(props) {
  useEffect(() => {
    props.fetch_user();
}, []);
  return (
    <Router>
    
    <div className="App">
      {/* <Login/> */}
      <Route exact path="/"><Login /></Route>  
      <Route exact path="/register"><Register /></Route> 
      <Route exact path="/forgot1"><ForgotPassword1 /></Route>
      <Route exact path="/forgot2"><ForgotPassword2 /></Route> 
      <Route exact path="/dashboard"><Dashboard /></Route>
      <Route exact path="/dashboard/account"><Account /></Route>
      <Route exact path="/dashboard/notes"><Notes /></Route>
      <Route exact path="/dashboard/inventory"><Inventory /></Route>
      <Route exact path="/dashboard/file"><Files /></Route>
      <Route exact path="/dashboard/to-do"><ToDo /></Route>
      <Route exact path="/dashboard/notes/new"><NewEntry /></Route>
      <Route exact path="/dashboard/to-do/new"><TNewEntry /></Route>
      <Route exact path="/dashboard/file/new"><ANewFile/></Route>
      <Route exact path="/otp"><OTP_Form /></Route>
      <Route exact path="/dashboard/file/delete"><DeleteFile/></Route>
    </div>
    </Router>
    
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetch_user: () => {
          dispatch(fetchUserAction());
      },
  };
};

export default connect(null, mapDispatchToProps)(App);

