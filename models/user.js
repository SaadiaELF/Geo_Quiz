const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: mongoose.ObjectId,
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String, 
        required: true,
        minlength: [8, 'Password must be at least 8 characters']
    },
    image: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
