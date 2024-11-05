const app = require("./app");
const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb is cunnected localserver')  
    } catch (error) {
        console.log(error.message)
    }
    
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is Running http://localhost:${PORT}`)
    connectDB()
})