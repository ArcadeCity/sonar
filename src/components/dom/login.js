import { useEffect } from 'react'
import { Magic } from 'magic-sdk'
import { useForm } from 'react-hook-form'

const m = process.browser && new Magic(process.env.NEXT_PUBLIC_MAGIC_PK)

const Login = () => {
  const { register, handleSubmit } = useForm()
  const login = async ({ email }) => {
    console.log(`Logging in with ${email}`)
    try {
      await m.auth.loginWithMagicLink({ email })
      const didToken = await m.user.getIdToken()
      console.log(`Authed with didToken ${didToken}`)
      const metadata = await m.user.getMetadata()
      console.log('Metadata', metadata)
    } catch (e) {
      console.log('Error', e)
    }
  }
  return (
    <form
      onSubmit={handleSubmit(login)}
      className='mt-12 flex flex-row items-center'
    >
      <div className='mr-4'>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input
          ref={register}
          type='email'
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
        type='submit'
        className='text-arwes2 text-xl hover:text-white tracking-widest font-arwes inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        style={{
          backgroundColor: 'rgba(6,43,45,0.65)',
          textShadow: '0 0 4px rgb(172 249 251 / 65%)',
          border: '1px solid #26dafd',
        }}
      >
        JOIN
      </button>
    </form>
  )
}

export default Login
