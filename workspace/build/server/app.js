'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Dir = require('./Dir');

var _Dir2 = _interopRequireDefault(_Dir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('PATH : ', _Dir2.default);

var app = (0, _express2.default)();
app.set('views', '/' + _Dir2.default.appRoot + '/build');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/', _express2.default.static('/' + _Dir2.default.appRoot + '/build'));

app.get('/', function (req, res) {
	res.end('yaho');
});

var server = app.listen(_Dir2.default.PORT, function () {
	console.log('Express listening on port : ' + server.address().port);
});