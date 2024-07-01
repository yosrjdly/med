import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllPatients() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/patient/allPatients")
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  const handlePatientClick = (patientId) => {
    navigate(`/patients/${patientId}`);
  };

  return (
    <div className="p-6 rounded-5g shadow-md ">
      <h2 className="text-2xl font-semibold text-blue-500 mb-6">
        All Patients
      </h2>
      <ul className="w-full divide-y divide-blue-500 ">
        {patients.map((patient) => (
          <li key={patient._id} className="py-4 ">
            <button
              onClick={() => handlePatientClick(patient._id)}
              className="flex items-center space-x-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 focus:outline-none w-full flex "
            >
              <img
                src={patient.image || "https://via.placeholder.com/50"}
                alt={`${patient.firstName} ${patient.lastName}`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex justify-between ">
                <div className="flex space-x-40">
                  <span className="text-lg font-medium">
                    {patient.firstName} {patient.lastName}
                  </span>
                  <span className=" text-lg font-small">{patient.email}</span>
                  <span className=" text-lg font-small">{patient.contactNumber}</span>
                  <span className=" text-lg font-small">{patient.address}</span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllPatients;
