import React from "react";
import NavBar from "../components/NavBar.jsx";
import { useNavigate } from "react-router-dom";
const user = {
  isConnected: false, // Example user state
  role: "DOCTOR", // Example role
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 text-gray-800">
      {/* <NavBar user={user} /> */}
      <header className="bg-white shadow-md"></header>

      <main>
      <section
  className="container mx-auto flex flex-col items-center py-20 px-8"
  style={{ backgroundColor: "#e0f7fa" }} // Light blue shade
>
  <h2 className="text-4xl font-bold text-blue-800 mb-4">
    Welcome to MedConnect
  </h2>
  <p className="text-lg text-center mb-8">
    Your ultimate medical management solution. Designed by doctors, for doctors.
  </p>
</section>

        <section id="features" className="bg-white py-16">
          <div className="container mx-auto px-8">
            <h3 className="text-3xl font-bold text-center text-blue-600 mb-12">
              Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold mb-4">
                  Patient Management
                </h4>
                <p>
                  Efficiently manage patient records, appointments, and medical
                  histories with our intuitive interface.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold mb-4">
                  Appointment Scheduling
                </h4>
                <p>
                  Seamlessly schedule and manage appointments with ease,
                  reducing no-shows and enhancing productivity.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold mb-4">Medical Records</h4>
                <p>
                  Securely store and access medical records, ensuring patient
                  data privacy and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="container mx-auto py-16 px-8">
          <h3 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-4">Time-Saving</h4>
              <p>
                Automate routine tasks and streamline your workflow to save
                valuable time.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-4">
                Improved Patient Care
              </h4>
              <p>
                Enhance patient care with quick access to comprehensive medical
                information.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-4">
                Enhanced Efficiency
              </h4>
              <p>
                Boost your clinic's efficiency and productivity with our
                easy-to-use tools.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MedConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
