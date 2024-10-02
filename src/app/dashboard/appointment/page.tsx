'use client'
import { Appointment } from '@/types/patients';
import React,{ useEffect, useState } from 'react';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
}

interface AppointmentFormProps {
  patientId: string; // This should come from your authentication system
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ patientId }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [specialization, setSpecialization] = useState<string>('');
  const [problem, setProblem] = useState<string>('');
  const [appointmentTime, setAppointmentTime] = useState<string>('');

  // Static specialization options
  const specializationOptions = [
    'General  (Manoj)',
    'Cardiology (Rajesh)',
    'Dermatology (madhu)',
    'General Medicine (Ram)',
    'Pediatrics (Jhon)',
    'Orthopedics (Abhu)',
    'Gynecology (Ragu)',
  ];

  // Fetch doctors from your API based on selected specialization


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const appointment: Appointment = {
      specialization,
      problem,
      appointmentTime: new Date(appointmentTime),
    };

    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });

    if (response.ok) {
      alert('Appointment created successfully');
      // Reset form or handle success

      setProblem('');
      setAppointmentTime('');
      setSpecialization('');
    } else {
      alert('Error creating appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>

      {/* Specialization Selection */}
      <div className="mb-4">
        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Select Specialization</label>
        <select
          id="specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option value="">Select a Specialization</option>
          {specializationOptions.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

  

      {/* Problem Input */}
      <div className="mb-4">
        <label htmlFor="problem" className="block text-sm font-medium text-gray-700">Problem</label>
        <textarea
          id="problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      {/* Date and Time Input */}
      <div className="mb-4">
        <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700">Appointment Date & Time</label>
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
