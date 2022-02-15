function getColor(selection) {
	
	switch (selection) {
		case 1:
			color = 'rojo';
			return "true";
			break;
		case 2:
			color = 'azul';
			return "true";
			break;
		case 3:
			color = 'verde';
			return "true";
			break;

		default:
			return false;  //returns false because the user picked an unavailable color
			break;
	}
}

var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);

if (isAvailable)
	console.log('Good news! That color is available');
else
	console.log('We are sorry, that color is not available');
