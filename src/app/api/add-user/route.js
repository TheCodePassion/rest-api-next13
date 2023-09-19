import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../libs/mongodb'
import User from '../../../../models/user'
export async function POST(request) {
  const { username, password } = await request.json()
  await connectMongoDB()
  const existingUser = await User.findOne({ username })

  if (existingUser) {
    return NextResponse.json({
      status: 401,
      body: 'User alredy exist',
    })
  }
  try {
    const user = new User({ username, password })
    await user.save()
    return new NextResponse.json({
      status: 200,
      body: 'User successfully added to the database',
    })
  } catch (error) {
    console.error('Error when adding a user:', error)
    return new NextResponse.json({
      status: 500,
      body: 'An error occurred while adding a user. ',
    })
  }
}
