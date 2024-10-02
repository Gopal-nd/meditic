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

    const allAppointment = await db.appointment.findMany({
        where:{
            email: session?.user?.email,
        },
      select: {
       appointmentTime:true,
       createdAt:true,
       problem:true,
       specialization:true,
       status:true
      },
    });
    console.log(  "the following data", allAppointment)

    return NextResponse.json({ AllAppoinments: allAppointment }, { status: 200 });
  } catch (error) {
    console.error('Error in getting appointment:', error);
    return NextResponse.json({ error: 'Error in getting list appointment' }, { status: 500 });
  }
}
