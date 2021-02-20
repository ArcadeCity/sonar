import { useEffect } from 'react'
import { Magic } from 'magic-sdk'

const m = process.browser && new Magic(process.env.NEXT_PUBLIC_MAGIC_PK)

const Login = () => {
  useEffect(() => {
    console.log('Email:', process.env.NEXT_PUBLIC_DEMO_EMAIL)
  }, [])
  const login = async () => {
    try {
      await m.auth.loginWithMagicLink({
        email: process.env.NEXT_PUBLIC_DEMO_EMAIL,
      })
      const didToken = await m.user.getIdToken()
      console.log(`Authed with didToken ${didToken}`)
    } catch (e) {
      console.log('Error', e)
    }
  }
  return (
    <div className='mt-12 flex flex-row items-center'>
      <div className='mr-4'>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='font-arwes tracking-widest w-64 px-6 py-4 shadow-sm focus:ring-arwes focus:border-arwes block w-72 sm:text-sm rounded-md'
          placeholder='your@email.address'
          style={{
            backgroundColor: 'rgba(6,43,45,0.65)',
            border: '1px solid rgba(6,43,45,0.85)',
          }}
        />
      </div>
      <button
        onClick={login}
        type='button'
        className='text-arwes2 text-xl hover:text-white tracking-widest font-arwes inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        style={{
          backgroundColor: 'rgba(6,43,45,0.65)',
          textShadow: '0 0 4px rgb(172 249 251 / 65%)',
          border: '1px solid #26dafd',
        }}
      >
        JOIN
      </button>
    </div>
  )
}

export default Login
