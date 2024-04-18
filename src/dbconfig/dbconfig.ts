import mongoose, { connection } from "mongoose";

export async function connect() {
    try{
      mongoose.connect(process.env.MONGO_URL!)
      const connection = mongoose.connection;
      connection.on('connected', () => {
       console.log("Mongo db connected successfully")
      })
      connection.on('error', (error) => {
        console.log(error.message)
        process.exit();
      })
    } catch(error: any){
        console.log(error.message);
    }
}