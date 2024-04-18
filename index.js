const express = require('express');
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connection');

const app = express();
const PORT = 4001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("MongoDB connected"));

app.use(express.json());
app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`)
})