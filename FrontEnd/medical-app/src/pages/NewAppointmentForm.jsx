import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const NewAppointmentForm = () => {
  const [newAppointment, setNewAppointment] = useState({
    reason: '',
    appointmentDate: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({
      ...newAppointment,
      [name]: value,
    });
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/appointement/newApointement', newAppointment);
      if (response.status === 201) {
         // Refresh appointments after adding
        setNewAppointment({
          reason: '',
          appointmentDate: '',
          notes: '',
        });
      }
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Appointment</h2>
      <form onSubmit={handleAddAppointment} className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            name="reason"
            value={newAppointment.reason}
            onChange={handleInputChange}
            placeholder="Appointment Reason"
            className="border border-gray-300 px-4 py-2 rounded-lg w-full"
            required
          />
          <input
            type="datetime-local"
            name="appointmentDate"
            value={moment(newAppointment.appointmentDate).format('YYYY-MM-DDTHH:mm')}
            onChange={handleInputChange}
            className="border border-gray-300 px-4 py-2 rounded-lg w-full"
            required
          />
        </div>
        <textarea
          name="notes"
          value={newAppointment.notes}
          onChange={handleInputChange}
          placeholder="Appointment Notes"
          rows="3"
          className="border border-gray-300 px-4 py-2 rounded-lg w-full"
        ></textarea>
        <button
        onClick={handleAddAppointment}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
          Add Appointment
        </button>
      </form>
    </div>
  );
};

export default NewAppointmentForm;
