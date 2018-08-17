pragma solidity 0.4.24;

contract TrustedOracle {

    address public submitter;

    bytes32 public pair;
    
    uint256 public nowPrice;
    
    event PriceUpdated(uint _newPrice);

    constructor(string _pair) public {
        pair = sha256(abi.encodePacked(_pair));
        submitter = msg.sender;
    }

    function add(uint _nowPrice) public returns (bool) {

        require(submitter == msg.sender);

        nowPrice = _nowPrice;
        
        emit PriceUpdated(nowPrice);
    }

    function getPrice() public view returns (uint) {
        return nowPrice;
    }
}