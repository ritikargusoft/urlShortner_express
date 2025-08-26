import mongoose from "mongoose";


//step1: to connect to mongoDB server
try {
    await mongoose.connect("mongodb://127.0.0.1/mongoose_database")
    mongoose.set("debug", true);
} catch (error) {
    console.error(error);
    process.exit()
} 


//Step2: create schema
const userSchema = mongoose.Schema({
    name:{ type: String, required: true},
    email:{ type: String, required: true, unique: true},
    age :{type:Number, required: true,min:5},
    createAt:{type:Date, default: Date.now()},
});

//step3: creating a model
const Users = mongoose.model("user", userSchema)

//step 4: inserting the data
await Users.create({name:"negi", age:35, email:"ritik@gamil.com"});

await mongoose.connection.close();