import { NextResponse } from 'next/server';
 // Adjust the path as needed
 // Adjust the path as needed
import { db } from '@/lib/db';
import { getAuthSession } from '@/lib/auth';
import { PatientDetails } from '@/types/patients';

export async function POST(request: Request) {
  const session = await getAuthSession();
  if(!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const patientDetails: PatientDetails = await request.json();

  console.log(patientDetails)
  try {
    // Create or update patient details
    const details =  await db.patientDetails.create({
     data:{
      userId:session.user.id,
      gender:patientDetails.gender,
      dateOfBirth:patientDetails.dateOfBirth,
      age:patientDetails.age,
      medicalHistory:patientDetails.medicalHistory
     }
    })

    return NextResponse.json({ details });
  } catch (error) {
    console.error('Error saving patient details:', error);
    return NextResponse.json({ error: 'Error saving patient details' }, { status: 500 });
  }
}
