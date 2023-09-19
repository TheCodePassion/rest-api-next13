import { NextResponse } from 'next/server'

export async function GET() {
  const response = 'Hello World'
  return NextResponse.json({ response })
}
