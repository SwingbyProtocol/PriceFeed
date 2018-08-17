# TrustedOracle

## ETH/BTC Price feed for Swingby v1.0

## API

Providing a price oracle data to the contract. ( submitter is deployer)
```
function add(uint _nowPrice) // onlySubmitter
```
Getting a price;
```
function getPrice() returns (uint) // get price 
```
Using Proxy for other oracle contract.
```
function getPriceProxy(address _who) public view returns (uint)
```


