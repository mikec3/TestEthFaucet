import Rock_img from './Rock_img.png'
import Paper_img from './Paper_img.png'
import Scissors_img from './Scissors_img.png'
import './Attack.css'

function Attack(props) {

	function AttackClickHandler(attack){
    props.contract.methods.play(attack).send({from: props.defaultAccount})
    .on('error', function(error){
    	//console.log(error);
    	alert('You had a winning hand, but I think the faucet is empty!');
    })
    .on('receipt', function(receipt){
    	//console.log(receipt);
    })
  }

  // Set the image for the 'button' based on the attack number
  // sets altText for alt image tags
  let imageToDisplay;
  let altText;
  switch(props.attackNum){
  	case 0:
  	imageToDisplay = Rock_img;
  	altText = 'Rock attack selector';
  	break;
  	case 1:
  	imageToDisplay = Paper_img;
  	altText = 'Paper attack selector';
  	break;
  	case 2:
  	imageToDisplay = Scissors_img;
  	altText = 'Scissors attack selector';
  	break;
  	default:
  	break;
  }
	
	return (
	<div className='ImageWrapper'>
	<img className='AttackImage' src={imageToDisplay} onClick={e => {AttackClickHandler(props.attackNum)}} alt={altText}/>
	</div>
	);
}

export default Attack;