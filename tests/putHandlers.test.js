// eslint-disable-next-line no-undef
const config = require('../config');


const requestBodyProducts = {
	"productsList": [
	  {
		"id": 93,
		"quantity": 5
	  }
	]
  }


// status code response
test('Should return 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyProducts)
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});


// body response (new quantity information)
test('Body should contain', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyProducts)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true)
});