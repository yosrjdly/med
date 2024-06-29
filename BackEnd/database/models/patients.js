const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientModel = new Schema(
    
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Date,
            required: true
        },
        phone : {
            type: String,
            required: true
        },
        email: {
            type: "string",
            unique: true,
        },
        adresse: "String",
        telephone: "String",
        city:"String",
        image:"String"

    }

);



module.exports = mongoose.model("patients", PatientModel);