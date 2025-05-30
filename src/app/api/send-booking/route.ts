// This API route is no longer used for sending emails with the EmailJS client-side setup.
// You can delete this file if it's not used for other purposes.
// For now, I'll leave it with a comment indicating it's deprecated for this feature.

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.warn("DEPRECATED API ROUTE: /api/send-booking is no longer used for email sending with EmailJS client-side integration.");
  // If you still want to use this for some other backend processing, you can.
  // Otherwise, it's safe to remove.
  try {
    const body = await request.json();
    console.log("Received data at deprecated API route:", body);
    // Simulate a success response as it's not actively processing emails.
    return NextResponse.json({ message: 'Data received by deprecated API. Email sending handled by client with EmailJS.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error at deprecated API route:', error);
    return NextResponse.json({ message: 'Error at deprecated API route.', error: error.message }, { status: 500 });
  }
}
