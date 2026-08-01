import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Test API received body:", body);
    
    // Handle both field names
    const user_email = body.user_email || body.email;
    
    return NextResponse.json({ 
      success: true,
      received_body: body,
      extracted_email: user_email,
      field_used: body.user_email ? 'user_email' : 'email'
    });
  } catch (error) {
    return NextResponse.json({ error: "Test failed", details: error }, { status: 500 });
  }
}