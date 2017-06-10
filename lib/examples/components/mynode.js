'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Process = function (_React$Component) {
	_inherits(Process, _React$Component);

	function Process(props) {
		_classCallCheck(this, Process);

		return _possibleConstructorReturn(this, (Process.__proto__ || Object.getPrototypeOf(Process)).call(this, props));
	}

	_createClass(Process, [{
		key: 'onEdit',
		value: function onEdit() {
			window.alert('clicked!!');
		}
	}, {
		key: 'render',
		value: function render() {
			var item = this.props.item;

			var edges = item.edges.map(function (target) {
				return _react2.default.createElement(_.Edge, { src: item, target: target });
			});
			return _react2.default.createElement(
				_.Node,
				{ width: 200, height: 100, node: item.node, edges: edges },
				_react2.default.createElement('rect', { x: '0', y: '0', width: '40', height: '20', style: { "fill": "#5d67ef", "stroke": "#111", "strokeWidth": 1 }, onClick: this.onEdit.bind(this) })
			);
		}
	}]);

	return Process;
}(_react2.default.Component);

exports.default = Process;
module.exports = exports['default'];
//# sourceMappingURL=mynode.js.map
