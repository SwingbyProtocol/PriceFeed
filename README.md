# TrustedOracle

## ETH/BTC Price feed for Swingby v1.0

deployed on ropsten
0x3c1b5359b2aef496a6aae049ab27ee2f03e79e37
https://ropsten.etherscan.io/address/0x3c1b5359b2aef496a6aae049ab27ee2f03e79e37

## Getting start
```
truffle migrate
```

## API

Providing a price oracle data to the contract. ( submitter is deployer)
```
function add(uint _nowPrice) // onlySubmitter
```
Getting a price.
```
function getPrice() returns (uint) // get price 
```
Using Proxy for other oracle contract.
```
function getPriceProxy(address _who) public view returns (uint)
```


