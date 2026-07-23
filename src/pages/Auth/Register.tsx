import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LabeledInput from '@/components/Auth/LabeledInput'
import { registerUser } from '@/services'
import { RegisterUserReq } from '@/types/auth'

export default function Register() {
  const [formData, setFormData] = useState<RegisterUserReq>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      if (
        formData.username === '' ||
        formData.email === '' ||
        formData.password === '' ||
        formData.password !== formData.confirmPassword
      ) {
        alert('Invalid Information')
        return
      }
      const data = await registerUser(formData)
      alert('Register successfully')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            Sign up for your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6'>
            <LabeledInput
              label='Username'
              id='username'
              name='username'
              type='text'
              required
              autoComplete='username'
              onChange={handleChange}
            />
            <LabeledInput
              label='Email address'
              id='email'
              name='email'
              type='email'
              required
              autoComplete='email'
              onChange={handleChange}
            />
            <LabeledInput
              label='Password'
              id='password'
              name='password'
              type='password'
              required
              autoComplete='current-password'
              onChange={handleChange}
            />
            <LabeledInput
              label='Confirm Password'
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              required
              autoComplete='current-password'
              onChange={handleChange}
            />

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm/6 text-gray-500'>
            Already have an account?{' '}
            <Link to='/login' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
