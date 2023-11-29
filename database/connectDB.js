const {mongoose} = require("mongoose");

const connectDB = ()=>{
    
    mongoose.connect("mongodb+srv://priyanshu:pspspsps@cluster0.zddvrp5.mongodb.net/codeEditor?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Database Connected");
    })
    .catch((err)=>{
        console.log(err.message);
    })

}

module.exports = connectDB;