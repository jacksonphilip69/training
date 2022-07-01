const mongoose  = require("mongoose");
var firstSchema =  new mongoose.Schema({

    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    date: { type: Date, default: Date.now },
    
});
module.exports = mongoose.model("firstModel", firstSchema);