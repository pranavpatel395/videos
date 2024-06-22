// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
const port = connection.env.PORT || 8000;

dotenv.config({
    path: './.env'
})



connectDB()

.then(()=>{
    app.listen(port , ()=>{
        console.log(`Connection is succesful , ${port}`);
    })
})
.catch((error)=>{
    console.log("connection faild", error)
})




/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/