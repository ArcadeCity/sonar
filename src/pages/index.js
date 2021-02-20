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
        <button
          type='button'
          className='text-arwes2 text-xl hover:text-white mt-10 tracking-widest font-arwes inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          style={{
            backgroundColor: 'rgba(6,43,45,0.65)',
            textShadow: '0 0 4px rgb(172 249 251 / 65%)',
            border: '1px solid #26dafd',
          }}
        >
          JOIN
        </button>
      </div>
    </>
  )
}

export default Page
