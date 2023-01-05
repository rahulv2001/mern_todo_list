import express from "express"
import Conection from "./database/db.js";
import cors from "cors"
import bodyParser from "body-parser"
import Routes from "./routes/route.js"

const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', Routes);

const PORT = process.env.PORT || 8000;

Conection();

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}.`);
})