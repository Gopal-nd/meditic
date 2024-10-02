export interface PatientDetails {
    userId: string;
    gender: string;
    dateOfBirth: Date | null;
    age: number | null;
    medicalHistory: string;
  }


  export interface Appointment {
    specialization: string; // ID of the patient
    problem: string;   // Problem for which the appointment is requested
    appointmentTime: Date | null; // Date and time for the appointment
  }