import useStore from '@/helpers/store'
import Head from 'next/head'

const Header = () => {
  const title = useStore((s) => s.title)
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
const Dom = ({ dom }) => {
  const events = useStore((s) => s.events)
  events && delete events.onGotPointerCaptureLegacy // https://github.com/pmndrs/react-three-fiber/issues/462#issuecomment-653227107
  return (
    <div className='absolute top-0 left-0 right-0 z-20 dom' {...events}>
      <Header />
      {dom}
    </div>
  )
}

export default Dom
