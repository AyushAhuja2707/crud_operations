const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb://project:project123@cluster0-shard-00-00.oceu2.mongodb.net:27017,cluster0-shard-00-01.oceu2.mongodb.net:27017,cluster0-shard-00-02.oceu2.mongodb.net:27017/dma?ssl=true&replicaSet=atlas-cfkrh9-shard-0&authSource=admin&retryWrites=true&w=majority";


mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );
	
	
//Step 2: Create Schema (Java Class)
const userSchema = new mongoose.Schema({
	name: String,
	phone: Number,
	service: String,
	type: String,
	location: String,
	address: String,
	size: String,
	rooms: Number,
	cost: Number
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("users", userSchema);

exports.User = userObject;