const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientModel = new Schema(
    
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        contactNumber: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
        image: { type: String },
        heartRate: { type: Number, required: true },
        allergies: { type: [String] },
        weight: { type: Number, required: true },
        height: { type: Number, required: true }
    }

);

const  patients = mongoose.model("patients", PatientModel);
module.exports = patients