import mongoose from "mongoose";

export default async function connectDB() {
    // Connection URI
    const psw = encodeURIComponent("@MaDitshwanelo99");
    const uri = `mongodb+srv://RreKhunou:${psw}@unsealed.maevek5.mongodb.net/unseal_db?retryWrites=true&w=majority`;

    const connect = await mongoose.connect(uri);
    console.log(`Mongodb connected via ${connect.connection.host}`);
}