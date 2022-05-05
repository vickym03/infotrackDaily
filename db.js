const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://vicky:vicky123@cluster0.o1i4r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
		connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
