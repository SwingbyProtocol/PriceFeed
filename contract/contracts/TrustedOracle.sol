pragma solidity 0.4.24;

import "./TrustedOracleInterface.sol";

contract TrustedOracle {

    address public submitter;

    bytes32 public pair;
    
    uint256 public nowPrice;

    bool    private isClosed;
    
    event PriceUpdated(uint _newPrice);

    constructor(string _pair) public {
        pair = sha256(abi.encodePacked(_pair));
        submitter = msg.sender;
        isClosed = false;
    }

    function add(uint _nowPrice) public returns (uint) {

        require(submitter == msg.sender);

        require(!isClosed);

        nowPrice = _nowPrice;

        emit PriceUpdated(nowPrice);
        return nowPrice;
    }

    function freeze() public returns (bool) {
        require(submitter == msg.sender);

        isClosed = true;

        return isClosed;
    }

    function getPair() public view returns (bytes32) {
        return pair;
    }

    function getPrice() public view returns (uint) {
        return nowPrice;
    }

    function getPriceProxy(address _who) public view returns (uint) {
        TrustedOracleInterface who = TrustedOracleInterface(_who);
        return who.getPrice();
    }

}