'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _point2d = require('point2d');

var _point2d2 = _interopRequireDefault(_point2d);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DRAG_NONE = 0;
var DRAG_MOVE = 1;

var Node = function (_React$Component) {
	_inherits(Node, _React$Component);

	function Node(props) {
		_classCallCheck(this, Node);

		var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, props));

		_this.state = {
			x: props.node.x,
			y: props.node.y,
			nodeState: {},
			hideChildren: false
		};
		return _this;
	}

	_createClass(Node, [{
		key: 'onClick',
		value: function onClick() {
			console.log('click');
		}
	}, {
		key: 'onMouseDown',
		value: function onMouseDown(e) {
			console.log('onMouseDown');
			this.offset = new _point2d2.default(e.pageX - this.state.x, e.pageY - this.state.y);
			this.setState({
				dragMode: DRAG_MOVE
			});
		}
	}, {
		key: 'onMouseMove',
		value: function onMouseMove(e) {
			if (this.state.dragMode == DRAG_MOVE) {
				var currentPos = new _point2d2.default(e.pageX, e.pageY);
				var dd = currentPos.sub(this.offset);

				if (this.props.onMoved) {
					this.props.onMoved(dd);
				}
				this.setState({
					x: dd.x,
					y: dd.y
				});
				this.props.node.setPos(dd.x, dd.y);
			}
		}
	}, {
		key: 'onMouseUp',
		value: function onMouseUp(e) {
			if (this.state.dragMode == DRAG_MOVE) {}
			this.state.dragMode = DRAG_NONE;
		}
	}, {
		key: 'onMouseEnter',
		value: function onMouseEnter() {}
	}, {
		key: 'onMouseLeave',
		value: function onMouseLeave() {
			this.state.dragMode = DRAG_NONE;
		}
	}, {
		key: 'onFocus',
		value: function onFocus() {
			if (this.props.item.onClick) this.props.item.onClick();
		}
	}, {
		key: 'onShowClicked',
		value: function onShowClicked() {
			if (this.state.hideChildren) {
				this.setState({
					hideChildren: false
				});
			} else {
				this.setState({
					hideChildren: true
				});
			}
		}
	}, {
		key: 'onEvalClicked',
		value: function onEvalClicked() {
			if (this.props.item.onEvalClicked) this.props.item.onEvalClicked();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    height = _props.height,
			    node = _props.node,
			    edges = _props.edges,
			    depth = _props.depth,
			    stroke = _props.stroke,
			    children = _props.children;

			var text = '';
			var evaluatable = false,
			    hiddable = false;
			var absolutlyPos = node.getAPos();
			var showAbsolutlyPosition = false;

			var transform = "translate(" + this.state.x + "," + this.state.y + ")";
			return _react2.default.createElement(
				'g',
				{ transform: transform },
				edges,
				_react2.default.createElement('rect', { width: width, height: height, style: { "fill": "rgb(255,255,250)", "strokeWidth": 1, "stroke": stroke || "rgb(0,0,0)" } }),
				_react2.default.createElement('rect', { onClick: this.onClick.bind(this),
					onMouseDown: this.onMouseDown.bind(this),
					onMouseEnter: this.onMouseEnter.bind(this),
					onMouseLeave: this.onMouseLeave.bind(this),
					onMouseMove: this.onMouseMove.bind(this),
					onMouseUp: this.onMouseUp.bind(this),
					width: width, height: height, style: { "opacity": 0 } }),
				showAbsolutlyPosition ? _react2.default.createElement(
					'text',
					null,
					'(' + absolutlyPos.x + ', ' + absolutlyPos.y + ')'
				) : _react2.default.createElement('div', null),
				children
			);
		}
	}]);

	return Node;
}(_react2.default.Component);

exports.default = Node;
module.exports = exports['default'];
//# sourceMappingURL=node.js.map
