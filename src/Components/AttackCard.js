import Attack from './Attack';
import './AttackCard.css';

function AttackCard(props) {

	// passes which hand was selected up to parent
	const attackSelectedHandler = (event) => {
		props.onAttackSelectedHandler(event);
	}
	
	return (
	<div className='AttackCard'>
	<h3>Select your hand </h3>
	<Attack hand = {'Rock'} attackNum = {0} {...props} onAttackSelectedHandler={attackSelectedHandler} />
	<Attack hand = {'Paper'} attackNum = {1} {...props} />
	<Attack hand = {'Scissors'} attackNum = {2} {...props} />
	</div>
	);
};

export default AttackCard;