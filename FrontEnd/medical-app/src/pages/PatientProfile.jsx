import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GeneralInfo from '../compo/GeneralInfo.jsx';

function PatientProfile() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/patient/onePatient/${id}`);
        const data = await response.json();
        setPatient(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };

    fetchPatient();
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container bg-gray-100 p-8 rounded-lg shadow-md">
      <GeneralInfo patient={patient} />
    </div>
  );
}

export default PatientProfile;
