const mongoose = require("mongoose")

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected SO HARD!")
}

module.exports = {
    connectDB
}