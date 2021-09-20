import Outcome from './Outcome.js'

function OutcomeCard(props){

	return (
		<div>
	<Outcome outcome={props.outcome} playerAttack={props.playerAttack} computerAttack={props.computerAttack}/>
	</div>
	)
}

export default OutcomeCard;