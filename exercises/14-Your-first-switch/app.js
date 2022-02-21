function getColor(selection) {
	let colorname = ["red", "blue", "green"];
	
	switch (selection) {
		case 1:
			colorname = 'red';
			return "true";
			break;
		case 2:
			colorname = 'blue';
			return "true";
			break;
		case 3:
			colorname = 'green';
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
