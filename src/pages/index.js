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
      <div
        style={{ fontSize: '10em' }}
        className='font-sans font-bold top-0 left-0 right-0 flex absolute h-screen w-screen justify-center items-center text-white'
      >
        Sonar
      </div>
    </>
  )
}

export default Page
