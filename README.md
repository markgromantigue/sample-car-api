# sample-car-api
After cloning, open a terminal in the directory and enter "npm install" to install dependencies
Here are the endpoints:

# GET
/cars/getAllCars  
/cars/getCarsByYear/:year  
/cars/getCarsByMake/:make  
/cars/getCarsByModel/:model  

# POST
/cars/addCar

Sample JSON input for POST:  
[{
	"year": 2200,
	"make": "TOYOYA",
	"model": "COROLLA"
}]

# PUT
/cars/modifyCar/:id
