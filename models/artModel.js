const mongoose = require("mongoose");
const ArtSchema = new mongoose.Schema({
    author: String,
    name: String,
    text: String,
});
const Model = mongoose.model('Art', ArtSchema);
module.exports = Model;