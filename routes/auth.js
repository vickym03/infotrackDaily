const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");


router.post("/", async (req, res) => {
	try {
		console.log("request",req.body)
		const { error } = validate(req.body);
		if (error){
			return res.status(400).send({ message: error.details[0].message });
		}
        console.log("user",User)
		const user = await User.findOne({ email: req.body.email });

		if (!user){
			return res.status(401).send({ message: "Invalid Email or Password" });
		}
console.log("user requested",user)
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword){
			return res.status(401).send({ message: "Invalid Email or Password" });
		}

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	 } 
	catch (error) {
		console.log("error",error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});




// router.post('/login', (req,res) => {
//     const postData = req.body;
//     const user = {
//         "email": postData.email,
//         "name": postData.name
//     }
//     // do the database authentication here, with user name and password combination.
//     const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
//     const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})
//     const response = {
//         "status": "Logged in",
//         "token": token,
//         "refreshToken": refreshToken,
//     }
//     tokenList[refreshToken] = response
//     res.status(200).json(response);
// })



// router.post('/token', (req,res) => {
//     // refresh the damn token
//     const postData = req.body
//     // if refresh token exists
//     if((postData.refreshToken) && (postData.refreshToken in tokenList)) {
//         const user = {
//             "email": postData.email,
//             "name": postData.name
//         }
//         const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
//         const response = {
//             "token": token,
//         }
//         // update the token in the list
//         tokenList[postData.refreshToken].token = token
//         res.status(200).json(response);        
//     } else {
//         res.status(404).send('Invalid request')
//     }
// })

// router.use(require('./tokenChecker'))


const validate = (data) => {
	console.log("data", data  )
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};


module.exports = router;

