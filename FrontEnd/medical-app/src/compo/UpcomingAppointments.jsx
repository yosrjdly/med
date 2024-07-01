import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/appointement/allAppointement');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  // Filter appointments based on date
  const filteredAppointments = appointments.filter((appointment) => {
    if (dateFilter && new Date(appointment.appointmentDate).toLocaleDateString() !== new Date(dateFilter).toLocaleDateString()) {
      return false;
    }
    return true;
  });

  // Convert appointments to events for the calendar
  const events = filteredAppointments.map((appointment) => ({
    title: `${appointment.reason}`,
    start: new Date(appointment.appointmentDate),
    end: new Date(appointment.appointmentDate),
    allDay: false,
    notes: appointment.notes,
  }));

  return (
    <div className="upcoming-appointments bg-blue-100 rounded-lg shadow-md p-6">
      {/* Filter controls */}
      <div className=" space-x-4 mb-4">
        {/* Date filter */}
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border border-gray-blue px-4 py-2 rounded-lg w-full max-w-sm text-blue-500"
        />
      </div>

      {/* Calendar */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: '#007BFF',
            color: '#ffff',
            borderRadius: '100px',
            border: 'none',
            textAlign:'center',
            padding:6,
          },
        })}
      />
    </div>
  );
};

export default UpcomingAppointments;
