pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    // Change 'constructor' to the contract name 'Inbox'
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
