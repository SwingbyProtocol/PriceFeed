var TrustedOracle = artifacts.require("./TrustedOracle.sol");

module.exports = function (deployer) {
  const pair = "ETH/BTC"
  deployer.deploy(TrustedOracle, pair).then(async () => {
    const oracle = await TrustedOracle.deployed()
    const add = await oracle.add(62627279102384291)
  })
};