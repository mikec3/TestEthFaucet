

function Account(props) {

	return (
		<div> 
		Account is here! {props.defaultAccount}
		<p> </p>
		Contract Balance: {props.contractBalance}
		</div>
		);
}

export default Account;