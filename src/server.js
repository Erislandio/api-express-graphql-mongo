import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import config from '../.config'
import schema from './graphql';

const user = 'erislandio'

const app = express();
const PORT = process.env.PORT || "4000";
const db = `mongodb://@ds161255.mlab.com:61255/eris-teste`;

mongoose.connect(db, {
    useNewUrlParser: true,
    auth: {
        user,
        password: config.pass
    }
}).then(() => console.log("Banco de dados MLAB está conectado")).catch(err => console.log(err));


app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));