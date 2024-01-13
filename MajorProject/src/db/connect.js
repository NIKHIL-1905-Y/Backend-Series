import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
import express from 'express'
const app = express()



const connectDB = async ()=>{

    try{
  
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

      console.log(`\n Mongo DB Connected !! DB HOST: ${connectionInstance.connection.host}`);
      
      app.on("error",(error)=>{
        console.log("Error in Express",error);
        throw error
      })

  
    }
    catch(error){
      console.log("Error in mongo Db Connection :",error);
      process.exit(1)
    }
  
  }

  export default connectDB;
