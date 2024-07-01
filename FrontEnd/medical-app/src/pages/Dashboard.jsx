import React from "react";
import { Link } from "react-router-dom";
import UpcomingAppointments from "../compo/UpcomingAppointments.jsx";
import AllPatients from "../compo/AllPatients.jsx";

function Dashboard() {
  return (
    <div className="dashboard bg-[#f9f9fb] min-h-screen py-8">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">Dashboard</h1>

          <div className="flex justify-center space-x-4">
  <Link
    to="/add-patient"
    className="btn px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
    style={{ backgroundColor: "#007BFF", color: "white" }}
  >
    Add New Patient
  </Link>

  <Link
    to="/add-appointment"
    className="btn px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
    style={{ backgroundColor: "#007BFF", color: "white" }}
  >
    Add New Appointment
  </Link>
</div>

        </div>
          <div className=" card bg-[#007BFF] rounded-lg shadow-md ">
            <div className="p-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">
                Upcoming Appointments
              </h2>
              <UpcomingAppointments />
            </div>
          </div>
            <div className="p-6 bg-white w-full">
              <AllPatients />
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
