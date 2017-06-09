'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _point2d = require('point2d');

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodePos = function (_EventEmitter) {
	_inherits(NodePos, _EventEmitter);

	function NodePos(options) {
		_classCallCheck(this, NodePos);

		var _this = _possibleConstructorReturn(this, (NodePos.__proto__ || Object.getPrototypeOf(NodePos)).call(this));

		_this.x = options.x || 0;
		_this.y = options.y || 0;
		_this.parent = null;
		return _this;
	}

	_createClass(NodePos, [{
		key: 'setPos',
		value: function setPos(x, y) {
			this.x = x;
			this.y = y;
			this.emit('change', this);
		}
	}, {
		key: 'setParent',
		value: function setParent(parent) {
			var _this2 = this;

			this.parent = parent;
			this.parent.on('change', function () {
				_this2.emit('change', _this2);
			});
		}
	}, {
		key: 'getAPos',
		value: function getAPos(x, y) {
			if (this.parent) {
				var parentPos = this.parent.getAPos();
				return {
					x: this.x + parentPos.x,
					y: this.y + parentPos.y
				};
			} else {
				return this;
			}
		}
	}]);

	return NodePos;
}(_events.EventEmitter);

exports.default = NodePos;
module.exports = exports['default'];
//# sourceMappingURL=nodePos.js.map
