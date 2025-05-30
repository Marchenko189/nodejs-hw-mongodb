import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const initMongoConnection = async () => {
    const {
        MONGODB_USER,
        MONGODB_PASSWORD,
        MONGODB_URL,
        MONGODB_DB,
    } = process.env;
    
    // mongodb+srv://marcenkoo189:<db_password>@cluster0.ekq6h1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    
    const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(uri);
        console.log('Mongo connection successfully established!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};