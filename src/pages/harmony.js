import { Magic } from 'magic-sdk'
import { HarmonyExtension } from '@magic-ext/harmony'

const { Harmony: Index } = require('@harmony-js/core')
const { ChainID, ChainType, Units, toWei } = require('@harmony-js/utils')

const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PK, {
  extensions: [
    new HarmonyExtension({
      rpcUrl: 'https://api.s0.b.hmny.io',
      chainId: ChainID.HmyTestnet,
    }),
  ],
})

const harmony = new Index(
  // rpc url
  'https://api.s0.b.hmny.io',
  {
    // chainType set to Index
    chainType: ChainType.Harmony,
    // chainType set to HmyLocal
    chainId: ChainID.HmyTestnet,
  }
)

const HarmonyPage = () => {
  return <h1 className='text-arwes'>Harmony tests</h1>
}

export default HarmonyPage
