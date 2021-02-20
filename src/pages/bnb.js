import { useEffect } from 'react'
import { Magic } from 'magic-sdk'
import { ethers } from 'ethers'

const BSCOptions = {
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/', // Smart Chain - Testnet RPC URL
  chainId: 97, // Smart Chain - Testnet chain id
}

// Test key defaults to "rinkeby", live key defaults to "mainnet"
const magic =
  process.browser &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_PK, { network: BSCOptions })
const provider =
  process.browser && new ethers.providers.Web3Provider(magic.rpcProvider)

const BnbPage = () => {
  useEffect(() => {
    console.log(magic)
    console.log(provider)
  }, [])
  return <h1>BNB page</h1>
}

export default BnbPage
