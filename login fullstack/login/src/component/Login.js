import { useFormik } from 'formik'
import React, { useState } from 'react'
import{userInfor} from "./userinfor"
function Login() {

    const [Data,setData]=useState()
    const[Message,setMessage] = useState("login Failed!")
    const formik =useFormik({
        validationSchema: userInfor,
        initialValues:{
            username:"",
            password:""
        },
        ValidateOnChange:true,
        onSubmit:(values)=>{
            console.log("values",values)
            setData(values)
            setMessage("login successful!!")
            console.log(Data)
            //console.log(setMessage)
        }
    })
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="card col-4 mt-5 ">
            <div className="card-header bg-warning">
              <h3 > Login</h3>
            </div>
          <div className="card-body">
            <input type="text" placeholder="Username" 
            onChange={formik.handleChange} value={formik.values.username}
            name="username"
            />
            <div className=' error text-danger'> {formik.errors.username}</div>

            <input className="mt-2" type="password" placeholder="Password"
            onChange={formik.handleChange} value={formik.values.password}
            name="password"
            />
            <div className=' error text-danger'> {formik.errors.password}</div>

            <br />
            <button className="btn btn-success mt-3"type='button' onClick={formik.handleSubmit}> login</button>

            {/* {ValidateOnChange?Message:setMessage} */}
          </div>
         {/* <p>{JSON.stringify(Data)}</p> */}
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
