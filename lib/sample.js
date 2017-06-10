'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mygraph = require('./examples/components/mygraph');

var _mygraph2 = _interopRequireDefault(_mygraph);

var _nodePos = require('./nodePos');

var _nodePos2 = _interopRequireDefault(_nodePos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mynode1 = {
	node: new _nodePos2.default({ x: 50, y: 50 }),
	edges: []
};
var mynode2 = {
	node: new _nodePos2.default({ x: 210, y: 160 }),
	edges: []
};
mynode1.edges.push(mynode2);
var mygraph = {
	mynodes: [mynode1, mynode2]
};

_reactDom2.default.render(_react2.default.createElement(_mygraph2.default, { tree: mygraph }), document.getElementById('sample'));
//# sourceMappingURL=sample.js.map
