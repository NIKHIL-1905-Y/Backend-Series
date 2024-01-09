import moongoose from "mongoose"


const doctorSchema = new moongoose.Schema({
         doctorName:{
            type:String,
            required:true,
            unique:true
         },
         doctorId:{
            type:Number,
            required:true,
            unique:true,
         },
         doctorTreating:{
            type:moongoose.Schema.Types.ObjectId,
            ref:"Patient"

         }
},{timestamps:true})

export const Doctor = moongoose.model("Doctor",doctorSchema)