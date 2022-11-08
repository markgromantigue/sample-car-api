var express = require('express');
var fs = require('fs');
var router = express.Router();
var carsJson = require('../json_data.json');

// GET all cars
router.get('/getAllCars', function(req, res, next) {
  res.send(carsJson);
});

// GET cars by year
router.get('/getCarsByYear/:year', function(req, res, next) {
    var carsFilteredByYear = carsJson.filter(function(i){
        return i.year == req.params.year;
    });
    res.send(carsFilteredByYear);
});

// GET cars by make
router.get('/getCarsByMake/:make', function(req, res, next) {
    var carsFilteredByMake = carsJson.filter(function(i){
        return i.make.toString().toLowerCase().replace(/ +/g, "") == req.params.make.toString().toLowerCase().replace(/ +/g, "");
    });
    res.send(carsFilteredByMake);
});

// GET cars by model
router.get('/getCarsByModel/:model', function(req, res, next) {
    var carsFilteredByModel = carsJson.filter(function(i){
        return i.model.toString().toLowerCase().replace(/ +/g, "") == req.params.model.toString().toLowerCase().replace(/ +/g, "");
    });
    res.send(carsFilteredByModel);
});

// POST request for adding a new car
router.post('/addCar', function(req, res, next) {
    //Append new value to JSON
    if (Array.isArray(req.body)) {
        req.body.forEach(function(i){
            carsJson.push(i);
        });
    } else{
        carsJson.push(req.body);
    }
    fs.writeFile("json_data.json", JSON.stringify(carsJson), function(err, result){
        if(err) console.log("error", err);
    });
    res.send(carsJson);
  });

// PUT request for adding a new car
router.put('/modifyCar/:id', function(req, res, next) {
    //Append new value to JSON
    carsJson.forEach(function(i, index, array){
        if(i.id == req.params.id){
            array[index]["make"] = req.body.make;
            array[index]["model"] = req.body.model;
            array[index]["year"] = req.body.year;
        }
    });
    fs.writeFile("json_data.json", JSON.stringify(carsJson), function(err, result){
        if(err) console.log("error", err);
    });
    res.send(carsJson);
  });

module.exports = router;
