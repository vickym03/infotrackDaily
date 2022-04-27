import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import Preference from "./component/preference/Preference";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./component/login/Login";
import { useState } from "react";
import useToken from "./component/app/UserToken";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
const userToken = JSON.parse(tokenString);
return userToken?.token

}

function App() {
  const token = getToken();
  const { Token, setToken } = useToken();

  if(!token){
    return   <Login setToken={setToken}/>
  }
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav style={{ backgroundColor: "yellowgreen" }}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Link to="/">App</Link>
            <Link to="/Preference">Home</Link>
           
          </div>
        </nav> */}

          <div>
            <Route   path="/" component={Dashboard} />
            <Route path="/Preference" component={Preference} />
          </div>
        </div>
      </Router>



    
    </div>
  );
}

export default App;
