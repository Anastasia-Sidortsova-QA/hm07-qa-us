# Sprint 7 project


## Urban Grocers
Description
Urban Grocers is an API-driven platform that allows users to manage grocery items and their details in an urban setting. The application supports various operations like adding new grocery items, updating existing items, retrieving information about items, and deleting them.


### Documentation Source
The project documentation is generated using apiDoc - URL + /docs/.


#### Technologies & Techniques Used
Backend Framework: Node.js 
API Protocol: RESTful API
HTTP Methods Supported:
- GET – Retrieve grocery item details
- POST – Create new grocery items
- PUT – Update existing grocery items
- DELETE – Remove grocery items 


#### How to run this project
1. Clone the repository to your local directory `git@github.com:username/hm07-qa-us.git`
2. In terminal in this directory install dependencies: `$ npm install`
3. Run the application: `$ npm start`
4. Start the Practicum server and copy its address
5. Add the server address to `config-js` file in the `API_URL` variable value
6. Run all the tests: `$ npx jest` or run individual tests `$ npx jest {testName.test.js}`


##### Tests conducting
It has tests for DELETE, GET, POST and PUT endpoints, 1/13 tests FAIL, 12/13 tests in this project PASS.

1. GET request
`$ npx jest /tests/getHandlers.test.js`

There are 6 tests in this suite:
- TEST 1: Select an API endpoint /api/v1/kits/1 for the GET request to validate the code is is 200 OK. 
- TEST 2: Verify to parse the response body (kit name with /api/v1/kits/1 endpoint) contains the result using mather toBe().
- TEST 3: Verify to parse the response body (product id with /api/v1/products/1 endpoint) contains the result using mather toBe().
- TEST 4: Verify to parse the response body (product name with /api/v1/products/1 endpoint) contains the result using mather toBe().
- TEST 5: Verify to parse the response body (warehouses name with /api/v1/warehouses endpoint) contains the result using mather toBe().
- TEST 6: Verify to parse the response body (warehouses start working hours with /api/v1/warehouses endpoint) contains the result using mather toBe().


2. POST request
`$ npx jest /tests/postHandlers.test.js`

There are 3 tests in this suite:
- TEST 1: Select an API endpoint /api/v1/orders for the POST request to validate the code is 201 Created. 
- TEST 2: Verify to parse the response body (wareHouse information with /api/v1/orders endpoint) contains the result using mather toBe().
- TEST 3:  Verify to parse the response body (new product adding information with /api/v1/kits/6/products endpoint) contains the result using mather toBe().


3. PUT request
`$ npx jest /tests/putHandlers.test.js`

There are 2 tests in this suite:
- TEST 1: Select an API endpoint /api/v1/kits/6 for the PUT request to validate the code is 200 OK. 
- TEST 2: Verify to parse the response body (new quantity information with /api/v1/kits/6 endpoint) contains the result using mather toBe(true).


4. DELETE request
`$ npx jest /tests/deleteHandlers.test.js`

There are 2 tests in this suite:
- TEST 1: Select an API endpoint /api/v1/kits/6 for the DELETE request to validate the code is 200 OK. 
- TEST 2: Verify to parse the response body (kit deleating with /api/v1/kits/6 endpoint) contains the result using mather toBe(true).