import { useEffect } from 'react'
import { Magic } from 'magic-sdk'

console.log(process.env.NEXT_PUBLIC_MAGIC_PK)

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
    <button
      onClick={login}
      className='bg-gray-700 font-mono absolute z-20 rounded-lg px-4 p-2 m-2 text-white focus:outline-none focus:ring'
    >
      Log in
    </button>
  )
}

export default Login
