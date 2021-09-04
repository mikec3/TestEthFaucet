import Rock_img from './Rock_img.png'
import Paper_img from './Paper_img.png'
import Scissors_img from './Scissors_img.png'
import './Outcome.css'

function Outcome(props) {

// if the player wins let them know they are getting test gwei sent to them
let winMessage;
if (props.outcome === 'Player Wins') {
	winMessage = 'Sending you 1M test gwei!';
}


	  // Set the image for the 'button' based on the attack number
function ReturnImageToDisplay(num){
	let imageToDisplay;
  switch(num){
  	case '0':
  	imageToDisplay = Rock_img;
  	break;
  	case '1':
  	imageToDisplay = Paper_img;
  	break;
  	case '2':
  	imageToDisplay = Scissors_img;
  	break;
  	default:
  	break;
  }
  return imageToDisplay;
}

	return (
		<div className='OutcomeCard'>
		<div className='Hand'>
		<h3> Player </h3>
		<img src={ReturnImageToDisplay(props.playerAttack)}/>
		</div>
		<div className='Outcome'> <h3>Match Outcome </h3>
		<div> <h3>{props.outcome}</h3> <p> {winMessage}</p> </div>
		</div>
		<div className='Hand'>
		<h3> Eth VM </h3>
		<img src={ReturnImageToDisplay(props.computerAttack)}/>
		</div>
		</div>
		);
}

export default Outcome;