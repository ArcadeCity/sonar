import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Login from '@/components/dom/login'

const Sphere = dynamic(() => import('@/components/canvas/Sphere'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Sonar' })
  return (
    <>
      <Sphere r3f />
      <Login />
    </>
  )
}

export default Page
