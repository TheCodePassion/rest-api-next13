import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

async function initializeUsers() {
  const existingUsersCount = await User.countDocuments()

  if (existingUsersCount === 0) {
    const newUsers = [
      {
        username: 'Jessica',
        password: 'password1',
      },
      {
        username: 'Lydia',
        password: 'password2',
      },
      {
        username: 'Melanie',
        password: 'password3',
      },
      {
        username: 'Barbara',
        password: 'password4',
      },
      {
        username: 'Victoria ',
        password: 'password5',
      },
    ]

    await User.insertMany(newUsers)
    console.log('+ Added 5 users')
  } else {
    console.log('-')
  }
}

initializeUsers()

export default User
