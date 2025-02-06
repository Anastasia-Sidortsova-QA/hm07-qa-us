// eslint-disable-next-line no-undef
const config = require('../config');

// status code response
test('Should return 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});


// body response (kit deleating)
test('Body should contain', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE'
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true)
});
