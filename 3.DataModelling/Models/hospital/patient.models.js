import mongoose from "moongoose"

const patientSchema = new mongoose.Schema({
        
      patientName:{
        type:String,
        required:true,
      },
      patientUid:{
        type:Number,
        required:true,
        unique:true,
      }
    
    
       

},{timeStamps:true});



export const Patient = mongoose.model("Patient",patientSchema)