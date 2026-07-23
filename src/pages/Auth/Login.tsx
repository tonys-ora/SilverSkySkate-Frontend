import { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LabeledInput from '@/components/Auth/LabeledInput'
import { loginUser } from '@/services'
import { dispatch, login } from '@/store'
import { type LoginUserReq } from '@/types'

export default function Login() {
  const [formData, setFormData] = useState<LoginUserReq>({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    },
    [formData]
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      try {
        if (formData.email === '' || formData.password === '') {
          alert('Invalid Information')
          return
        }

        const data = await loginUser(formData)
        console.log(data)
        dispatch(login(data))
        navigate(`/home`)
        alert('Log in successfully')
      } catch (err) {
        console.log(err)
      }
    },
    [formData]
  )

  return (
    <>
      <div className='flex h-screen w-screen flex-1 flex-col justify-center align-items px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6'>
            <LabeledInput
              label='Email address'
              id='email'
              name='email'
              type='email'
              required
              value={formData.email}
              onChange={handleChange}
            />
            <LabeledInput
              label='Password'
              id='password'
              name='password'
              type='password'
              required
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </form>

          <p className='mt-10 text-center text-sm/6 text-gray-500'>
            Don't you have an account?{' '}
            <Link to='/register' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
