import React, { useState } from "react";
import { useFormik } from "formik";
import {userInfoSchema} from "./schema"

function FormS() {
    const [data,setData] = useState(undefined)
    const formik = useFormik({
        validationSchema: userInfoSchema,
        initialValues: {
          firstName: "",
          lastName: "",
          email: ""
        },
        validateOnChange: true,
        onSubmit: (values) => {
          console.log("values", values);
          
          setData(values)

        }
      });
              console.log("data", data);

  return (

    
    <div>
        <h1 className="bg-dark col-lg-12 text-white"> using formik and yup</h1>
         <div className="container mt-4">
        <div className="row">
            <p>{JSON.stringify(data)}</p>
        <div className="col-lg-4"></div>
      <div className="col-lg-4">
          <div className="card">
              <div className="card-body"></div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <div className="error text-danger">{formik.errors.firstName}</div>
      </div>
      <div>
        <label className="mt-4">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <div className="error text-danger">{formik.errors.lastName}</div>
      </div>
      <div>
        <label className="mt-4">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="error text-danger">{formik.errors.email}</div>
      </div>
      
      <button  className="btn btn-success m-3" onClick={formik.handleSubmit}>  save </button>

      </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default FormS
