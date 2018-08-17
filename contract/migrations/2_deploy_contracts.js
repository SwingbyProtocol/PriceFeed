var TrustedOracle = artifacts.require("./TrustedOracle.sol");

module.exports = function(deployer) {
  const pair = "ETH/BTC"
  deployer.deploy(TrustedOracle, pair);
};
