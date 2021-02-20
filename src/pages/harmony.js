import { useEffect, useState } from 'react'
import { Magic } from 'magic-sdk'
import { HarmonyExtension } from '@magic-ext/harmony'

const { Harmony: Index } = require('@harmony-js/core')
const { ChainID, ChainType, Units, toWei } = require('@harmony-js/utils')

const magic =
  process.browser &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_PK, {
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
  const [email, setEmail] = useState('')
  const [publicAddress, setPublicAddress] = useState('')
  const [destinationAddress, setDestinationAddress] = useState('')
  const [sendAmount, setSendAmount] = useState(0)
  const [contractTxHash, setContractTxHash] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userMetadata, setUserMetadata] = useState({})
  const [txHash, setTxHash] = useState('')
  const [contractSendHash, setContractSendHash] = useState('')
  const [contractSending, setContractSending] = useState(false)
  const [sendingTransaction, setSendingTransaction] = useState(false)
  const [deployingContract, setDeployingContract] = useState(false)

  useEffect(() => {
    magic.user.isLoggedIn().then(async (magicIsLoggedIn) => {
      setIsLoggedIn(magicIsLoggedIn)
      if (magicIsLoggedIn) {
        const { publicAddress } = await magic.user.getMetadata()
        setPublicAddress(publicAddress)
        setUserMetadata(await magic.user.getMetadata())
      }
    })
  }, [isLoggedIn])

  const login = async () => {
    await magic.auth.loginWithMagicLink({ email })
    setIsLoggedIn(true)
  }

  const logout = async () => {
    await magic.user.logout()
    setIsLoggedIn(false)
  }

  const handlerSendTransaction = async () => {
    const params = {
      //  token send to
      to: destinationAddress,
      // amount to send
      value: toWei(sendAmount, Units.one).toString(),
      // gas limit, you can use string
      gasLimit: '210000',
      // send token from shardID
      shardID: 0,
      // send token to toShardID
      toShardID: 0,
      // gas Price, you can use Unit class, and use Gwei, then remember to use toWei(), which will be transformed to BN
      gasPrice: 1000000000,
    }

    setSendingTransaction(true)

    const tx = await magic.harmony.sendTransaction(params)

    setSendingTransaction(false)

    setTxHash(tx.transactionHash)

    console.log('send transaction', tx)
  }

  const handleDeployContract = async () => {
    const bin =
      '608060405234801561001057600080fd5b5060c68061001f6000396000f3fe6080604052348015600f576000' +
      '80fd5b506004361060325760003560e01c80636057361d146037578063b05784b8146062575b600080fd5b6060600480' +
      '36036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b60405180' +
      '82815260200191505060405180910390f35b8060008190555050565b6000805490509056fea265627a7a723158209e86' +
      '9bf97eba094ccf7533f0f92b4de32cf3cce7d7cff974769bca975e178b0164736f6c63430005110032'

    const contractBytecode = {
      data: `0x${bin}`,
      gasLimit: '210000',
      // send token from shardID
      shardID: 0,
      // send token to toShardID
      toShardID: 0,
      // gas Price, you can use Unit class, and use Gwei, then remember to use toWei(), which will be transformed to BN
      gasPrice: 1000000000,
      arguments: [],
    }
    setDeployingContract(true)

    const tx = await magic.harmony.sendTransaction(contractBytecode)

    setDeployingContract(false)

    setContractTxHash(tx.transactionHash)

    console.log('deploy contract', tx)
  }

  const handleContractSend = async () => {
    const deployedContract = harmony.contracts.createContract(
      contractAbi,
      contractAddress
    )

    const tx = await deployedContract.methods.store(900)

    let { txPayload } = tx.transaction

    txPayload.from = publicAddress
    txPayload.gasLimit = '210000'
    txPayload.gasPrice = '1000000000'

    setContractSending(true)

    const txn = await magic.harmony.sendTransaction(txPayload)

    setContractSending(false)

    setContractSendHash(txn.transactionHash)
    console.log('call contract', txn)
  }

  return (
    <div className='text-arwes'>
      {!isLoggedIn ? (
        <div className='container'>
          <h1>Please sign up or login</h1>
          <input
            type='email'
            name='email'
            required='required'
            placeholder='Enter your email'
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <button onClick={login}>Send</button>
        </div>
      ) : (
        <div>
          <div className='container'>
            <h1>Current user: {userMetadata.email}</h1>
            <button onClick={logout}>Logout</button>
          </div>
          <div className='container'>
            <h1>Harmony address</h1>
            <div className='info'>
              <a
                href={`https://explorer.pops.one/#/address/${publicAddress}`}
                target='_blank'
              >
                {publicAddress}
              </a>
            </div>
          </div>
          <div className='container'>
            <h1>Send Transaction</h1>
            {txHash ? (
              <div>
                <div>Send transaction success</div>
                <div className='info'>
                  <a
                    href={`https://explorer.pops.one/#/tx/${txHash}`}
                    target='_blank'
                  >
                    {txHash}
                  </a>
                </div>
              </div>
            ) : sendingTransaction ? (
              <div className='sending-status'>Sending transaction</div>
            ) : (
              <div />
            )}
            <input
              type='text'
              name='destination'
              className='full-width'
              required='required'
              placeholder='Destination address'
              onChange={(event) => {
                setDestinationAddress(event.target.value)
              }}
            />
            <input
              type='text'
              name='amount'
              className='full-width'
              required='required'
              placeholder='Amount in One'
              onChange={(event) => {
                setSendAmount(event.target.value)
              }}
            />
            <button id='btn-send-txn' onClick={handlerSendTransaction}>
              Send Transaction
            </button>
          </div>
          <div className='container'>
            <h1>Smart Contract</h1>
            {deployingContract ? (
              <div className='sending-status'>Deploying contract</div>
            ) : (
              ''
            )}
            <div className='info'>
              <a
                href={`https://explorer.pops.one/#/tx/${contractTxHash}`}
                target='_blank'
              >
                {contractTxHash}
              </a>
            </div>
            <button id='btn-deploy' onClick={handleDeployContract}>
              Deploy Contract
            </button>
          </div>
          <div className='container'>
            <h1>Contract Send</h1>
            {contractSending ? (
              <div className='sending-status'>Calling contract send</div>
            ) : (
              ''
            )}
            <div className='info'>
              <a
                href={`https://explorer.pops.one/#/tx/${contractSendHash}`}
                target='_blank'
              >
                {contractSendHash}
              </a>
            </div>
            <button id='btn-deploy' onClick={handleContractSend}>
              Contract Send
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HarmonyPage
