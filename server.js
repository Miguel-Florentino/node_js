const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;

app.use(bodyParser.json({ limit: '100' }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '100'

}));
app.use(cors());

app.all('*', function (res, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();

});

app.get('/', function (req, res) {
    res.send('gread!');
});

//date
var dat= new Date();
app.get('/date', function (req, res) {
    res.send(dat);
});


//fullname
app.get('/fullname', function (req, res) {
    res.send('Miguel Florentino!');
});

//city
app.get('/city', function (req, res) {
    res.send('ILOVE-MTY');
});

//school
app.get('/school', function (req, res) {
    res.send('Tecnologico Nacional de MX');
});

//The sum of, two numbers (POST)
app.post('/sum', (req,res) => {
    const nums = req.body;
    let n1 = parseInt(nums.num1);
    let n2 = parseInt(nums.num2);
    let suma = n1 + n2;
    let parsedSuma = suma.toString();
    res.send(parsedSuma);
});

//The multiplication of three numbers (POST)
app.post('/mult', (req,res) => {
    const nums = req.body;
    let n1 = parseInt(nums.num1);
    let n2 = parseInt(nums.num2);
    let n3 = parseInt(nums.num3);
    let mult =n1 * n2 * n3;
    let parsedMult = mult.toString();
    res.send(parsedMult);
});

//The area of a square (POST)
app.post('/squareA', (req,res) => {
    const sides = req.body;
    let sideOne = parseInt(sides.lado1);
    let sideTwo = parseInt(sides.lado2);
    let squareArea = 4 * 4;
    let parsedArea = squareArea.toString();
    res.send(parsedArea);
});

//The area of a triangle (POST)
app.post('/triangleA', (req,res) => {
    const triangle = req.body;
    let base = parseInt(triangle.base1);
    let height = parseInt(triangle.height1);
    let triangleArea = (base * height)/2;
    let parsedArea = triangleArea.toString();
    res.send(parsedArea);
});

    app.listen(port, function () {
        console.log('MY APP IS RUNNING AT THE PORT' + port);
    });