'use client'
import { PatientDetails } from '@/types/patients';
import { useState } from 'react';


interface PatientDetailsFormProps {
  userId: string; // This should come from your authentication system
}

const PatientDetailsForm: React.FC<PatientDetailsFormProps> = ({ userId }) => {
  const [gender, setGender] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);
  const [medicalHistory, setMedicalHistory] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const patientDetails: PatientDetails = {
      userId,
      gender,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth)  : null,
      age,
      medicalHistory,
    };

    const response = await fetch('/api/patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientDetails),
    });

    if (response.ok) {
      alert('Patient details saved successfully');
      // Reset form or handle success
    } else {
      alert('Error saving patient details');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
      
      {/* Gender */}
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Date of Birth */}
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      {/* Age */}
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          id="age"
          value={age ?? ''}
          onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : null)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      {/* Medical History */}
      <div className="mb-4">
        <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">Medical History</label>
        <textarea
          id="medicalHistory"
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Save Patient Details
      </button>
    </form>
  );
};

export default PatientDetailsForm;
