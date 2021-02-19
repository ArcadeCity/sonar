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
    </>
  )
}

export default Page
