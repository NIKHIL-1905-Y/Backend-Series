import mongoose from "moongoose"

const patientSchema = new mongoose.Schema({
        
      patientName:{
        type:String,
        required:true,
      },
      diagnosedWith:{
           type:String,
           required:true
      },
      address:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        required:true
      },
      bloodGroup:{
        type:String,
        enum:["A","A+","A-","B","B+","B-","AB","AB+","AB-","O","O+","O-","Rhesus+","Rhesus-",],
        required:true
      },
      patientUid:{
        type:Number,
        required:true,
        unique:true,
      },
      gender:{
        type:String,
        enum:["M","F","O"],
        required:true
      },
      addmittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
      }  

},{timeStamps:true});



export const Patient = mongoose.model("Patient",patientSchema)