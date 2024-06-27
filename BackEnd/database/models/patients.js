const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientModel = new Schema(
    
    {
        name: "string",
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