// 'use client' should not be added here
import AppointmentsTable from '@/components/AppointmentAccordion';
import axios from 'axios';
 // Import the Client Component

const fetchAppointments = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/complete-details`);
    return response.data.AllAppoinments; // Fetch data from the API
  } catch (error) {
    console.error('Failed to fetch appointments', error);
    return [];
  }
};

const AppointmentsPage = async () => {
  const appointments = await fetchAppointments(); // Server-side data fetching

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">My Appointments</h1>
      <AppointmentsTable appointments={appointments} /> {/* Pass data to client */}
    </div>
  );
};

export default AppointmentsPage;
