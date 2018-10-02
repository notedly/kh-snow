'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _IndexContainer = require('../../js/IndexContainer');

var _IndexContainer2 = _interopRequireDefault(_IndexContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = (0, _express.Router)();

Index.get('/', function (req, res) {
	var contentApp = (0, _server.renderToString)(_react2.default.createElement(_IndexContainer2.default, null));
	res.render('index', {
		title: 'Welcome to the Gaesigner Blog',
		description: '개발지식을 공유하고싶어요',
		css: 'css/index.css',
		js: 'js/indexTest.js',
		body: contentApp
	});
});

exports.default = Index;