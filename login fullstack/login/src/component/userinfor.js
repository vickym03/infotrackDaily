
import * as Yup from "yup";

const userInfor =Yup.object().shape({
    username: Yup.string()
    .required("Enter username"),
    
    password: Yup.string()
    .required('Please Enter your password')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
})

export {userInfor}