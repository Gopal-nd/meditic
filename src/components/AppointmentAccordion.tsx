'use client'; // This is a Client Component

interface Appointment {
  appointmentTime: string;
  createdAt: string;
  problem: string;
  specialization: string;
  status: string;
}

interface AppointmentsTableProps {
  appointments: Appointment[];
}

const AppointmentsTable = ({ appointments }: AppointmentsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4">Appointment Time</th>
            <th className="py-2 px-4">Problem</th>
            <th className="py-2 px-4">Specialization</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Created At</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No appointments found.
              </td>
            </tr>
          ) : (
            appointments.map((appointment: Appointment, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2 px-4 text-center">
                  {new Date(appointment.appointmentTime).toLocaleDateString()},{' '}
                  {new Date(appointment.appointmentTime).toLocaleTimeString()}
                </td>
                <td className="py-2 px-4 text-center">{appointment.problem}</td>
                <td className="py-2 px-4 text-center">
                  {appointment.specialization}
                </td>
                <td className="py-2 px-4 text-center">{appointment.status}</td>
                <td className="py-2 px-4 text-center">
                  {new Date(appointment.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
