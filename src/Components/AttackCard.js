import Attack from './Attack';
import './AttackCard.css';

function AttackCard(props) {
	
	return (
	<div className='AttackCard'>
	<h3>Select your hand </h3>
	<Attack hand = {'Rock'} attackNum = {0} {...props} />
	<Attack hand = {'Paper'} attackNum = {1} {...props} />
	<Attack hand = {'Scissors'} attackNum = {2} {...props} />
	</div>
	);
};

export default AttackCard;