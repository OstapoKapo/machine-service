import mongoose from "mongoose";

const connect  = async () => {
    try{
        mongoose.set("strictQuery", false);
        mongoose.connect(`mongodb+srv://ostapokapo:Mro1DQZYWmWxuqSo@cluster0.zdrv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('connect')
    }catch(err){
        console.error('MongoDB connection error:', err);
        throw new Error("MongoDB connection failed");
    }
}

export default connect;