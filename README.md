# TrustedOracle

## ETH/BTC Price feed for Swingby

Deployed on ropsten.
0xa2bd28f23a78db41e49db7d7b64b6411123a8b85
https://ropsten.etherscan.io/address/0xa2bd28f23a78db41e49db7d7b64b6411123a8b85

## Getting start
```
$ npm install 
```
```
$ truffle migrate
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
Using Proxy for getting from another Oracle contract.
```
function getPriceProxy(address _who) public view returns (uint)
```


