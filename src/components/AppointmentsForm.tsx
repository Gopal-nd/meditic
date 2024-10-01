import { useState } from 'react';

const AppointmentForm = () => {
  const [patientId, setPatientId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [disease, setDisease] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const appointmentData = {
      patientId,
      doctorId,
      disease,
      appointmentTime,
    };

    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });

    if (response.ok) {
      alert('Appointment created successfully');
      // Reset form or handle success
    } else {
      alert('Error creating appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <div className="mb-4">
        <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">Patient ID</label>
        <input
          type="text"
          id="patientId"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="doctorId" className="block text-sm font-medium text-gray-700">Doctor ID</label>
        <input
          type="text"
          id="doctorId"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="disease" className="block text-sm font-medium text-gray-700">Disease</label>
        <input
          type="text"
          id="disease"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700">Appointment Time</label>
        <input
          type="datetime-local"
          id="appointmentTime"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
