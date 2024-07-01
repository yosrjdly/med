# MedConnect

MedConnect is a comprehensive medical management application designed for doctors to efficiently manage patient records, appointments, and medical history. This application aims to streamline the workflow of doctors by providing an easy-to-use interface for accessing and updating patient information, scheduling appointments, and managing medical records.

## User Story: MedConnect

### Overview:
MedConnect is a comprehensive medical management application designed for doctors to efficiently manage patient records, appointments, and medical history. This application aims to streamline the workflow of doctors by providing an easy-to-use interface for accessing and updating patient information, scheduling appointments, and managing medical records.

### As a Doctor, I want to:

#### 1. User Authentication
- **Register/Login:**
  - Register with my medical credentials.
  - Log in using my email and password.
  - Reset my password if I forget it.

#### 2. Dashboard
- **Overview:**
  - View a summary of the day's appointments.
  - Access quick links to different sections of the app.
  - See notifications for new messages, test results, or appointment requests.

- **Upcoming Appointments:**
  - View a list of upcoming appointments with patient names and times.
  - Click on an appointment to view patient details and medical history.

#### 3. Patient Management
- **All Patients:**
  - View a list of all registered patients.

- **Patient Profile:**
  - Click on a patient's name to view their profile.
  - See general information such as name, age, gender, and contact details.
  - View detailed medical history, including previous visits, diagnoses, and treatments.
  - Update patient information as needed.
  - Delete a patient.

#### 4. Appointment Management
- **Schedule Appointments:**
  - Add new appointments for patients.
  - Select date, time, and reason for the appointment.
  - Assign the appointment to a specific room or facility if needed.

- **Manage Appointments:**
  - View past appointment history for each patient.
  - Filter appointments by date.

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS
  - bootstrap css 
  - React Router

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

- **Authentication:**
  - JWT (JSON Web Tokens)
  - bcrypt for password hashing

- **Image Uploads:**
  - Cloudinary

## Authentication

Authentication in MedConnect is handled using JWT (JSON Web Tokens) to ensure secure and stateless user sessions. Passwords are securely hashed using bcrypt before being stored in the database. 

### Register/Login:
- **Register:** Doctors can register by providing their medical credentials, including a unique email and password.
- **Login:** Doctors can log in using their email and password. On successful authentication, a JWT token is issued.
- **Password Reset:** Doctors can reset their password if they forget it, ensuring continuous access to their accounts.

## Image Uploads with Cloudinary

MedConnect integrates with Cloudinary for efficient image management. This includes uploading, storing, and retrieving patient images and medical documents.

### Steps:
1. **Upload Images:** Doctors can upload patient images and medical documents during patient registration or profile updates.
2. **Store Securely:** Uploaded images are securely stored in Cloudinary and linked to the respective patient records.
3. **Retrieve Images:** Images can be retrieved and displayed on the patient's profile page, providing easy access to visual medical records.

## How to Contribute

We welcome contributions! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
