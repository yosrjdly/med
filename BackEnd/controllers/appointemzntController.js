const Appointment = require('../database/models/ApointSchema');
const Patient = require('../database/models/patients');

const moment = require('moment'); // ? 

// Get all appointments
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find() ;
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new appointment
exports.createAppointment = async (req, res) => {
    const {  reason, appointmentDate, notes } = req.body;

    try {
        

        const newAppointment = new Appointment({
        
            reason,
            appointmentDate,
            notes
        });

        const appointment = await newAppointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single appointment
exports.getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id).populate('patient', 'firstName lastName');
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an appointment
exports.updateAppointment = async (req, res) => {
    const {  reason, appointmentDate, notes } = req.body;

    try {
      

        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            {  reason, appointmentDate, notes },
            { new: true }
        );
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an appointment
exports.deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.json({ message: 'Appointment deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get upcoming appointments
exports.getUpcomingAppointments = async (req, res) => {
    try {
        const today = moment().startOf('day');
        const upcomingAppointments = await Appointment.find({
            appointmentDate: { $gte: today }
        }).populate('patientId'); 

        res.json(upcomingAppointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};