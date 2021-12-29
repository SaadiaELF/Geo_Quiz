const express = require('express');
const app = express();
const PORT = process.env.PORT || 4111;
const mongoose = require('mongoose');


// Mongo DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/geoquiz")
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.listen(PORT, console.log("Server don start for port: " + PORT))