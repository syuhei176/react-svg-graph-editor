'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSText = function (_React$Component) {
	_inherits(CSText, _React$Component);

	function CSText(props) {
		_classCallCheck(this, CSText);

		var _this = _possibleConstructorReturn(this, (CSText.__proto__ || Object.getPrototypeOf(CSText)).call(this, props));

		_this.state = {
			x: _this.props.x,
			y: _this.props.y
		};
		return _this;
	}

	_createClass(CSText, [{
		key: 'onEvalClicked',
		value: function onEvalClicked() {
			if (this.props.item.onEvalClicked) this.props.item.onEvalClicked();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    item = _props.item,
			    depth = _props.depth;

			var width = 100 + item.getWidth();
			var height = 50;
			var children = null;
			var text = '';
			var evaluatable = false,
			    hiddable = false;

			var transform = "translate(" + (this.state.x - width / 2) + "," + (this.state.y - 50) + ")";
			var icon_transform = "translate(" + (width - 40) + "," + 0 + ")";
			return _react2.default.createElement(
				'g',
				{ transform: transform },
				_react2.default.createElement('rect', { width: width, height: height, style: { "fill": "rgb(255,255,250)", "strokeWidth": 1, "stroke": "rgb(0,0,0)" } }),
				_react2.default.createElement(
					'g',
					{ transform: icon_transform },
					evaluatable ? _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '0', y: '0', width: '40', height: '20', style: { "fill": "#5a60ef", "stroke": "#111", "strokeWidth": 1 }, onClick: this.onEvalClicked.bind(this) }),
						_react2.default.createElement(
							'text',
							{ x: '6', y: '17', fill: '#fff', style: { "fontSize": "12px" }, onClick: this.onEvalClicked.bind(this) },
							'Eval'
						)
					) : _react2.default.createElement('div', null),
					hiddable ? _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '0', y: '20', width: '40', height: '20', style: { "fill": "#5a60ef", "stroke": "#111", "strokeWidth": 1 }, onClick: this.onShowClicked.bind(this) }),
						_react2.default.createElement(
							'text',
							{ x: '6', y: '37', fill: '#fff', style: { "fontSize": "12px" }, onClick: this.onShowClicked.bind(this) },
							this.state.hideChildren ? 'Show' : 'Hide'
						)
					) : _react2.default.createElement('div', null)
				),
				_react2.default.createElement(
					'foreignObject',
					null,
					_react2.default.createElement(
						'textArea',
						{ x: '6', y: '20', fill: '#333', style: { "width": width, "height": height, "fontSize": "14px" } },
						text
					)
				)
			);
		}
	}]);

	return CSText;
}(_react2.default.Component);

exports.default = CSText;
module.exports = exports['default'];
//# sourceMappingURL=text.js.map
