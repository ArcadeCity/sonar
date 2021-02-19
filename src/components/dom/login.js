import Link from 'next/link'

const Login = () => {
  const login = () => {
    alert('You clicked log in')
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
