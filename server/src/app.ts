import express from "express";
import cors from "cors";
import session from "express-session";
import bodyParser from 'body-parser';
import db from "./config/db";
import userRouter from './routes/userRouter';

const PORT = 4000;
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use CORS middleware with options

app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/api/user', userRouter);

db.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to the database: ', error);
});