# bee-loading-state

是一种状态切换的按钮，组件基于`Button`,所以`button`所具备的能力，`Loadingstate`都具备，比如换颜色改大小。


## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|loadingText|loading时显示内容|string|loading|
|loadingTime|loading的时间|number|300ms|


## 案例

### 基本 Loadingstate

有默认的loading文字与时间

<div class="example-content"><div id="ReactLoadingstateDemo1"></div>
</div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactLoadingstateDemo1">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Loadingstate } from 'tinper-bee';

function demo1 () {
    return (
        &lt;div className="demo-loading-state">
        	&lt;Loadingstate>confirm&lt;/Loadingstate>
        &lt;/div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactLoadingstateDemo1'));

</code></pre>
</div>
</div>

### 自定义Loadingstate

loadingText 自定义 loading文字。loadingTime 自定义 loading 时间。

<div class="example-content"><div id="ReactLoadingstateDemo2"></div>
</div>




<script>
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(1);

	var _src2 = _interopRequireDefault(_src);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function demo1() {
	    return _react2['default'].createElement(
	        'div',
	        { className: 'demo-loading-state' },
	        _react2['default'].createElement(
	            _src2['default'],
	            null,
	            'confirm'
	        )
	    );
	}

	function demo2() {
	    return _react2['default'].createElement(
	        'div',
	        { className: 'demo-loading-state' },
	        _react2['default'].createElement(
	            _src2['default'],
	            { loadingText: 'waiting...', loadingTime: '4000' },
	            'confirm'
	        )
	    );
	}

	_reactDom2['default'].render(demo1(), document.getElementById('ReactLoadingstateDemo1'));
	_reactDom2['default'].render(demo2(), document.getElementById('ReactLoadingstateDemo2'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Loadingstate = __webpack_require__(2);

	var _Loadingstate2 = _interopRequireDefault(_Loadingstate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Loadingstate2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _beeButton = __webpack_require__(5);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		/**
	  * @title loading时间
	  */
		loadingTime: _react.PropTypes.string,
		/**
	  * @title loading时的文字
	  */
		loadingText: _react.PropTypes.string

	};

	var defaultProps = {
		loadingTime: '300',
		loadingText: 'loading'
	};

	var clsPrefix = 'u-button';

	var Loadingstate = function (_Component) {
		_inherits(Loadingstate, _Component);

		function Loadingstate(props) {
			_classCallCheck(this, Loadingstate);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props));

			_this.state = {
				clickFlag: false,
				loadingText: _this.props.children
			};
			return _this;
		}
		/**
	  * 手动触发修改状态
	  */


		Loadingstate.prototype.handleClick = function handleClick() {
			this.setState({ clickFlag: true, loadingText: this.props.loadingText });
			/**
	   * 设置定时器 根据参数时间 设定定时时间 而去改变状态
	   */
			this.timer = setInterval(function () {
				this.setState({ clickFlag: false, loadingText: this.props.children });
			}.bind(this), this.props.loadingTime);
		};
		// 组件移除


		Loadingstate.prototype.componentWillUnmount = function componentWillUnmount() {

			clearInterval(this.timer);
		};

		Loadingstate.prototype.render = function render() {
			var _props = this.props;
			var loadingTime = _props.loadingTime;
			var loadingText = _props.loadingText;

			var others = _objectWithoutProperties(_props, ['loadingTime', 'loadingText']);

			return _react2['default'].createElement(
				_beeButton2['default'],
				_extends({
					disabled: this.state.clickFlag,
					onClick: this.handleClick.bind(this)
				}, others),
				this.state.loadingText
			);
		};

		return Loadingstate;
	}(_react.Component);

	Loadingstate.propTypes = propTypes;
	Loadingstate.defaultProps = defaultProps;

	exports['default'] = Loadingstate;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg', '']),
	    /**
	     * @title 样式
	     */
	    style: _react.PropTypes.object,
	    /**
	     * @title 形状
	     */
	    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', '']),
	    /**
	    * @title 类型
	    */
	    type: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', '']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react.PropTypes.string,
	    /**
	     * @title 内容
	     */
	    children: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    size: '',
	    type: 'primary',
	    shape: '',
	    disabled: false,
	    className: '',
	    children: '',
	    htmlType: 'button'
	};

	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    typeMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left'
	},
	    clsPrefix = 'u-button';

	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _React$Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var _props = this.props;
	        var type = _props.type;
	        var shape = _props.shape;
	        var disabled = _props.disabled;
	        var className = _props.className;
	        var size = _props.size;
	        var children = _props.children;
	        var htmlType = _props.htmlType;

	        var others = _objectWithoutProperties(_props, ['type', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType']);

	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (typeMap[type]) {
	            clsObj[clsPrefix + '-' + typeMap[type]] = true;
	        }
	        var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classNames,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };

	    return Button;
	}(_react2["default"].Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports["default"] = Button;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);

</script>
<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="ReactLoadingstateDemo2">&lt;/div>
</code></pre>
</div>



<div class="examples-code"><pre><code>
import { Loadingstate } from 'tinper-bee';

function demo2 () {
    return (
        &lt;div className="demo-loading-state">
            &lt;Loadingstate loadingText="waiting..." loadingTime="4000">confirm&lt;/Loadingstate>
        &lt;/div>
    );
}


ReactDOM.render(demo2(), document.getElementById('ReactLoadingstateDemo2'));</code></pre>
</div>
</div>