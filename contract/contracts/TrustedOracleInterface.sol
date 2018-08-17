pragma solidity 0.4.24;

contract TrustedOracleInterface {
    function add(uint _nowPrice) public returns (bool);
    function getPair() public view returns (bytes32);
    function getPrice() public view returns (uint);
    function getPriceProxy(address _who) public view returns (uint);
}