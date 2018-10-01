'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Dir = require('./Dir');

var _Dir2 = _interopRequireDefault(_Dir);

var _Index = require('./routes/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var absolutePath = _Dir2.default.appRoot + '/../';

// Routes

var app = (0, _express2.default)();

app.engine('html', require('ejs').renderFile);
app.set('views', absolutePath + '/views');
app.set('view engine', 'ejs');

app.use('/', _express2.default.static(absolutePath + '/'));
app.use('/', _Index2.default);

var server = app.listen(_Dir2.default.PORT, function () {
	console.log('Express listening on port : ' + server.address().port);
});