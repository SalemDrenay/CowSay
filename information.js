let name = "Damien Thibault";
let campus = "Bordeaux campus";

const cowsay = require('cowsay');
console.log(cowsay.say({
	text : `Hello there, I'm ${name} from the ${campus}!`,
	e : "oO",
	T : " "
}));