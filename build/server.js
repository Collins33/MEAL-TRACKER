'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// instance of express
var app = (0, _express2.default)();
// middleware to access request data
app.use(_express2.default.json());

// dummy endpoint to check if everythin works
app.get('/', function (req, res) {
    return res.status(200).send({ 'message': 'I am working' });
});

app.listen(3000);
console.log('app running on port ', 3000);