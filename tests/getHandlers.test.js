// eslint-disable-next-line no-undef
const config = require('../config');

// status code response
test('Should return 200 status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)

});


// body response kit name
test('Body should contain', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe('For picnic')

});


// body response product id
test('Body should contain', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.id).toBe(1)

});


// body response product name
test('Body should contain', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe('Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free')

});


// body response warehouses name
test('Body should contain', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody[0].name).toBe("Everything You Need")
});


// body response warehouses start working hours
test('Body should contain', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody[0].workingHours.start).toBe(7)
});