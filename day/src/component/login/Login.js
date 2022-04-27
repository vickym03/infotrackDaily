import PropTypes from 'prop-types';
import React, { useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function Login({ setToken }) {
    const [username, setUserName] = useState();
    console.log(username)   
    //  console.log(setUserName)


  const [password, setPassword] = useState();
  console.log(password)


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return (
    <div>
      {/* login */}
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card">
              <div className="card-header  bg-dark ">
                <h3 className="text-white">Please Login</h3>
              </div>
              <div className="card-body">

             <div onSubmit={handleSubmit}>
             <div className="mt-2">
                <input placeholder="UserName" type="text" onChange={e => setUserName(e.target.value)}/>
              </div>
              <div className="mt-2">
                <input placeholder="Password"  type="password" onChange={e => setPassword(e.target.value)} />
              </div>
              <button className=" btn btn-outline-success m-3 text-center  " type='submit' > Login</button>
             </div>
              </div>
            </div>
            <p>{JSON.stringify(username)}</p>
          <p>{JSON.stringify(password)}</p>

          </div>
          <div className="col-4"></div>
        
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }



export default Login;
