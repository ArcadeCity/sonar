import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Login from '@/components/dom/login'

const Lander = dynamic(() => import('@/components/canvas/Lander'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Sonar' })
  return (
    <>
      <Lander r3f />
      {/* <Login /> */}
      <div className='text-arwes uppercase font-sans top-0 left-0 right-0 flex flex-col absolute h-screen w-screen justify-center items-center'>
        <h1
          className='leading-none'
          style={{
            fontSize: '10em',
            textShadow: '0 0 4px rgb(172 249 251 / 65%)',
          }}
        >
          Sonar
        </h1>
        <p
          className='text-white font-arwes text-2xl tracking-widest mt-2'
          style={{ textShadow: '0 0 4px rgb(172 249 251 / 65%)' }}
        >
          Connecting changemakers
        </p>
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
      </div>
    </>
  )
}

export default Page
