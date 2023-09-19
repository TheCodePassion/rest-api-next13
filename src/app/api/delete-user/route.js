import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../libs/mongodb'
import User from '../../../../models/user'

export async function DELETE(request) {
  const { username } = await request.json()
  await connectMongoDB()
  const existingUser = await User.findOne({ username })
  if (!existingUser) {
    return NextResponse.json({
      status: 401,
      body: 'User does not exist',
    })
  }
  await existingUser.deleteOne()
  return NextResponse.json({ message: 'User deleted successfully' })
}
