import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../libs/mongodb'
import User from '../../../../models/user'

export async function PATCH(request) {
  const { username, password } = await request.json()
  await connectMongoDB()
  const existingUser = await User.findOne({ username })
  if (!existingUser) {
    return NextResponse.json({
      status: 401,
      body: 'User does not exist',
    })
  }
  existingUser.password = password
  await existingUser.save()
  return NextResponse.json({ message: 'User info updated successfully' })
}
