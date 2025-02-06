// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
"productsList": [
      {
        "id": 1,
        "quantity": 2
      }
     ]
}

const requestBodyProducts = {
	"productsList": [
	  {
		"id": 93,
		"quantity": 5
	  }
	]
  }


// status code response
test('Should return 201 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201)
});

// body response (wareHouse information)
test('Body should contain', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.wareHouse).toBe('Fresh Food')
});


// body response (new product information)
test('Body should contain', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyProducts)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.productsList[10].id).toBe(93)
});



