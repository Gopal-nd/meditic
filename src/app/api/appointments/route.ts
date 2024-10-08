import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { Appointment } from '@/types/patients';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const appointment: Appointment = await request.json();
  const session = await getAuthSession();
  if(!session?.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    console.log(appointment)
    if(!appointment.appointmentTime) {
      return NextResponse.json({ error: 'Appointment time is required' }, { status: 400 });
    }

    const newAppointment = await db.appointment.create({
      data: {
        appointmentTime: new Date(appointment.appointmentTime),
        email:session.user.email,
        problem: appointment.problem,
        specialization: appointment.specialization,
        status: "PENDING"
      },
    });

    return NextResponse.json({ newAppointment: "newAppointment" });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json({ error: 'Error creating appointment' }, { status: 500 });
  }
}
