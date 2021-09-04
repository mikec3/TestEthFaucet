import Outcome from './Outcome.js'

function OutcomeCard(props){

	return (
	<Outcome outcome={props.outcome} playerAttack={props.playerAttack} computerAttack={props.computerAttack}/>
	)
}

export default OutcomeCard;