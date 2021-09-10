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

  const contractAddress = '0x67d4cA80283f810b3888BA47C4aEEC002dbD9313';

  // declare hook for setting the defaultAccount. App will re-render after calling setDefaultAccount(myNewDefaultAccount)
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [contractBalance, setContractBalance] = useState(null);

  const [matchOutcome, setMatchOutcome] = useState(null);
  const [playerAttack, setPlayerAttack] = useState(null);
  const [computerAttack, setComputerAttack] = useState(null);

  const [RPSContract, setRPSContract] = useState(null);

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

    window.web3.eth.getBalance(contractAddress)
    .then(function(result){
    setContractBalance(window.web3.utils.fromWei(result));
    });

    setRPSContract(new window.web3.eth.Contract(contractABI, contractAddress));

      })
    } else {
      alert("You need to install MetaMask to interact with this app");
    }

  //   let web3;

  //   if(typeof web3 !== 'undefined'){
  //     web3 = new Web3(Web3.givenProvider);
  //     setWEB3(web3);
  //   } else {
  //     // IMPORTANT!!
  //     // USED WebsocketProvider instead of httpProvider due to event listening only happening on ws
  //     web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));
  //     setWEB3(web3);
  //   }

  //   web3.eth.getBalance(contractAddress)
  //   .then(function(result){
  //     setContractBalance(web3.utils.fromWei(result));
  //   });

  //   web3.eth.getAccounts()
  //   .then(function(result){
  //     setDefaultAccount(result[0]);
  //   });

  //   setRPSContract(new web3.eth.Contract(contractABI, contractAddress));
  }

  // initialize web3 and provider connection upon app load
  useEffect(() => {
    loadAccount();
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

return (
<div>
<div className='Title'> <h2> Play Rock Paper Scissors for Ropsten Test Eth! </h2> 
  </div>
<div className='GameWrapper'>
  <Donate contractBalance={contractBalance} {...defaultAttackProps}/>
  <OutcomeCard outcome = {matchOutcome} playerAttack={playerAttack} computerAttack={computerAttack} />
  <AttackCard {...defaultAttackProps}/>
</div>
<div>
  <p> Donate to the creator: 0x07Fa7FBff22d6bBcC2f38A29F07B60ef5F4916b3 </p>
  <a href='https://github.com/mikec3/TestEthFaucet'>GitHub</a>
</div>
</div>
  );
}

export default App;
