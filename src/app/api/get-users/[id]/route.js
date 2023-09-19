import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../../libs/mongodb'
import User from '../../../../../models/user'
export async function GET(request, { params: { id } }) {
  let _id = id
  await connectMongoDB()
  const user = await User.findById(_id)
  return NextResponse.json({ user })
}
