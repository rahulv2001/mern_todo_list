import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;
const MONGO_URL = process.env.MONGO_URL;

mongoose.set('strictQuery', false);
const Conection = () => {
    // const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.rkkloo3.mongodb.net/?retryWrites=true&w=majority`;
    const MONGO_DB_URL = MONGO_URL;

    mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })
};

export default Conection;