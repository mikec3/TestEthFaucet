//Solidity Version
pragma solidity 0.6.4;

// Store a single data point and allow fetching/updating of that datapoint
contract Rock_Paper_Scissors {
    
    // indexed player address allows for filtering in Web3
    event emitOutcome(string outcome, uint playerAttack, uint computerAttack, address indexed player);
    
    // emit when users donate to the faucet
    event emitDonation(uint donationValue, address sender);
    
    function play(uint playerInput) public returns (uint){
        
        uint randomGuess = (uint(keccak256(abi.encodePacked(block.timestamp+block.difficulty+playerInput+address(this).balance)))%3);
        uint playerAttack = playerInput;
        string memory outcome;
        
        // game logic
        // if Draw
        if (randomGuess == playerInput) {
            outcome = "Draw";
            // if player chooses rock
        } else if (playerInput == 0){
            if (randomGuess == 1) {
                outcome = "Player Loses";
            } else {
                outcome = "Player Wins";
                sendEthToWinner();
            }
        } else if (playerInput == 1){   // player chooses paper
            if (randomGuess == 0) {
                outcome = "Player Wins";
                sendEthToWinner();
            } else {
                outcome = "Player Loses";
            }
        } else {                    // player chooses scissors
            if (randomGuess == 0){
                outcome = "Player Loses";
            } else {
                outcome = "Player Wins";
                sendEthToWinner();
            }
        }
        
        emit emitOutcome(outcome, playerAttack, randomGuess, msg.sender);
    }
    
    function sendEthToWinner() private {
        // require this contract to have enough to send out + gas
        require(address(this).balance >=1100000);
        msg.sender.transfer(1000000);
    }
    
    function donate() public payable {
        require(msg.value >= 1000000, "You gotta give a little more than that!");
        emit emitDonation(msg.value, msg.sender);
    }
    
    
}