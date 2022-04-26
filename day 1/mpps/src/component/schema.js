import * as Yup from "yup";

const userInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, "First name should be minimum 4 character")
    .max(10, 'Maximum value 10') 
    .required("First name is required"),
  lastName: Yup.string()
    .min(1, "Last name should be minimum 5 character")
    .required("Last name is required"),
  email: Yup.string()
    .email("Please type correct email address")
    .required("Email is required")
    .max(15, 'Maximum value 15') ,
phonenumber: Yup.string()

});

export { userInfoSchema };
