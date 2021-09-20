//import logo from './logo.svg';
import './App.css';
//import Outcome from './Components/Outcome';
import Donate from './Components/Donate';
import AttackCard from './Components/AttackCard';
import OutcomeCard from './Components/OutcomeCard';
import Web3 from 'web3';
import React, {useState, useEffect} from 'react';
import contractABI from './ABI.json'  // Solidity contract ABI

function App() {

  // ROPSTEN ADDRESS = '0x266B6F8C7C823187d20FEBD47F684F348843501a'
  // GANACHE-CLI address = '0x9F0a8af79eFE24c50fE4E6aF2308F928A75fa617'
  const contractAddress = '0x266B6F8C7C823187d20FEBD47F684F348843501a';

  // declare hook for setting the defaultAccount. App will re-render after calling setDefaultAccount(myNewDefaultAccount)
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [contractBalance, setContractBalance] = useState(null);

  const [matchOutcome, setMatchOutcome] = useState(null);
  const [playerAttack, setPlayerAttack] = useState(null);
  const [computerAttack, setComputerAttack] = useState(null);

  const [RPSContract, setRPSContract] = useState(null);

  const [connectionInd, setConnectionInd] = useState("Connect Wallet");

  // initialize and set state of web3 and contract for uses in app
  // initialize and set state of contract balance and default account
  function loadAccount(){

    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask detected');
      window.web3 = new Web3(window.ethereum);
      window.ethereum.send('eth_requestAccounts')
      .then(function(result){
        console.log(result.result[0]);
        setDefaultAccount(result.result[0]);

        // connection successful, connect wallet button will now display "Connected"
        setConnectionInd("Connected");

    window.web3.eth.getBalance(contractAddress)
    .then(function(result){
    setContractBalance(window.web3.utils.fromWei(result));
    });

    setRPSContract(new window.web3.eth.Contract(contractABI, contractAddress));

      })
    } else {
      alert("You need to install MetaMask to interact with this app");
    }
  }

  // initialize web3 and provider connection upon app load
  useEffect(() => {
    //loadAccount();
  }, []);

// Call when RPSContract is updated
// sets the event listener and updates match outcome
  useEffect(() => {

    //checking for null values to prevent setting the event listener without values initialized
    if(RPSContract !== null && defaultAccount !== null && window.web3 !== null) {

      // listen for game outcomes where this user's address is the player, update outcome display values
      RPSContract.events.emitOutcome({filter: {player: defaultAccount}}, function(error, event){
      //console.log(event);
      //console.log('event.returnValues.myDataPointName returned ' + event.returnValues.outcome);
      setMatchOutcome(event.returnValues.outcome);
      setPlayerAttack(event.returnValues.playerAttack);
      setComputerAttack(event.returnValues.computerAttack);
      //console.log('event player: ' + event.returnValues.player);
      //console.log('dfAccount: ' + defaultAccount);
    });

      // listen to all outcome events, no filters. Update contract balance after each match played by anyone
    RPSContract.events.emitOutcome({}, function(error, event){
      window.web3.eth.getBalance(contractAddress)
      .then(function(result){
        setContractBalance(window.web3.utils.fromWei(result));
      });
    });

      // update the contract balance whenever a donation event is emitted
    RPSContract.events.emitDonation({}, function(error, event){
      window.web3.eth.getBalance(contractAddress)
      .then(function(result){
        setContractBalance(window.web3.utils.fromWei(result));
      });
    });
    }
  }, [RPSContract, defaultAccount]);

  // package props for attack buttons (same props for all buttons)
  let defaultAttackProps = {
    contract: RPSContract,
    defaultAccount: defaultAccount
  }

  // recieves which attack was selected, allows for update on screen while waiting for block mined
 const attackSelectedHandler = (event) => {
  setMatchOutcome('Waiting...')
  setPlayerAttack(event.toString());
  // loading icon in computer attack img
  setComputerAttack('3');
 }

return (
<div>
<div className='Title'> <h1> Play </h1> 
                        <h2> [Rock, Paper, Scissors] <button onClick={loadAccount}> {connectionInd} </button></h2> 
  </div>
<div className='GameWrapper'>
  <Donate contractBalance={contractBalance} {...defaultAttackProps}/>
  <OutcomeCard outcome = {matchOutcome} playerAttack={playerAttack} computerAttack={computerAttack} />
  <AttackCard {...defaultAttackProps} onAttackSelectedHandler={attackSelectedHandler}/>
</div>
<div>
<p><a href='https://github.com/mikec3/TestEthFaucet'>GitHub</a></p>
  <p> Donate to the creator: 0x07Fa7FBff22d6bBcC2f38A29F07B60ef5F4916b3 </p>
</div>
</div>
  );
}

export default App;
