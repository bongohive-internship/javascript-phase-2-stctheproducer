// calcCircumfrence function should be here
const calcCircumfrence = radius => {
	const circumference = 2 * Math.PI * radius;
	console.log('The circumference is', circumference);
	calcArea(radius);
};

const calcArea = radius => {
	const area = Math.PI * Math.pow(radius, 2);
	console.log('The area is', area);
};

calcCircumfrence(5);
