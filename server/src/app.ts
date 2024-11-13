import express from "express";
import session from "express-session";
import bodyParser from 'body-parser';
import  db  from "./config/db";
import userRouter from './routes/userRouter';

const PORT=4000;
const app = express();

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
