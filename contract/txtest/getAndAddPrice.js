const { getAddress } = require('./getAddress')
const TrustedOracle = artifacts.require('./TrustedOracle.sol')

const address = getAddress()

module.exports = async function (callback) {
    const oracle = await TrustedOracle.deployed()
    // getPrice once
    const getPrice1 = await oracle.getPrice()
    console.log(getPrice1.toNumber())
    // add price
    const add = await oracle.add(34197279102384291, {
      value: 0,
      from: address
    })
    console.log(add.logs)
    // getPrice another time
    const getPrice2 = await oracle.getPrice()
    console.log(getPrice2.toNumber())
    callback() // end process
}
