import mongoose from "mongoose"

const mongoDBconnect = async () => {
    try {
        const connect  = mongoose.connect(process.env.MONGO)
        console.log(`MongoDB Connect successfully.`);
    } catch (error) {
        console.log(error.message);
    }
    
}


export default mongoDBconnect;