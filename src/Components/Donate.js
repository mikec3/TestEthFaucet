import './Donate.css'
import React, {useState} from 'react'

function Donate(props) {
	const [donationResult, setDonationResult] = useState(null);

	function SendDonation() {
		props.contract.methods.donate().send({from: props.defaultAccount, value: 1000000000000000000})
		.on('receipt', function(receipt){
			console.log(receipt);
			setDonationResult('Thanks for donating!')
		})
		.on('error', function(error){
			console.log(error);
			setDonationResult('Probably gotta give a little more than that.');
		})
	
	}
	
	return (
	<div className='DonateCard'> 
	<div className='Balance'>
	<p> Contract Balance: </p>
	<p>{props.contractBalance}</p>
	</div>

	<button onClick={SendDonation}> Donate 1 test Eth to the faucet </button>
	<p>{donationResult}</p>
	</div>
	)
}

export default Donate;