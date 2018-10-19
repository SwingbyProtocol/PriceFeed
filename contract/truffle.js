const mnemonic = process.env.MNEMONIC_KEY
const HDWalletProvider = require('truffle-hdwallet-provider')
// const mnemonic = "sand jump crazy forget spy ripple into clown pelican fine ride power"

const ropstenProvider = function () {
  return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/', process.env.ACCOUNT)
}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: 343,
      gas: 4680036,
      gasPrice: 10000000000
    },
    ropsten: {
      provider: ropstenProvider(),
      network_id: 3, // Match ropsten network id
      gas: 4480036,
      gasPrice: 2000000000
    },
  }
};
