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
      <Login />
      <div className='uppercase font-sans top-0 left-0 right-0 flex flex-col absolute h-screen w-screen justify-center items-center text-white'>
        <h1 className='leading-none' style={{ fontSize: '10em' }}>
          Sonar
        </h1>
        <p className='text-2xl tracking-wide mt-4'>Connecting changemakers</p>
      </div>
    </>
  )
}

export default Page
