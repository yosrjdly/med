import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPatient = ({ addPatient }) => {
  const history = useNavigate(); // Hook to manage navigation

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [heartRate, setHeartRate] = useState("");
  const [allergies, setAllergies] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "patient");
    try {
      const cloudName = "dduvvnnjl";
      const resourceType = "image";
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
      const res = await axios.post(api, data);
      const { url } = res.data;
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const imgUrl = await uploadFile();
      setImageUrl(imgUrl); // Store the uploaded image URL in state
      setImage(null); // Clear the image input
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleCreate = () => {
    addPatient({
      firstName,
      lastName,
      dateOfBirth,
      contactNumber,
      email,
      address,
      image: imageUrl,
      heartRate,
      allergies: allergies.split(','), // assuming input is a comma-separated string
      weight,
      height
    });
    // Clear form fields
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setContactNumber("");
    setEmail("");
    setAddress("");
    setImageUrl(null);
    setHeartRate("");
    setAllergies("");
    setWeight("");
    setHeight("");

    // Redirect to dashboard after adding patient
    history('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="flex mb-4">
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 text-white rounded mt-2 ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {loading ? 'Uploading...' : 'Upload'}
            </button>
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="date"
              value={dateOfBirth}
              placeholder="Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="text"
              value={contactNumber}
              placeholder="Contact Number"
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="text"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="number"
              value={heartRate}
              placeholder="Heart Rate"
              onChange={(e) => setHeartRate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="text"
              value={allergies}
              placeholder="Allergies (comma separated)"
              onChange={(e) => setAllergies(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="number"
              value={weight}
              placeholder="Weight (kg)"
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
              type="number"
              value={height}
              placeholder="Height (cm)"
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>
          {imageUrl && (
            <div className="ml-4">
              <img src={imageUrl} className="w-20 h-20 object-cover rounded-full border border-gray-300" alt="Patient" />
            </div>
          )}
        </div>
        <button
          onClick={handleCreate}
          disabled={loading || !imageUrl}
          className={`w-full py-2 px-4 mt-4 text-white rounded ${loading || !imageUrl ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default AddPatient;
