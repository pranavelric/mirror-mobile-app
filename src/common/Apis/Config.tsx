export const isDev = true

export let currentChain: string | undefined = undefined
export function setCurrentChain(chain: string) {
  currentChain = isDev ? chain : 'columbus'
  setDomain()
}

export const agreement = 'https://mirror.finance/assets/json/agreement_v1.json'
export const assetIconAddress = 'https://mirror.finance/assets/icon/$1@3x.png'
export const spreadPage = 'https://docs.mirror.finance/protocol/terraswap'
export const protocolDocumentation = 'https://help.mirrorwallet.com/'
const domain = {
  columbus: {
    chainDomain: 'https://lcd.terra.dev',
    chainId: 'columbus-4',

    gqlMantleClientDomain: 'https://mantle.terra.dev/',
    gqlPriceClientDomain: 'https://graph.mirror.finance/graphql',

    assetsAddress: 'https://whitelist.mirror.finance/columbus.json',
  },
  moonshine: {
    chainDomain: 'https://moonshine-lcd.terra.dev',
    chainId: 'moonshine',

    gqlMantleClientDomain: 'https://moonshine-mantle.terra.dev/',
    gqlPriceClientDomain: 'https://moonshine-graph.mirror.finance/graphql',

    assetsAddress: 'https://whitelist.mirror.finance/moonshine.json',
  },
  tequila: {
    chainDomain: 'https://tequila-lcd.terra.dev',
    chainId: 'tequila-0004',

    gqlMantleClientDomain: 'https://tequila-mantle.terra.dev',
    gqlPriceClientDomain: 'https://tequila-graph.mirror.finance/graphql',

    assetsAddress: 'https://whitelist.mirror.finance/tequila.json',
  },
}

export let currentDomain: any = undefined
export let assetsAddress: any = undefined
function setDomain() {
  currentDomain =
    currentChain === 'columbus'
      ? domain.columbus
      : currentChain === 'moonshine'
      ? domain.moonshine
      : currentChain === 'tequila'
      ? domain.tequila
      : domain.tequila

  assetsAddress = currentDomain.assetsAddress
}

const moonpayConfig = {
  main: {
    pk: '',
    url: '',
    urlsigner: '',
    currency: 'UST',
  },
  test: {
    pk: '',
    url: '',
    urlsigner: '',
    currency: 'UST',
  },
}
export const moonpay = moonpayConfig.main

export let loginPage: any = undefined
export let torusConfig: any = undefined

const auth0JwtParams = {
  testnet: {
    domain: '',
  },
  mainnet: {
    domain: '',
  },
}

export const _loginPage = {
  testnet: '',
  mainnet: '',
}

export const _torusConfig = {
  testnet: {
    google: {
      name: 'Google',
      typeOfLogin: '',
      clientId: '',
      verifier: '',
      jwtParams: null,
    },
    facebook: {
      name: 'Facebook',
      typeOfLogin: '',
      clientId: '',
      verifier: '',
      jwtParams: null,
    },
    apple: {
      name: 'Apple',
      typeOfLogin: '',
      clientId: '',
      verifier: '',
      jwtParams: null,
    },
  },
  mainnet: {
    google: {
      name: 'Google',
      typeOfLogin: '',
      clientId: '',
      verifier: '',
      jwtParams: null,
    },
    facebook: {
      name: 'Facebook',
      typeOfLogin: '',
      clientId: '',
      verifier: '',
      jwtParams: null,
    },
    apple: {
      name: 'Apple',
      typeOfLogin: 'apple',
      clientId: '',
      verifier: '',
      jwtParams: null,
    },
  },
}

export function setTorusNetwork(net: string) {
  let torusNetwork
  if (net === undefined || net === '')
    torusNetwork = isDev ? 'testnet' : 'mainnet'
  else torusNetwork = isDev ? net : 'mainnet'

  loginPage =
    torusNetwork === 'testnet' ? _loginPage.testnet : _loginPage.mainnet
  torusConfig =
    torusNetwork === 'testnet' ? _torusConfig.testnet : _torusConfig.mainnet
}