import mongoose from "mongoose"
import moongoose from "mongoose"


const doctorSchema = new moongoose.Schema({
         doctorName:{
            type:String,
            required:true,
            unique:true
         },
         salary:{
            type:String,
            required:true,
           
         },
         qualifiaction:{
            type:String,
            required:true
         },
         experienceInYears:{
            type:Number,
            default:0
         },
         doctorTreating:{
            type:moongoose.Schema.Types.ObjectId,
            ref:"Patient"

         },
         worksInHospitals:[
            {
               type:mongoose.Schema.Types.ObjectId,
               ref:"Hospital"
            }
         ]
},{timestamps:true})

export const Doctor = moongoose.model("Doctor",doctorSchema)