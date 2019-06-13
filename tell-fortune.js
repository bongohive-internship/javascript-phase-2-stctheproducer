// tellFortune function should be here
const tellFortune = (numberOfChildren, partnerName, geoLocation, jobTitle) => {
	console.log(
		`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
	);
};

tellFortune(2, 'Mary Banda', 'Lusaka, Zambia', 'CEO');

tellFortune(10, 'Natasha Miles', 'New York, USA', 'Software Developer');

tellFortune(1, 'Kitana Jenning', 'Mississippi, Missouri', 'Pilot');
