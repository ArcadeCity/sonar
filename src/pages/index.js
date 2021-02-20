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
      <div className='text-arwes uppercase font-josefin top-0 left-0 right-0 flex flex-col absolute h-screen w-screen justify-center items-center'>
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
        <Login />
      </div>
    </>
  )
}

export default Page
