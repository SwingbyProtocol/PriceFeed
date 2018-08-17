
const TrustedOracle = artifacts.require("./TrustedOracle.sol")
const mnemonic = process.env.MNEMONIC_KEY;

const hdkey = require("ethereumjs-wallet/hdkey")
const bip39 = require("bip39");

const path = `m/44'/60'/0'/0/${process.env.ACCOUNT}`;

const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
const wallet = hdwallet.derivePath(path).getWallet();

const address = "0x" + wallet.getAddress().toString('hex')
const pubkey = wallet.getPublicKeyString()

console.log(`your address is: ${address}`)
console.log(`pubkey: ${pubkey}`)

module.exports = async function (deployer, net, accounts) {

    let oracle = await TrustedOracle.deployed()

    const add = await oracle.add(43627279102384291, {
        value: 0,
        from: address
    })

    console.log(add.logs)
}