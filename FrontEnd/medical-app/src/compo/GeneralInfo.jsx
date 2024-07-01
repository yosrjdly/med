import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faHome, faPhone, faEnvelope, faHeartbeat, faWeight, faRulerVertical, faExclamationTriangle, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GeneralInfo = ({ patient }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${patient.firstName} ${patient.lastName}?`)) {
      axios.delete(`http://127.0.0.1:5000/api/patient/deletePatient/${patient._id}`)
        .then((response) => {
          if (response.status === 200) {
            navigate('/dashboard'); // Redirect to dashboard after deletion
          } else {
            throw new Error('Failed to delete patient');
          }
        })
        .catch((error) => console.error('Error deleting patient:', error));
    }
  };

  const handleEdit = () => {
    navigate(`/edit`); // Navigate to edit page or modal
  };

  return (
    <div className="profile-container bg-gray-100 p-6 rounded-lg shadow-md mx-auto max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Patient Profile</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
          </button>
        </div>
      </div>
      {patient && (
        <div>
          <div className="flex items-center mb-4">
            <img src={patient.image} alt={`${patient.firstName} ${patient.lastName}`} className="w-20 h-20 object-cover rounded-full border border-gray-300 mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-600" /> {`${patient.firstName} ${patient.lastName}`}
              </h2>
              <p className="text-gray-600">
                {patient.email}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="flex items-center mb-2 text-gray-800">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-500" />
                <strong className="mr-1">Date of Birth:</strong> {new Date(patient.dateOfBirth).toLocaleDateString()}
              </p>
              <p className="flex items-center mb-2 text-gray-800">
                <FontAwesomeIcon icon={faHome} className="mr-2 text-blue-500" />
                <strong className="mr-1">Address:</strong> {patient.address}
              </p>
              <p className="flex items-center mb-2 text-gray-800">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500" />
                <strong className="mr-1">Contact Number:</strong> {patient.contactNumber}
              </p>
              <p className="flex items-center mb-2 text-gray-800">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
                <strong className="mr-1">Email:</strong> {patient.email}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              
              <p className="flex items-center mb-2 text-gray-800">
                <FontAwesomeIcon icon={faHeartbeat} className="mr-2 text-blue-500" />
                <strong className="mr-1">Heart Rate:</strong> {patient.heartRate} bpm
              </p>
              <p className="flex items-center mb-2 text-gray-800">
                <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-blue-500" />
                <strong className="mr-1">Allergies:</strong> {patient.allergies}
              </p>
              <p className="flex items-center mb-2 text-gray-800">
                <FontAwesomeIcon icon={faWeight} className="mr-2 text-blue-500" />
                <strong className="mr-1">Weight:</strong> {patient.weight} kg
              </p>
              <p className="flex items-center mb-2 text-gray-800">
                <FontAwesomeIcon icon={faRulerVertical} className="mr-2 text-blue-500" />
                <strong className="mr-1">Height:</strong> {patient.height} cm
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
