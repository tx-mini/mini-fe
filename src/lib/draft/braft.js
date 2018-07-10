(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("draft-js"), require("draftjs-utils"), require("draft-convert"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "draft-js", "draftjs-utils", "draft-convert", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("draft-js"), require("draftjs-utils"), require("draft-convert"), require("react-dom")) : factory(root["react"], root["draft-js"], root["draftjs-utils"], root["draft-convert"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_69__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(60);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(33);

var _responsive2 = _interopRequireDefault(_responsive);

var _base = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call.apply(_ref, [this].concat(args))), _this), _this.alive = false, _this.responsiveResolveId = null, _this.dropDownHandlerElement = null, _this.dropDownContentElement = null, _this.componentId = _this.props.componentId || 'BRAFT-DROPDOWN-' + (0, _base.UniqueIndex)(), _this.state = {
      active: false,
      offset: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropDown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.alive = true;
      this.fixDropDownPosition();

      document.body.addEventListener('click', function (event) {
        _this2.registerClickEvent(event);
      });

      this.responsiveResolveId = _responsive2.default.resolve(function () {
        _this2.fixDropDownPosition();
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {

      if (!this.props.disabled && next.disabled) {
        this.hide();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevState) {

      if (!prevState.active && this.state.active) {
        this.fixDropDownPosition();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      document.body.removeEventListener('click', function (event) {
        _this3.registerClickEvent(event);
      });

      this.alive = false;
      _responsive2.default.unresolve(this.responsiveResolveId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          active = _state.active,
          offset = _state.offset;
      var _props = this.props,
          caption = _props.caption,
          htmlCaption = _props.htmlCaption,
          hoverTitle = _props.hoverTitle,
          disabled = _props.disabled,
          showDropDownArrow = _props.showDropDownArrow,
          arrowActive = _props.arrowActive,
          className = _props.className,
          children = _props.children,
          editorHeight = _props.editorHeight;


      disabled && (active = false);

      var dropDownContentInnerStyle = !isNaN(editorHeight) && editorHeight > 0 ? {
        maxHeight: editorHeight - 30 + 'px'
      } : {};

      return _react2.default.createElement(
        'div',
        {
          id: this.componentId,
          className: "Braft-dropdown " + (active ? "active " : "") + (disabled ? "disabled " : "") + className
        },
        htmlCaption ? _react2.default.createElement('button', {
          type: 'button',
          className: 'dropdown-handler',
          title: hoverTitle,
          'data-braft-component-id': this.componentId,
          dangerouslySetInnerHTML: htmlCaption ? { __html: htmlCaption } : null,
          ref: function ref(instance) {
            return _this4.dropDownHandlerElement = instance;
          }
        }) : _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'dropdown-handler',
            title: hoverTitle,
            'data-braft-component-id': this.componentId,
            ref: function ref(instance) {
              return _this4.dropDownHandlerElement = instance;
            }
          },
          _react2.default.createElement(
            'span',
            null,
            caption
          ),
          showDropDownArrow !== false ? _react2.default.createElement('i', { className: 'braft-icon-drop-down' }) : null
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'dropdown-content',
            style: { marginLeft: offset + 'px' },
            ref: function ref(instance) {
              return _this4.dropDownContentElement = instance;
            }
          },
          _react2.default.createElement('i', {
            style: { marginLeft: offset * -1 },
            className: 'dropdown-arrow' + (arrowActive ? ' active' : '')
          }),
          _react2.default.createElement(
            'div',
            {
              className: 'dropdown-content-inner',
              style: dropDownContentInnerStyle
            },
            children
          )
        )
      );
    }
  }, {
    key: 'fixDropDownPosition',
    value: function fixDropDownPosition() {

      var offset = 0;
      var viewRect = null;

      if (this.props.viewWrapper) {
        viewRect = document.querySelector(this.props.viewWrapper).getBoundingClientRect();
      } else {
        viewRect = document.body.getBoundingClientRect();
      }

      var handlerRect = this.dropDownHandlerElement.getBoundingClientRect();
      var contentRect = this.dropDownContentElement.getBoundingClientRect();
      var right = handlerRect.right - handlerRect.width / 2 + contentRect.width / 2;
      var left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2;

      right = viewRect.right - right;
      left = left - viewRect.left;

      if (right < 10) {
        offset = right - 10;
      } else if (left < 10) {
        offset = left * -1 + 10;
      }

      offset !== this.state.offset && this.setState({ offset: offset });
    }
  }, {
    key: 'registerClickEvent',
    value: function registerClickEvent(event) {
      var autoHide = this.props.autoHide;

      var active = false;

      if (event.target.dataset.braftComponentId === this.componentId) {
        active = event.target.dataset.keepActive ? true : !this.state.active;
      } else if (autoHide === false) {
        active = this.state.active;
      }

      this.alive && this.setState({ active: active });
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({
        active: true
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({
        active: false
      });
    }
  }]);

  return DropDown;
}(_react2.default.Component);

exports.default = DropDown;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var UniqueIndex = exports.UniqueIndex = function UniqueIndex() {

  if (isNaN(window.__BRAFT_UNIQUE_INDEX__)) {
    window.__BRAFT_UNIQUE_INDEX__ = 1;
  } else {
    window.__BRAFT_UNIQUE_INDEX__ += 1;
  }

  return window.__BRAFT_UNIQUE_INDEX__;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(61);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(69);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _base = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.active = false, _this.componentId = 'BRAFT-MODAL-' + (0, _base.UniqueIndex)(), _this.handleTransitionEnd = function () {

      if (!_this.rootElement || !_this.rootElement.classList) {
        return false;
      }

      if (!_this.rootElement.classList.contains('active')) {
        _reactDom2.default.unmountComponentAtNode(_this.rootElement) && _this.rootElement.parentNode.removeChild(_this.rootElement);
      }
    }, _this.handleCancel = function () {
      _this.props.closeOnCancel && _this.close();
      _this.props.onCancel && _this.props.onCancel();
    }, _this.handleConfirm = function () {
      _this.props.closeOnConfirm && _this.close();
      _this.props.onConfirm && _this.props.onConfirm();
    }, _this.close = function () {
      _this.unrenderComponent();
      _this.props.onClose && _this.props.onClose();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      if (this.props.visible) {
        this.active = true;
        this.renderComponent(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {

      if (this.props.visible && !next.visible) {
        this.unrenderComponent();
      } else if (this.props.visible || next.visible) {
        this.active = true;
        this.renderComponent(next);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'unrenderComponent',
    value: function unrenderComponent() {
      this.active = false;
      this.activeId && window.clearImmediate(this.activeId);
      if (this.rootElement && this.rootElement.classList) {
        this.rootElement.classList.remove('active');
      }
    }
  }, {
    key: 'renderComponent',
    value: function renderComponent(props) {
      var _this2 = this;

      if (!this.active) {
        return false;
      }

      var title = props.title,
          className = props.className,
          width = props.width,
          height = props.height,
          children = props.children,
          confirmable = props.confirmable,
          showCancel = props.showCancel,
          showConfirm = props.showConfirm,
          showClose = props.showClose,
          cancelText = props.cancelText,
          confirmText = props.confirmText,
          bottomText = props.bottomText,
          language = props.language;


      typeof showCancel === 'undefined' && (showCancel = true);
      typeof showClose === 'undefined' && (showClose = true);
      typeof showConfirm === 'undefined' && (showConfirm = true);

      var childComponent = _react2.default.createElement(
        'div',
        { className: "braft-modal " + (className || '') },
        _react2.default.createElement('div', { className: 'braft-modal-mask' }),
        _react2.default.createElement(
          'div',
          { onTransitionEnd: this.handleTransitionEnd, style: { width: width, height: height }, className: 'braft-modal-content' },
          _react2.default.createElement(
            'div',
            { className: 'braft-modal-header' },
            _react2.default.createElement(
              'h3',
              { className: 'braft-modal-caption' },
              title
            ),
            showClose && _react2.default.createElement(
              'button',
              { type: 'button', onClick: this.close, className: 'braft-modal-close-button' },
              _react2.default.createElement('i', { className: 'braft-icon-close' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'braft-modal-body' },
            children
          ),
          _react2.default.createElement(
            'div',
            { className: 'braft-modal-footer' },
            _react2.default.createElement(
              'div',
              { className: 'braft-modal-addon-text' },
              bottomText
            ),
            _react2.default.createElement(
              'div',
              { className: 'braft-modal-buttons' },
              showCancel && _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.handleCancel, className: 'braft-modal-cancel' },
                cancelText || language.base.cancel
              ),
              showConfirm && _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.handleConfirm, className: "braft-modal-confirm " + (!confirmable ? 'disabled' : '') },
                confirmText || language.base.confirm
              )
            )
          )
        )
      );

      this.rootElement = document.querySelector('#' + this.componentId);

      if (!this.rootElement) {
        this.rootElement = document.createElement('div');
        this.rootElement.id = this.componentId;
        this.rootElement.className = 'braft-modal-root';
        document.body.appendChild(this.rootElement);
      }

      _reactDom2.default.render(childComponent, this.rootElement);

      this.activeId = window.setImmediate(function () {
        _this2.rootElement.classList.add('active');
      });
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;
var showModal = exports.showModal = function showModal(props) {

  var host = document.createElement('div');
  host.style.display = 'none';
  document.body.appendChild(host);

  var close = function close() {
    _reactDom2.default.unmountComponentAtNode(host) && host.parentNode.removeChild(host);
  };

  var onConfirm = function onConfirm() {
    close();
    props.onConfirm && props.onConfirm();
  };

  var onCancel = function onCancel() {
    close();
    props.onCancel && props.onCancel();
  };

  var onClose = function onClose() {
    close();
    props.onClose && props.onClose();
  };

  var extProps = {
    onConfirm: onConfirm, onCancel: onCancel, onClose: onClose,
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true
  };

  var modalInstance = _reactDom2.default.render(_react2.default.createElement(Modal, _extends({}, props, extProps)), host);
  modalInstance.destroy = close;
  modalInstance.update = modalInstance.renderComponent;

  return modalInstance;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var namedColors = {
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgreen": "#006400",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred ": "#cd5c5c",
  "indigo": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgrey": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370d8",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#d87093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
};

var getHexColor = exports.getHexColor = function getHexColor(color) {

  color = color.replace('color:', '').replace(';', '').replace(' ', '');

  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
    return color;
  } else if (namedColors[color]) {
    return namedColors[color];
  } else if (color.indexOf('rgb') === 0) {

    var rgbArray = color.split(',');
    var convertedColor = rgbArray.length < 3 ? null : '#' + [rgbArray[0], rgbArray[1], rgbArray[2]].map(function (x) {
      var hex = parseInt(x.replace(/\D/g, ''), 10).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');

    return (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(convertedColor) ? convertedColor : null
    );
  } else {
    return null;
  }
};

var detectColorsFromHTML = exports.detectColorsFromHTML = function detectColorsFromHTML(html) {

  return typeof html !== 'string' ? [] : (html.match(/color:[^;]{3,24};/g) || []).map(getHexColor).filter(function (color) {
    return color;
  });
};

var detectColorsFromRaw = exports.detectColorsFromRaw = function detectColorsFromRaw(raw) {

  var result = [];

  if (!raw || !raw.blocks || !raw.blocks.length) {
    return result;
  }

  raw.blocks.forEach(function (block) {
    if (block && block.inlineStyleRanges && block.inlineStyleRanges.length) {
      block.inlineStyleRanges.forEach(function (inlineStyle) {
        if (inlineStyle.style && inlineStyle.style.indexOf('COLOR-') >= 0) {
          result.push('#' + inlineStyle.style.split('COLOR-')[1]);
        }
      });
    }
  });

  return result.filter(function (color) {
    return color;
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(62);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var active = props.active,
      _onClick = props.onClick,
      className = props.className;


  return _react2.default.createElement('div', { onClick: function onClick() {
      return _onClick();
    }, className: "switch-button " + className + (active ? ' active' : '') });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blocks = exports.getHeadings = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHeadings = exports.getHeadings = function getHeadings(lang) {
  return [{
    key: 'header-one',
    title: lang.controls.header + ' 1',
    text: _react2.default.createElement(
      'h1',
      null,
      lang.controls.header,
      ' 1'
    ),
    type: 'block-type',
    command: 'header-one'
  }, {
    key: 'header-two',
    title: lang.controls.header + ' 2',
    text: _react2.default.createElement(
      'h2',
      null,
      lang.controls.header,
      ' 2'
    ),
    type: 'block-type',
    command: 'header-two'
  }, {
    key: 'header-three',
    title: lang.controls.header + ' 3',
    text: _react2.default.createElement(
      'h3',
      null,
      lang.controls.header,
      ' 3'
    ),
    type: 'block-type',
    command: 'header-three'
  }, {
    key: 'header-four',
    title: lang.controls.header + ' 4',
    text: _react2.default.createElement(
      'h4',
      null,
      lang.controls.header,
      ' 4'
    ),
    type: 'block-type',
    command: 'header-four'
  }, {
    key: 'header-five',
    title: lang.controls.header + ' 5',
    text: _react2.default.createElement(
      'h5',
      null,
      lang.controls.header,
      ' 5'
    ),
    type: 'block-type',
    command: 'header-five'
  }, {
    key: 'header-six',
    title: lang.controls.header + ' 6',
    text: _react2.default.createElement(
      'h6',
      null,
      lang.controls.header,
      ' 6'
    ),
    type: 'block-type',
    command: 'header-six'
  }, {
    key: 'unstyled',
    title: lang.controls.normal,
    text: lang.controls.normal,
    type: 'block-type',
    command: 'unstyled'
  }];
};

var blocks = exports.blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(48);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _controls = __webpack_require__(32);

var _controls2 = _interopRequireDefault(_controls);

var _LinkEditor = __webpack_require__(25);

var _LinkEditor2 = _interopRequireDefault(_LinkEditor);

var _Headings = __webpack_require__(23);

var _Headings2 = _interopRequireDefault(_Headings);

var _TextColor = __webpack_require__(28);

var _TextColor2 = _interopRequireDefault(_TextColor);

var _FontSize = __webpack_require__(22);

var _FontSize2 = _interopRequireDefault(_FontSize);

var _LineHeight = __webpack_require__(24);

var _LineHeight2 = _interopRequireDefault(_LineHeight);

var _FontFamily = __webpack_require__(21);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _TextAlign = __webpack_require__(27);

var _TextAlign2 = _interopRequireDefault(_TextAlign);

var _EmojiPicker = __webpack_require__(20);

var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);

var _MediaPicker = __webpack_require__(26);

var _MediaPicker2 = _interopRequireDefault(_MediaPicker);

var _letterSpacing = __webpack_require__(30);

var _letterSpacing2 = _interopRequireDefault(_letterSpacing);

var _indent = __webpack_require__(29);

var _indent2 = _interopRequireDefault(_indent);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _Modal = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlBar = function (_React$Component) {
  _inherits(ControlBar, _React$Component);

  function ControlBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ControlBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call.apply(_ref, [this].concat(args))), _this), _this.mediaPicker = null, _this.videoPicker = null, _this.audioPicker = null, _this.extendedModals = {}, _this.showMediaPicker = function () {
      _this.mediaPicker.show();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ControlBar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      var _props = this.props,
          extendControls = _props.extendControls,
          language = _props.language;


      extendControls.forEach(function (item) {
        if (item.type === 'modal') {
          if (item.modal && item.modal.id && _this2.extendedModals[item.modal.id]) {
            _this2.extendedModals[item.modal.id].update(_extends({}, item.modal, { language: language }));
          }
        }
      });
    }
  }, {
    key: 'getControlItemClassName',
    value: function getControlItemClassName(data) {

      var className = 'control-item button';
      var type = data.type,
          command = data.command;


      if (type === 'inline-style' && this.props.editor.selectionHasInlineStyle(command)) {
        className += ' active';
      } else if (type === 'block-type' && this.props.editor.getSelectionBlockType() === command) {
        className += ' active';
      }

      return className;
    }
  }, {
    key: 'applyControl',
    value: function applyControl(command, type) {
      var _this3 = this;

      if (type === 'inline-style') {
        this.props.editor.toggleSelectionInlineStyle(command);
      } else if (type === 'block-type') {
        this.props.editor.toggleSelectionBlockType(command);
      } else if (type === 'editor-state-method') {
        this.props.editor[command] && this.props.editor[command]();
      }

      window.setImmediate(function () {
        _this3.props.editor.focus();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          editor = _props2.editor,
          controls = _props2.controls,
          media = _props2.media,
          extendControls = _props2.extendControls,
          language = _props2.language,
          colors = _props2.colors,
          tempColors = _props2.tempColors,
          fontSizes = _props2.fontSizes,
          fontFamilies = _props2.fontFamilies,
          emojis = _props2.emojis,
          viewWrapper = _props2.viewWrapper,
          lineHeights = _props2.lineHeights,
          letterSpacings = _props2.letterSpacings,
          editorHeight = _props2.editorHeight,
          textAlignOptions = _props2.textAlignOptions,
          allowSetTextBackgroundColor = _props2.allowSetTextBackgroundColor,
          indents = _props2.indents;

      var currentBlockType = editor.getSelectionBlockType();
      var supportedControls = (0, _controls2.default)(language);
      var commonProps = { editor: editor, editorHeight: editorHeight, language: language, viewWrapper: viewWrapper };
      var renderedExtendControls = extendControls.map(function (item, index) {
        if (item.type === 'split') {
          return _react2.default.createElement('span', { key: controls.length * 2 + index, className: 'split-line' });
        } else if (item.type === 'dropdown') {
          var disabled = item.disabled,
              autoHide = item.autoHide,
              html = item.html,
              text = item.text,
              className = item.className,
              showDropDownArrow = item.showDropDownArrow,
              hoverTitle = item.hoverTitle,
              component = item.component,
              arrowActive = item.arrowActive,
              ref = item.ref;

          return _react2.default.createElement(
            _DropDown2.default,
            {
              key: index,
              className: "control-item dropdown " + className,
              caption: text,
              editorHeight: editorHeight,
              htmlCaption: html,
              showDropDownArrow: showDropDownArrow,
              viewWrapper: viewWrapper,
              hoverTitle: hoverTitle,
              arrowActive: arrowActive,
              autoHide: autoHide,
              disabled: disabled,
              ref: ref
            },
            component
          );
        } else if (item.type === 'modal') {
          return _react2.default.createElement(
            'button',
            {
              type: 'button',
              key: controls.length * 2 + index,
              title: item.hoverTitle,
              className: 'control-item button ' + item.className,
              dangerouslySetInnerHTML: item.html ? { __html: item.html } : null,
              onClick: function onClick(event) {
                if (item.modal && item.modal.id) {
                  if (_this4.extendedModals[item.modal.id]) {
                    _this4.extendedModals[item.modal.id].active = true;
                    _this4.extendedModals[item.modal.id].update(_extends({}, item.modal, { language: language }));
                  } else {
                    _this4.extendedModals[item.modal.id] = (0, _Modal.showModal)(_extends({}, item.modal, { language: language }));
                    item.modal.onCreate && item.modal.onCreate(_this4.extendedModals[item.modal.id]);
                  }
                }
                item.onClick && item.onClick(event);
              }
            },
            !item.html ? item.text : null
          );
        } else if (item.type === 'component') {
          return _react2.default.createElement(
            'div',
            {
              key: controls.length * 2 + index,
              className: 'control-item component-wrapper ' + item.className
            },
            item.component
          );
        } else {
          return _react2.default.createElement(
            'button',
            {
              type: 'button',
              key: controls.length * 2 + index,
              title: item.hoverTitle,
              className: 'control-item button ' + item.className,
              dangerouslySetInnerHTML: item.html ? { __html: item.html } : null,
              onClick: function onClick(event) {
                return item.onClick && item.onClick(event);
              }
            },
            !item.html ? item.text : null
          );
        }
      });

      return _react2.default.createElement(
        'div',
        { className: 'BraftEditor-controlBar' },
        _react2.default.createElement(_MediaPicker2.default, _extends({
          media: media,
          ref: function ref(instance) {
            return _this4.mediaPicker = instance;
          },
          mediaLibrary: editor.mediaLibrary
        }, commonProps)),
        controls.map(function (item, index) {
          if (item.toLowerCase() === 'split') {
            return _react2.default.createElement('span', { key: index, className: 'split-line' });
          }
          var controlItem = supportedControls.find(function (subItem) {
            return subItem.key.toLowerCase() === item.toLowerCase();
          });
          if (!controlItem) {
            return null;
          }
          if (controlItem.type === 'headings') {
            return _react2.default.createElement(_Headings2.default, _extends({
              key: index,
              current: currentBlockType,
              onChange: function onChange(command) {
                return _this4.applyControl(command, 'block-type');
              }
            }, commonProps));
          } else if (controlItem.type === 'text-color') {
            return _react2.default.createElement(_TextColor2.default, _extends({
              key: index,
              colors: colors,
              tempColors: tempColors,
              allowSetTextBackgroundColor: allowSetTextBackgroundColor
            }, commonProps));
          } else if (controlItem.type === 'font-size') {
            return _react2.default.createElement(_FontSize2.default, _extends({
              key: index,
              fontSizes: fontSizes,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'line-height') {
            return _react2.default.createElement(_LineHeight2.default, _extends({
              key: index,
              lineHeights: lineHeights,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'letter-spacing') {
            return _react2.default.createElement(_letterSpacing2.default, _extends({
              key: index,
              letterSpacings: letterSpacings,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'indent') {
            return _react2.default.createElement(_indent2.default, _extends({
              key: index,
              indents: indents,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'font-family') {
            return _react2.default.createElement(_FontFamily2.default, _extends({
              key: index,
              fontFamilies: fontFamilies,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'emoji') {
            return _react2.default.createElement(_EmojiPicker2.default, _extends({
              key: index,
              emojis: emojis,
              defaultCaption: controlItem.text
            }, commonProps));
          } else if (controlItem.type === 'link') {
            return _react2.default.createElement(_LinkEditor2.default, _extends({
              key: index
            }, commonProps));
          } else if (controlItem.type === 'text-align') {
            return _react2.default.createElement(_TextAlign2.default, _extends({
              key: index,
              textAlignOptions: textAlignOptions
            }, commonProps));
          } else if (controlItem.type === 'media') {
            if (!media.image && !media.video && !media.audio) {
              return null;
            }
            return _react2.default.createElement(
              'button',
              {
                type: 'button',
                key: index,
                title: controlItem.title,
                className: 'control-item button',
                onClick: _this4.showMediaPicker
              },
              controlItem.text
            );
          } else {
            var buttonClassName = _this4.getControlItemClassName({
              type: controlItem.type,
              command: controlItem.command
            });
            return _react2.default.createElement(
              'button',
              {
                type: 'button',
                key: index,
                title: controlItem.title,
                className: buttonClassName,
                onClick: function onClick() {
                  return _this4.applyControl(controlItem.command, controlItem.type);
                }
              },
              controlItem.text
            );
          }
        }),
        renderedExtendControls
      );
    }
  }]);

  return ControlBar;
}(_react2.default.Component);

exports.default = ControlBar;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromHTMLConfig = exports.getToHTMLConfig = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _maps = __webpack_require__(8);

var _colors = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blockTypes = Object.keys(_maps.blocks);
var blockNames = blockTypes.map(function (key) {
  return _maps.blocks[key];
});

var convertAtomicBlock = function convertAtomicBlock(block, contentState) {

  if (!block || !block.key) {
    return _react2.default.createElement('p', null);
  }

  var contentBlock = contentState.getBlockForKey(block.key);

  if (!contentBlock) {
    return _react2.default.createElement('p', null);
  }

  var entityKey = contentBlock.getEntityAt(0);

  if (!entityKey) {
    return _react2.default.createElement('p', null);
  }

  var entity = contentState.getEntity(entityKey);
  var mediaType = entity.getType().toLowerCase();

  var _block$data = block.data,
      float = _block$data.float,
      alignment = _block$data.alignment;

  var _entity$getData = entity.getData(),
      url = _entity$getData.url,
      link = _entity$getData.link,
      link_target = _entity$getData.link_target,
      width = _entity$getData.width,
      height = _entity$getData.height,
      meta = _entity$getData.meta;

  if (mediaType === 'image') {

    var imageWrapStyle = {};
    var styledClassName = '';

    if (float) {
      imageWrapStyle.float = float;
      styledClassName += ' float-' + float;
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment;
      styledClassName += ' align-' + alignment;
    }

    if (link) {
      return _react2.default.createElement(
        'div',
        { className: "media-wrap image-wrap" + styledClassName, style: imageWrapStyle },
        _react2.default.createElement(
          'a',
          { style: { display: 'inline-block' }, href: link, target: link_target },
          _react2.default.createElement('img', _extends({}, meta, { src: url, width: width, height: height, style: { width: width, height: height } }))
        )
      );
    } else {
      return _react2.default.createElement(
        'div',
        { className: "media-wrap image-wrap" + styledClassName, style: imageWrapStyle },
        _react2.default.createElement('img', _extends({}, meta, { src: url, width: width, height: height, style: { width: width, height: height } }))
      );
    }
  } else if (mediaType === 'audio') {
    return _react2.default.createElement(
      'div',
      { className: 'media-wrap audio-wrap' },
      _react2.default.createElement('audio', _extends({ controls: true }, meta, { src: url }))
    );
  } else if (mediaType === 'video') {
    return _react2.default.createElement(
      'div',
      { className: 'media-wrap video-wrap' },
      _react2.default.createElement('video', _extends({ controls: true }, meta, { src: url, width: width, height: height }))
    );
  } else if (mediaType === 'embed') {
    return _react2.default.createElement(
      'div',
      { className: 'media-wrap embed-wrap' },
      _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: url } })
    );
  } else if (mediaType === 'hr') {
    return _react2.default.createElement('hr', null);
  } else {
    return _react2.default.createElement('p', null);
  }
};

var styleToHTML = function styleToHTML(props) {
  return function (style) {

    style = style.toLowerCase();

    if (style === 'strikethrough') {
      return _react2.default.createElement('span', { style: { textDecoration: 'line-through' } });
    } else if (style === 'superscript') {
      return _react2.default.createElement('sup', null);
    } else if (style === 'subscript') {
      return _react2.default.createElement('sub', null);
    } else if (style.indexOf('color-') === 0) {
      return _react2.default.createElement('span', { style: { color: '#' + style.split('-')[1] } });
    } else if (style.indexOf('bgcolor-') === 0) {
      return _react2.default.createElement('span', { style: { backgroundColor: '#' + style.split('-')[1] } });
    } else if (style.indexOf('fontsize-') === 0) {
      return _react2.default.createElement('span', { style: { fontSize: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('lineheight-') === 0) {
      return _react2.default.createElement('span', { style: { lineHeight: style.split('-')[1] } });
    } else if (style.indexOf('letterspacing-') === 0) {
      return _react2.default.createElement('span', { style: { letterSpacing: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('indent-') === 0) {
      return _react2.default.createElement('span', { style: { paddingLeft: style.split('-')[1] + 'px', paddingRight: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('fontfamily-') === 0) {
      var fontFamily = props.fontFamilies.find(function (item) {
        return item.name.toLowerCase() === style.split('-')[1];
      });
      if (!fontFamily) return;
      return _react2.default.createElement('span', { style: { fontFamily: fontFamily.family } });
    }
  };
};

var blockToHTML = function blockToHTML(contentState) {
  return function (block) {

    var result = null;
    var blockStyle = "";

    var blockType = block.type.toLowerCase();
    var textAlign = block.data.textAlign;


    if (textAlign) {
      blockStyle = ' style="text-align:' + textAlign + ';"';
    }

    if (blockType === 'atomic') {
      return convertAtomicBlock(block, contentState);
    } else if (blockType === 'code-block') {

      var previousBlock = contentState.getBlockBefore(block.key);
      var nextBlock = contentState.getBlockAfter(block.key);
      var previousBlockType = previousBlock && previousBlock.getType();
      var nextBlockType = nextBlock && nextBlock.getType();

      if (previousBlockType !== 'code-block' && nextBlockType !== 'code-block') {
        return {
          start: '<pre>',
          end: '</pre>'
        };
      }
      if (previousBlockType !== 'code-block') {
        return {
          start: '<pre>',
          end: '<br/>'
        };
      }
      if (nextBlockType !== 'code-block') {
        return {
          start: '',
          end: '</pre>'
        };
      }

      return {
        start: '',
        end: '<br/>'
      };
    } else if (_maps.blocks[blockType]) {
      return {
        start: '<' + _maps.blocks[blockType] + blockStyle + '>',
        end: '</' + _maps.blocks[blockType] + '>'
      };
    } else if (blockType === 'unordered-list-item') {
      return {
        start: '<li' + blockStyle + '>',
        end: '</li>',
        nest: _react2.default.createElement('ul', null)
      };
    } else if (blockType === 'ordered-list-item') {
      return {
        start: '<li' + blockStyle + '>',
        end: '</li>',
        nest: _react2.default.createElement('ol', null)
      };
    }
  };
};

var entityToHTML = function entityToHTML(entity, originalText) {

  var result = originalText;
  var entityType = entity.type.toLowerCase();

  if (entityType === 'link') {
    return _react2.default.createElement(
      'a',
      { href: entity.data.href, target: entity.data.target },
      originalText
    );
  } else if (entityType === 'color') {
    return _react2.default.createElement(
      'span',
      { style: { color: entity.data.color } },
      originalText
    );
  } else if (entityType === 'bg-color') {
    return _react2.default.createElement(
      'span',
      { style: { backgroundColor: entity.data.color } },
      originalText
    );
  }
};

var htmlToStyle = function htmlToStyle(props) {
  return function (nodeName, node, currentStyle) {

    if (!node || !node.style) {
      return currentStyle;
    }

    var newStyle = currentStyle;

    for (var i = 0; i < node.style.length; i++) {
      if (nodeName === 'span' && node.style[i] === 'color') {
        var color = (0, _colors.getHexColor)(node.style.color);
        newStyle = color ? newStyle.add('COLOR-' + color.replace('#', '').toUpperCase()) : newStyle;
      } else if (nodeName === 'span' && node.style[i] === 'background-color') {
        var _color = (0, _colors.getHexColor)(node.style.backgroundColor);
        newStyle = _color ? newStyle.add('BGCOLOR-' + _color.replace('#', '').toUpperCase()) : newStyle;
      } else if (nodeName === 'span' && node.style[i] === 'font-size') {
        newStyle = newStyle.add('FONTSIZE-' + parseInt(node.style.fontSize, 10));
      } else if (nodeName === 'span' && node.style[i] === 'line-height') {
        newStyle = newStyle.add('LINEHEIGHT-' + node.style.lineHeight);
      } else if (nodeName === 'span' && node.style[i] === 'letter-spacing' && !isNaN(node.style.letterSpacing.replace('px', ''))) {
        newStyle = newStyle.add('LETTERSPACING-' + parseInt(node.style.letterSpacing, 10));
      } else if (nodeName === 'span' && (node.style[i] === 'padding-left' || node.style[i] === 'padding-right')) {
        newStyle = newStyle.add('INDENT-' + parseInt(node.style.paddingLeft, 10));
      } else if (nodeName === 'span' && node.style[i] === 'text-decoration' && node.style.textDecoration === 'line-through') {
        newStyle = newStyle.add('STRIKETHROUGH');
      } else if (nodeName === 'span' && node.style[i] === 'font-family') {
        var fontFamily = props.fontFamilies.find(function (item) {
          return item.family.toLowerCase() === node.style.fontFamily.toLowerCase();
        });
        if (!fontFamily) continue;
        newStyle = newStyle.add('FONTFAMILY-' + fontFamily.name.toUpperCase());
      }
    }

    if (nodeName === 'sup') {
      newStyle = newStyle.add('SUPERSCRIPT');
    } else if (nodeName === 'sub') {
      newStyle = newStyle.add('SUBSCRIPT');
    }

    return newStyle;
  };
};

var htmlToEntity = function htmlToEntity(nodeName, node, createEntity) {
  var alt = node.alt,
      title = node.title,
      id = node.id,
      controls = node.controls,
      autoplay = node.autoplay,
      loop = node.loop,
      poster = node.poster;

  var meta = {};

  id && (meta.id = id);
  alt && (meta.alt = alt);
  title && (meta.title = title);
  controls && (meta.controls = controls);
  autoplay && (meta.autoPlay = autoplay);
  loop && (meta.loop = loop);
  poster && (meta.poster = poster);

  if (nodeName === 'a' && !node.querySelectorAll('img').length) {
    var href = node.href,
        target = node.target;

    return createEntity('LINK', 'MUTABLE', { href: href, target: target });
  } else if (nodeName === 'audio') {
    return createEntity('AUDIO', 'IMMUTABLE', { url: node.src, meta: meta });
  } else if (nodeName === 'video') {
    return createEntity('VIDEO', 'IMMUTABLE', { url: node.src, meta: meta });
  } else if (nodeName === 'img') {

    var parentNode = node.parentNode;
    var entityData = { meta: meta };
    var _node$style = node.style,
        width = _node$style.width,
        height = _node$style.height;


    entityData.url = node.src;
    width && (entityData.width = width);
    height && (entityData.height = height);

    if (parentNode.nodeName.toLowerCase() === 'a') {
      entityData.link = parentNode.href;
      entityData.link_target = parentNode.target;
    }

    return createEntity('IMAGE', 'IMMUTABLE', entityData);
  } else if (nodeName === 'hr') {
    return createEntity('HR', 'IMMUTABLE', {});
  } else if (node.parentNode && node.parentNode.classList.contains('embed-wrap')) {

    var embedContent = node.innerHTML || node.outerHTML;

    if (embedContent) {
      return createEntity('EMBED', 'IMMUTABLE', {
        url: embedContent
      });
    }
  }
};

var htmlToBlock = function htmlToBlock(nodeName, node) {

  var nodeStyle = node.style || {};

  if (node.classList && node.classList.contains('media-wrap')) {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    };
  } else if (nodeName === 'img') {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    };
  } else if (nodeName === 'hr') {

    return {
      type: 'atomic',
      data: {}
    };
  } else if (nodeStyle.textAlign && blockNames.indexOf(nodeName) > -1) {

    return {
      type: blockTypes[blockNames.indexOf(nodeName)],
      data: {
        textAlign: nodeStyle.textAlign
      }
    };
  }
};

var getToHTMLConfig = exports.getToHTMLConfig = function getToHTMLConfig(props) {

  return {
    styleToHTML: styleToHTML(props),
    entityToHTML: entityToHTML,
    blockToHTML: blockToHTML(props.contentState)
  };
};

var getFromHTMLConfig = exports.getFromHTMLConfig = function getFromHTMLConfig(props) {

  return {
    htmlToStyle: htmlToStyle(props),
    htmlToEntity: htmlToEntity,
    htmlToBlock: htmlToBlock
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = __webpack_require__(4);

// TODO
// 允许自定义的快捷键设置

exports.default = function (event) {

  if (event.keyCode === 83 && (_draftJs.KeyBindingUtil.hasCommandModifier(event) || _draftJs.KeyBindingUtil.isCtrlKeyCommand(event))) {
    return 'braft-save';
  }

  return (0, _draftJs.getDefaultKeyBinding)(event);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  height: 500,
  language: 'zh',
  controls: ['undo', 'redo', 'split', 'font-size', 'font-family', 'line-height', 'letter-spacing', 'indent', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'split', 'headings', 'list_ul', 'list_ol', 'blockquote', 'code', 'split', 'link', 'split', 'hr', 'split', 'media', 'split', 'clear'],
  excludeControls: [],
  tabIndents: 2,
  forceNewLine: false,
  textAlignOptions: ['left', 'center', 'right', 'justify'],
  allowSetTextBackgroundColor: true,
  letterSpacings: [0, 2, 4, 6],
  indents: [0, 14, 21, 28],
  extendControls: [],
  media: {
    allowPasteImage: true,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    sourceFn: null,
    onRemove: null,
    onChange: null,
    onInsert: null,
    externalMedias: {
      audio: true,
      video: true,
      image: true,
      embed: true
    }
  },
  imageControls: {
    floatLeft: false,
    floatRight: false,
    alignLeft: false,
    alignCenter: false,
    alignRight: false,
    link: false,
    size: false,
    remove: false,
    custom: {
      fn: function fn(img, key) {
        console.log(img, key);
      }
    }
  },
  colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff', '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784', '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'],
  lineHeights: ['1', '1.2', '1.5', '1.75', '2', '2.5', '3', '4'],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 30, 32, 36, 40, 48, 56, 64, 72, 96, 120, 144],
  fontFamilies: [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
  }],
  emojis: ["🤣", "🙌", "💚", "💛", "👏", "😉", "💯", "💕", "💞", "💘", "💙", "💝", "🖤", "💜", "❤️", "😍", "😻", "💓", "💗", "😋", "😇", "😂", "😹", "😘", "💖", "😁", "😀", "🤞", "😲", "😄", "😊", "👍", "😌", "😃", "😅", "✌️", "🤗", "💋", "😗", "😽", "😚", "🤠", "😙", "😺", "👄", "😸", "😏", "😼", "👌", "😎", "😆", "😛", "🙏", "🤝", "🙂", "🤑", "😝", "😐", "😑", "🤤", "😤", "🙃", "🤡", "😶", "😪", "😴", "😵", "😓", "👊", "😦", "😷", "🤐", "😜", "🤓", "👻", "😥", "🙄", "🤔", "🤒", "🙁", "😔", "😯", "☹️", "☠️", "😰", "😩", "😖", "😕", "😒", "😣", "😢", "😮", "😿", "🤧", "😫", "🤥", "😞", "😬", "👎", "💀", "😳", "😨", "🤕", "🤢", "😱", "😭", "😠", "😈", "😧", "💔", "😟", "🙀", "💩", "👿", "😡", "😾", "🖕"],
  extendAtomics: []
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(4);

var _draftjsUtils = __webpack_require__(6);

var _colors = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorController = function (_React$Component) {
  _inherits(EditorController, _React$Component);

  function EditorController() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditorController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditorController.__proto__ || Object.getPrototypeOf(EditorController)).call.apply(_ref, [this].concat(args))), _this), _this.applyChange = function (editorState) {
      _this.onChange(editorState);
      return _this;
    }, _this.selectionCollapsed = function () {
      return _this.selectionState.isCollapsed();
    }, _this.selectBlock = function (block) {

      var blockKey = block.getKey();

      return _this.applyChange(_draftJs.EditorState.forceSelection(_this.editorState, new _draftJs.SelectionState({
        anchorKey: blockKey,
        anchorOffset: 0,
        focusKey: blockKey,
        focusOffset: block.getLength()
      })));
    }, _this.selectNextBlock = function (block) {
      var nextBlock = _this.contentState.getBlockAfter(block.getKey());
      return nextBlock ? _this.selectBlock(nextBlock) : _this.applyChange(_this.editorState);
    }, _this.removeBlock = function (block) {
      var lastSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


      var nextContentState = void 0,
          nextEditorState = void 0;
      var blockKey = block.getKey();

      nextContentState = _draftJs.Modifier.removeRange(_this.contentState, new _draftJs.SelectionState({
        anchorKey: blockKey,
        anchorOffset: 0,
        focusKey: blockKey,
        focusOffset: block.getLength()
      }), 'backward');

      nextContentState = _draftJs.Modifier.setBlockType(nextContentState, nextContentState.getSelectionAfter(), 'unstyled');
      nextEditorState = _draftJs.EditorState.push(_this.editorState, nextContentState, 'remove-range');
      nextEditorState = _draftJs.EditorState.forceSelection(nextEditorState, lastSelection || nextContentState.getSelectionAfter());

      return _this.applyChange(nextEditorState);
    }, _this.getSelectionBlock = function () {
      return _this.contentState.getBlockForKey(_this.selectionState.getAnchorKey());
    }, _this.setSelectionBlockData = function (blockData) {
      return _this.applyChange((0, _draftjsUtils.setBlockData)(_this.editorState, blockData));
    }, _this.getSelectionBlockData = function (name) {
      var blockData = _this.getSelectionBlock().getData();
      return name ? blockData.get(name) : blockData;
    }, _this.getSelectionBlockType = function () {
      return _this.getSelectionBlock().getType();
    }, _this.getSelectionText = function () {

      if (_this.selectionState.isCollapsed() || _this.getSelectionBlockType() === 'atomic') {
        return '';
      }

      var anchorKey = _this.selectionState.getAnchorKey();
      var currentContent = _this.editorState.getCurrentContent();
      var currentContentBlock = currentContent.getBlockForKey(anchorKey);
      var start = _this.selectionState.getStartOffset();
      var end = _this.selectionState.getEndOffset();

      return currentContentBlock.getText().slice(start, end);
    }, _this.toggleSelectionBlockType = function (blockType) {
      return _this.applyChange(_draftJs.RichUtils.toggleBlockType(_this.editorState, blockType));
    }, _this.getSelectionEntityData = function (type) {

      var entityKey = (0, _draftjsUtils.getSelectionEntity)(_this.editorState);
      if (entityKey) {
        var entity = _this.contentState.getEntity(entityKey);
        if (entity && entity.get('type') === type) {
          var _entity$getData = entity.getData(),
              href = _entity$getData.href,
              target = _entity$getData.target;

          return { href: href, target: target };
        } else {
          return {};
        }
      } else {
        return {};
      }
    }, _this.getSelectionInlineStyle = function () {
      return _this.editorState.getCurrentInlineStyle();
    }, _this.selectionHasInlineStyle = function (style) {
      return _this.getSelectionInlineStyle().has(style.toUpperCase());
    }, _this.toggleSelectionInlineStyle = function (style) {
      var stylesToBeRemoved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


      if (_this.selectionState.isCollapsed()) {
        return _this;
      }

      style = style.toUpperCase();
      stylesToBeRemoved = stylesToBeRemoved.filter(function (item) {
        return item !== style;
      });

      var currentInlineStyle = _this.getSelectionInlineStyle();
      var nextContentState = stylesToBeRemoved.length ? stylesToBeRemoved.reduce(function (contentState, item) {
        return _draftJs.Modifier.removeInlineStyle(contentState, _this.selectionState, item);
      }, _this.contentState) : _this.contentState;

      var nextEditorState = stylesToBeRemoved.length ? _draftJs.EditorState.push(_this.editorState, nextContentState, 'change-inline-style') : _this.editorState;
      return _this.applyChange(_draftJs.RichUtils.toggleInlineStyle(nextEditorState, style));
    }, _this.removeSelectionInlineStyles = function () {
      return _this.applyChange((0, _draftjsUtils.removeAllInlineStyles)(_this.editorState));
    }, _this.toggleSelectionAlignment = function (alignment) {
      return _this.setSelectionBlockData({
        textAlign: _this.getSelectionBlockData('textAlign') !== alignment ? alignment : undefined
      });
    }, _this.toggleSelectionColor = function (color) {
      return _this.toggleSelectionInlineStyle('COLOR-' + color.replace('#', ''), _this.colorList.map(function (item) {
        return 'COLOR-' + item.replace('#', '').toUpperCase();
      }));
    }, _this.toggleSelectionBackgroundColor = function (color) {
      return _this.toggleSelectionInlineStyle('BGCOLOR-' + color.replace('#', ''), _this.colorList.map(function (item) {
        return 'BGCOLOR-' + item.replace('#', '').toUpperCase();
      }));
    }, _this.toggleSelectionFontSize = function (fontSize) {
      return _this.toggleSelectionInlineStyle('FONTSIZE-' + fontSize, _this.fontSizeList.map(function (item) {
        return 'FONTSIZE-' + item;
      }));
    }, _this.toggleSelectionLineHeight = function (lineHeight) {
      return _this.toggleSelectionInlineStyle('LINEHEIGHT-' + lineHeight, _this.lineHeightList.map(function (item) {
        return 'LINEHEIGHT-' + item;
      }));
    }, _this.toggleSelectionFontFamily = function (fontFamily) {
      return _this.toggleSelectionInlineStyle('FONTFAMILY-' + fontFamily, _this.fontFamilyList.map(function (item) {
        return 'FONTFAMILY-' + item.name.toUpperCase();
      }));
    }, _this.toggleSelectionLetterSpacing = function (letterSpacing) {
      return _this.toggleSelectionInlineStyle('LETTERSPACING-' + letterSpacing, _this.letterSpacingList.map(function (item) {
        return 'LETTERSPACING-' + item;
      }));
    }, _this.toggleSelectionIndent = function (indent) {
      return _this.toggleSelectionInlineStyle('INDENT-' + indent, _this.indentList.map(function (item) {
        return 'INDENT-' + item;
      }));
    }, _this.insertHorizontalLine = function () {

      if (!_this.selectionState.isCollapsed() || _this.getSelectionBlockType() === 'atomic') {
        return _this;
      }

      var contentStateWithEntity = _this.editorState.getCurrentContent().createEntity('HR', 'IMMUTABLE', {});
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      var newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(_this.editorState, entityKey, ' ');

      return _this.applyChange(newEditorState);
    }, _this.toggleSelectionLink = function (href, target) {

      var entityData = { href: href, target: target };

      if (_this.selectionState.isCollapsed() || _this.getSelectionBlockType() === 'atomic') {
        return _this;
      }

      if (href === false) {
        _this.applyChange(_draftJs.RichUtils.toggleLink(_this.editorState, _this.selectionState, null));
        return _this;
      }

      if (href === null) {
        delete entityData.href;
      }

      try {

        var nextContentState = _this.contentState.createEntity('LINK', 'MUTABLE', entityData);
        var entityKey = nextContentState.getLastCreatedEntityKey();

        var nextEditorState = _draftJs.EditorState.set(_this.editorState, {
          currentContent: nextContentState
        });

        nextEditorState = _draftJs.RichUtils.toggleLink(nextEditorState, _this.selectionState, entityKey);
        nextEditorState = _draftJs.EditorState.forceSelection(nextEditorState, _this.selectionState.merge({
          anchorOffset: _this.selectionState.getEndOffset(),
          focusOffset: _this.selectionState.getEndOffset()
        }));

        nextEditorState = _draftJs.EditorState.push(nextEditorState, _draftJs.Modifier.insertText(nextEditorState.getCurrentContent(), nextEditorState.getSelection(), ' '), 'insert-text');

        return _this.applyChange(nextEditorState);
      } catch (error) {
        console.warn(error);
      }
    }, _this.insertText = function (text) {
      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


      var currentSelectedBlockType = _this.getSelectionBlockType();

      if (currentSelectedBlockType === 'atomic') {
        return _this;
      }

      if (!_this.selectionState.isCollapsed()) {
        return replace ? _this.applyChange(_draftJs.EditorState.push(_this.editorState, _draftJs.Modifier.replaceText(_this.contentState, _this.selectionState, text), 'replace-text')) : _this;
      } else {
        return _this.applyChange(_draftJs.EditorState.push(_this.editorState, _draftJs.Modifier.insertText(_this.contentState, _this.selectionState, text), 'insert-text'));
      }
    }, _this.replaceText = function (text) {
      return _this.insertText(text);
    }, _this.insertHTML = function (htmlString) {

      if (!htmlString) {
        return _this;
      }

      try {

        var rawContent = _this.convertHTML(htmlString);
        var blockMap = rawContent.blockMap;

        var tempColors = (0, _colors.detectColorsFromHTML)(htmlString);

        _this.addTempColors(tempColors);
        _this.requestFocus();

        return _this.focus().applyChange(_draftJs.EditorState.push(_this.editorState, _draftJs.Modifier.replaceWithFragment(_this.contentState, _this.selectionState, blockMap), 'insert-fragment'));
      } catch (error) {
        return _this;
      }
    }, _this.insertMedias = function () {
      var medias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


      if (!medias.length) {
        return _this;
      }

      if (_this.getSelectionBlockType() === 'atomic') {
        _this.selectNextBlock(_this.getSelectionBlock());
      }

      var newEditorState = medias.reduce(function (editorState, media) {
        var url = media.url,
            name = media.name,
            type = media.type,
            meta = media.meta;

        var contentStateWithEntity = editorState.getCurrentContent().createEntity(type, 'IMMUTABLE', { url: url, name: name, type: type, meta: meta });
        var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        return _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
      }, _this.editorState);

      return _this.applyChange(newEditorState);
    }, _this.setMediaData = function (entityKey, data) {
      return _this.applyChange(_draftJs.EditorState.push(_this.editorState, _this.contentState.mergeEntityData(entityKey, data), 'change-block-data'));
    }, _this.removeMedia = function (mediaBlock) {
      return _this.removeBlock(mediaBlock);
    }, _this.setMediaPosition = function (mediaBlock, position) {

      var newPosition = {};
      var float = position.float,
          alignment = position.alignment;


      if (typeof float !== 'undefined') {
        newPosition.float = mediaBlock.getData().get('float') === float ? null : float;
      }

      if (typeof alignment !== 'undefined') {
        newPosition.alignment = mediaBlock.getData().get('alignment') === alignment ? null : alignment;
      }

      return _this.selectBlock(mediaBlock).setSelectionBlockData(newPosition);
    }, _this.clear = function () {

      var contentState = _this.editorState.getCurrentContent();
      var firstBlock = contentState.getFirstBlock();
      var lastBlock = contentState.getLastBlock();

      var allSelected = new _draftJs.SelectionState({
        anchorKey: firstBlock.getKey(),
        anchorOffset: 0,
        focusKey: lastBlock.getKey(),
        focusOffset: lastBlock.getLength(),
        hasFocus: true
      });

      _this.editorState = _draftJs.EditorState.push(_this.editorState, _draftJs.Modifier.removeRange(contentState, allSelected, 'backward'), 'remove-range');

      return _this.applyChange(_this.editorState);
    }, _this.undo = function () {
      return _this.applyChange(_draftJs.EditorState.undo(_this.editorState));
    }, _this.redo = function () {
      return _this.applyChange(_draftJs.EditorState.redo(_this.editorState));
    }, _this.focus = function () {
      _this.draftInstance && _this.draftInstance.focus();
      return _this;
    }, _this.blur = function () {
      _this.draftInstance && _this.draftInstance.blur();
      return _this;
    }, _this.requestFocus = function () {
      window.setImmediate(function () {
        _this.focus();
      });
    }, _this.requestBlur = function () {
      window.setImmediate(function () {
        _this.blur();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return EditorController;
}(_react2.default.Component);

exports.default = EditorController;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaLibrary = function () {
  function MediaLibrary() {
    _classCallCheck(this, MediaLibrary);

    this.items = [];
  }

  _createClass(MediaLibrary, [{
    key: 'getItem',
    value: function getItem(id) {
      return this.items.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: 'getSelectedItems',
    value: function getSelectedItems() {
      return this.items.filter(function (item) {
        return item.selected;
      });
    }
  }, {
    key: 'setItems',
    value: function setItems(items) {
      this.items = items.map(function (item) {
        return _extends({}, item, { id: item.id.toString() });
      }) || [];
      this.applyChange();
      this.uploadItems();
    }
  }, {
    key: 'addItem',
    value: function addItem(item) {
      this.addItems([item]);
    }
  }, {
    key: 'addItems',
    value: function addItems(items) {
      this.items = [].concat(_toConsumableArray(this.items), _toConsumableArray(items.map(function (item) {
        return _extends({}, item, { id: item.id.toString() });
      })));
      this.applyChange();
      this.uploadItems();
    }
  }, {
    key: 'selectItem',
    value: function selectItem(id) {
      var item = this.getItem(id);
      if (item && (item.uploading || item.error)) {
        return false;
      }
      this.setItemState(id, {
        selected: true
      });
    }
  }, {
    key: 'selectAllItems',
    value: function selectAllItems() {
      this.items = this.items.filter(function (item) {
        return !item.error && !item.uploading;
      }).map(function (item) {
        return _extends({}, item, { selected: true });
      });
      this.applyChange();
    }
  }, {
    key: 'deselectItem',
    value: function deselectItem(id) {
      this.setItemState(id, {
        selected: false
      });
    }
  }, {
    key: 'deselectAllItems',
    value: function deselectAllItems() {
      this.items = this.items.map(function (item) {
        return _extends({}, item, { selected: false });
      });
      this.applyChange();
    }
  }, {
    key: 'removeItem',
    value: function removeItem(id) {
      this.items = this.items.filter(function (item) {
        return item.id !== id;
      });
      this.applyChange();
    }
  }, {
    key: 'removeSelectedItems',
    value: function removeSelectedItems() {
      this.items = this.items.filter(function (item) {
        return !item.selected;
      });
      this.applyChange();
    }
  }, {
    key: 'removeErrorItems',
    value: function removeErrorItems() {
      this.items = this.items.filter(function (item) {
        return !item.error;
      });
      this.applyChange();
    }
  }, {
    key: 'removeAllItems',
    value: function removeAllItems() {
      this.items = [];
      this.applyChange();
    }
  }, {
    key: 'setItemState',
    value: function setItemState(id, state) {
      this.items = this.items.map(function (item) {
        return item.id === id ? _extends({}, item, state) : item;
      });
      this.applyChange();
    }
  }, {
    key: 'reuploadErrorItems',
    value: function reuploadErrorItems() {
      this.uploadItems(true);
    }
  }, {
    key: 'uploadItems',
    value: function uploadItems() {
      var _this = this;

      var ignoreError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


      this.items.forEach(function (item, index) {

        if (item.uploading || item.url) {
          return false;
        }

        if (!ignoreError && item.error) {
          return false;
        }

        if (item.type === 'IMAGE') {
          var fileURL = URL.createObjectURL(item.file);
          _this.createThumbnail(item.id, fileURL);
          if (!_this.uploadFn) {
            _this.createInlineImage(item.id, fileURL);
            return false;
          }
        } else if (!_this.uploadFn) {
          _this.setItemState(item.id, { error: 1 });
          return false;
        }

        _this.setItemState(item.id, {
          uploading: true,
          uploadProgress: 0,
          error: 0
        });

        _this.uploadFn({
          file: item.file,
          libraryId: item.id,
          success: function success(res) {
            var serverId = res.id || item.id;
            _this.handleUploadSuccess(item.id, res.url, serverId, res.meta);
          },
          progress: function progress(_progress) {
            _this.setItemState(item.id, {
              uploading: true,
              uploadProgress: _progress
            });
          },
          error: function error(_error) {
            _this.setItemState(item.id, {
              uploading: false,
              error: 2
            });
          }
        });
      });
    }
  }, {
    key: 'createThumbnail',
    value: function createThumbnail(id, url) {
      var _this2 = this;

      this.compressImage(url, 226, 226, function (result) {
        _this2.setItemState(id, {
          thumbnail: result.url
        });
      });
    }
  }, {
    key: 'createInlineImage',
    value: function createInlineImage(id, url) {
      var _this3 = this;

      this.compressImage(url, 1280, 800, function (result) {
        _this3.handleUploadSuccess(id, result.url, id);
      });
    }
  }, {
    key: 'handleUploadSuccess',
    value: function handleUploadSuccess(id, url, newId) {
      var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


      this.setItemState(id, {
        id: newId || id,
        file: null,
        url: url,
        uploadProgress: 1,
        uploading: false,
        selected: false,
        meta: meta
      });

      var item = this.getItem(newId || id);
      item.onReadyToInsert && item.onReadyToInsert(item);
    }
  }, {
    key: 'compressImage',
    value: function compressImage(url, width, height, callback) {

      var image = new Image();
      var compressCanvas = document.createElement('canvas');

      image.src = url;
      image.onload = function () {

        var scale = 1;

        if (this.width > width || this.height > height) {
          scale = this.width > this.height ? width / this.width : height / this.height;
        } else {
          callback({
            url: url,
            width: this.width,
            height: this.height
          });
          return false;
        }

        compressCanvas.width = this.width * scale;
        compressCanvas.height = this.height * scale;

        var ctx = compressCanvas.getContext('2d');
        ctx.drawImage(this, 0, 0, compressCanvas.width, compressCanvas.height);

        callback({
          url: compressCanvas.toDataURL('image/png', 1),
          width: compressCanvas.width,
          height: compressCanvas.height
        });
      };
    }
  }, {
    key: 'applyChange',
    value: function applyChange(changeType) {
      this.onChange(this.items);
    }
  }, {
    key: 'uploadImage',
    value: function uploadImage(file, callback) {

      var fileId = new Date().getTime() + '_' + (0, _base.UniqueIndex)();

      this.addItem({
        type: 'IMAGE',
        id: fileId,
        file: file,
        name: fileId,
        size: file.size,
        uploadProgress: 0,
        uploading: false,
        selected: false,
        error: 0,
        onReadyToInsert: callback
      });
    }
  }, {
    key: 'uploadImageRecursively',
    value: function uploadImageRecursively(files, callback) {
      var _this4 = this;

      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


      if (files[index] && files[index].type.indexOf('image') > -1) {
        this.uploadImage(files[index], function (image) {
          callback && callback(image);
          index < files.length - 1 && _this4.uploadImageRecursively(files, callback, index + 1);
        });
      } else {
        index < files.length - 1 && this.uploadImageRecursively(files, callback, index + 1);
      }
    }
  }, {
    key: 'resolvePastedData',
    value: function resolvePastedData(_ref, callback) {
      var clipboardData = _ref.clipboardData;


      if (clipboardData && clipboardData.items && clipboardData.items[0].type.indexOf('image') > -1) {
        this.uploadImage(clipboardData.items[0].getAsFile(), callback);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(items) {}
  }]);

  return MediaLibrary;
}();

exports.default = MediaLibrary;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en = __webpack_require__(35);

var _en2 = _interopRequireDefault(_en);

var _zh = __webpack_require__(37);

var _zh2 = _interopRequireDefault(_zh);

var _zhHant = __webpack_require__(36);

var _zhHant2 = _interopRequireDefault(_zhHant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  "en": _en2.default,
  "zh": _zh2.default,
  "zh-hant": _zhHant2.default
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorators = exports.getCustomStyleMap = exports.blockStyleFn = exports.customBlockRenderMap = exports.getBlockRendererFn = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _immutable = __webpack_require__(68);

var _draftJs = __webpack_require__(4);

var _Image = __webpack_require__(41);

var _Image2 = _interopRequireDefault(_Image);

var _Video = __webpack_require__(42);

var _Video2 = _interopRequireDefault(_Video);

var _Audio = __webpack_require__(38);

var _Audio2 = _interopRequireDefault(_Audio);

var _Embed = __webpack_require__(39);

var _Embed2 = _interopRequireDefault(_Embed);

var _HorizontalLine = __webpack_require__(40);

var _HorizontalLine2 = _interopRequireDefault(_HorizontalLine);

var _blockStyles = __webpack_require__(45);

var _blockStyles2 = _interopRequireDefault(_blockStyles);

var _inlineStyles = __webpack_require__(46);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _decorators2 = __webpack_require__(44);

var _decorators3 = _interopRequireDefault(_decorators2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAtomicBlockComponent = function getAtomicBlockComponent(block, superProps) {
  return function (props) {

    var entityKey = props.block.getEntityAt(0);

    if (!entityKey) {
      return null;
    }

    var entity = props.contentState.getEntity(entityKey);
    var mediaData = entity.getData();
    var mediaType = entity.getType();
    var mediaProps = _extends({}, superProps, {
      block: block, mediaData: mediaData, entityKey: entityKey
    });

    if (mediaType === 'IMAGE') {
      return _react2.default.createElement(_Image2.default, mediaProps);
    } else if (mediaType === 'AUDIO') {
      return _react2.default.createElement(_Audio2.default, mediaProps);
    } else if (mediaType === 'VIDEO') {
      return _react2.default.createElement(_Video2.default, mediaProps);
    } else if (mediaType === 'EMBED') {
      return _react2.default.createElement(_Embed2.default, mediaProps);
    } else if (mediaType === 'HR') {
      return _react2.default.createElement(_HorizontalLine2.default, mediaProps);
    }
    // 支持自定义的atomic
    if (superProps.extendAtomics) {
      var atomics = superProps.extendAtomics;
      for (var i = 0; i < atomics.length; i++) {
        if (mediaType === atomics[i].type) {
          var Component = atomics[i].component;
          return _react2.default.createElement(Component, mediaProps);
        }
      }
    }

    return null;
  };
};

var getBlockRendererFn = exports.getBlockRendererFn = function getBlockRendererFn(props) {
  return function (block) {

    return block.getType() === 'atomic' ? {
      component: getAtomicBlockComponent(block, props),
      editable: false
    } : null;
  };
};

var customBlockRenderMap = exports.customBlockRenderMap = (0, _immutable.Map)({
  'atomic': {
    element: ''
  },
  'code-block': {
    element: 'code',
    wrapper: _draftJs.DefaultDraftBlockRenderMap.get('code-block').wrapper
  }
});
var blockStyleFn = exports.blockStyleFn = _blockStyles2.default;
var getCustomStyleMap = exports.getCustomStyleMap = _inlineStyles2.default;
var decorators = exports.decorators = _decorators3.default;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(49);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var defaultCaption = props.defaultCaption,
      onChange = props.onChange,
      language = props.language,
      emojis = props.emojis,
      viewWrapper = props.viewWrapper,
      editor = props.editor,
      editorHeight = props.editorHeight;

  var caption = defaultCaption || language.controls.emoji;

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption,
      showDropDownArrow: false,
      viewWrapper: viewWrapper,
      editorHeight: editorHeight,
      hoverTitle: language.controls.emoji,
      className: "control-item dropdown braft-emoji-dropdown"
    },
    _react2.default.createElement(
      'div',
      { className: 'braft-emojis-wrap' },
      _react2.default.createElement(
        'ul',
        { className: 'braft-emojis' },
        emojis.map(function (item, index) {
          return _react2.default.createElement(
            'li',
            {
              key: index,
              'data-emoji': item,
              onClick: function onClick(e) {
                editor.insertText(e.currentTarget.dataset.emoji);
                editor.requestFocus();
              }
            },
            item
          );
        })
      )
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(50);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentIndex = null;
  var defaultCaption = props.defaultCaption,
      editor = props.editor,
      onChange = props.onChange,
      language = props.language,
      fontFamilies = props.fontFamilies,
      viewWrapper = props.viewWrapper,
      editorHeight = props.editorHeight;


  fontFamilies.find(function (item, index) {
    if (editor.selectionHasInlineStyle('FONTFAMILY-' + item.name)) {
      caption = item.name;
      currentIndex = index;
      return true;
    }
    return false;
  });

  var isFirstItemActive = currentIndex === 0;
  caption = caption || defaultCaption || language.controls.fontFamily;

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption,
      viewWrapper: viewWrapper,
      editorHeight: editorHeight,
      hoverTitle: language.controls.fontFamily,
      arrowActive: isFirstItemActive,
      className: "control-item dropdown font-family-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'menu' },
      fontFamilies.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: "menu-item " + (index === currentIndex ? 'active' : ''),
            'data-name': item.name,
            onClick: function onClick(e) {
              editor.toggleSelectionFontFamily(e.currentTarget.dataset.name);
              editor.requestFocus();
            }
          },
          _react2.default.createElement(
            'span',
            { style: { fontFamily: item.family } },
            item.name
          )
        );
      })
    )
  );
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(51);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentFontSize = null;
  var defaultCaption = props.defaultCaption,
      editor = props.editor,
      language = props.language,
      fontSizes = props.fontSizes,
      viewWrapper = props.viewWrapper,
      editorHeight = props.editorHeight;


  fontSizes.find(function (item) {
    if (editor.selectionHasInlineStyle('FONTSIZE-' + item)) {
      caption = item + 'px';
      currentFontSize = item;
      return true;
    }
    return false;
  });

  caption = caption || defaultCaption || language.controls.fontSize;

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption,
      editorHeight: editorHeight,
      viewWrapper: viewWrapper,
      hoverTitle: language.controls.fontSize,
      className: "control-item dropdown braft-font-size-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'braft-font-sizes-wrap' },
      fontSizes.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: item === currentFontSize ? 'active' : null,
            'data-size': item,
            onClick: function onClick(e) {
              editor.toggleSelectionFontSize(e.currentTarget.dataset.size);
              editor.requestFocus();
            }
          },
          item + 'px'
        );
      })
    )
  );
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(52);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _maps = __webpack_require__(8);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var current = props.current,
      onChange = props.onChange,
      language = props.language,
      viewWrapper = props.viewWrapper,
      editorHeight = props.editorHeight;

  var headings = (0, _maps.getHeadings)(language);

  var currentHeadingIndex = headings.findIndex(function (item) {
    return item.command === current;
  });
  var caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : language.controls.normal;
  var isFirstItemActive = currentHeadingIndex === 0;

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption,
      viewWrapper: viewWrapper,
      editorHeight: editorHeight,
      hoverTitle: language.controls.headings,
      arrowActive: isFirstItemActive,
      className: "control-item dropdown headings-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'menu' },
      headings.map(function (item, index) {
        var isActive = current === item.command;
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: "menu-item" + (isActive ? ' active' : ''),
            onClick: function onClick() {
              return onChange(item.command, item.type);
            }
          },
          item.text
        );
      })
    )
  );
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(53);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentLineHeight = null;
  var defaultCaption = props.defaultCaption,
      editor = props.editor,
      language = props.language,
      lineHeights = props.lineHeights,
      viewWrapper = props.viewWrapper,
      editorHeight = props.editorHeight;


  lineHeights.find(function (item) {
    if (editor.selectionHasInlineStyle('LINEHEIGHT-' + item)) {
      caption = item;
      currentLineHeight = item;
      return true;
    }
    return false;
  });

  caption = caption || defaultCaption || language.controls.lineHeight;

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption,
      viewWrapper: viewWrapper,
      editorHeight: editorHeight,
      hoverTitle: language.controls.lineHeight,
      className: "control-item dropdown braft-line-height-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'braft-line-heights-wrap' },
      lineHeights.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: item === currentLineHeight ? 'active' : null,
            'data-size': item,
            onClick: function onClick(e) {
              editor.toggleSelectionLineHeight(e.currentTarget.dataset.size);
              editor.requestFocus();
            }
          },
          item
        );
      })
    )
  );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(54);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switch = __webpack_require__(7);

var _Switch2 = _interopRequireDefault(_Switch);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkEditor = function (_React$Component) {
  _inherits(LinkEditor, _React$Component);

  function LinkEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkEditor.__proto__ || Object.getPrototypeOf(LinkEditor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      href: '',
      target: ''
    }, _this.dropDownComponent = null, _this.handeKeyDown = function (e) {
      if (e.keyCode === 13) {
        _this.handleConfirm();
        e.preventDefault();
        return false;
      }
    }, _this.inputLink = function (e) {
      _this.setState({
        href: e.currentTarget.value
      });
    }, _this.setTarget = function () {
      _this.setState({
        target: _this.state.target === '_blank' ? '' : '_blank'
      });
    }, _this.handleCancel = function () {
      _this.dropDownComponent.hide();
    }, _this.handleUnlink = function () {
      _this.dropDownComponent.hide();
      _this.props.editor.toggleSelectionLink(false);
    }, _this.handleConfirm = function () {
      var _this$state = _this.state,
          href = _this$state.href,
          target = _this$state.target;

      _this.props.editor.toggleSelectionLink(href, target);
      _this.dropDownComponent.hide();
      _this.props.editor.requestFocus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LinkEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      var _next$editor$getSelec = next.editor.getSelectionEntityData('LINK'),
          href = _next$editor$getSelec.href,
          target = _next$editor$getSelec.target;

      this.setState({
        href: href || '',
        target: target || ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          href = _state.href,
          target = _state.target;
      var _props = this.props,
          editor = _props.editor,
          language = _props.language,
          viewWrapper = _props.viewWrapper;

      var caption = _react2.default.createElement('i', { className: 'braft-icon-link' });
      var textSelected = !editor.selectionCollapsed() && editor.getSelectionBlockType() !== 'atomic';

      return _react2.default.createElement(
        'div',
        { className: 'control-item-group' },
        _react2.default.createElement(
          _DropDown2.default,
          {
            caption: caption,
            hoverTitle: language.controls.link,
            autoHide: false,
            viewWrapper: viewWrapper,
            showDropDownArrow: false,
            disabled: !textSelected,
            ref: function ref(instance) {
              return _this2.dropDownComponent = instance;
            },
            className: "control-item dropdown link-editor-dropdown"
          },
          _react2.default.createElement(
            'div',
            { className: 'braft-link-editor' },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', {
                type: 'text',
                value: href,
                spellCheck: false,
                placeholder: language.linkEditor.inputPlaceHolder,
                onKeyDown: this.handeKeyDown,
                onChange: this.inputLink
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'switch-group' },
              _react2.default.createElement(_Switch2.default, {
                active: target === '_blank',
                onClick: this.setTarget
              }),
              _react2.default.createElement(
                'label',
                null,
                language.linkEditor.openInNewWindow
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'buttons' },
              _react2.default.createElement(
                'a',
                { onClick: this.handleUnlink, className: 'primary pull-left', href: 'javascript:void(0);' },
                _react2.default.createElement('i', { className: 'braft-icon-close' }),
                _react2.default.createElement(
                  'span',
                  null,
                  language.linkEditor.removeLink
                )
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.handleConfirm, className: 'primary pull-right' },
                language.base.confirm
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.handleCancel, className: 'default pull-right' },
                language.base.cancel
              )
            )
          )
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            title: language.controls.unlink,
            className: 'control-item button',
            onClick: this.handleUnlink,
            disabled: !textSelected || !href
          },
          _react2.default.createElement('i', { className: 'braft-icon-link-off' })
        )
      );
    }
  }]);

  return LinkEditor;
}(_react2.default.Component);

exports.default = LinkEditor;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(55);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(3);

var _Modal2 = _interopRequireDefault(_Modal);

var _base = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO
// 允许删除所选项目

var imageMediaType = 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg';
var videoMediaType = 'video/mp4';
var audioMediaType = 'audio/mp3';
var defaultValidateFn = function defaultValidateFn() {
  return true;
};

var MediaPicker = function (_React$Component) {
  _inherits(MediaPicker, _React$Component);

  function MediaPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MediaPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaPicker.__proto__ || Object.getPrototypeOf(MediaPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false,
      showExternalForm: false,
      draging: false,
      error: false,
      confirmable: false,
      external: {
        url: '',
        type: 'IMAGE'
      },
      files: []
    }, _this.dragCounter = 0, _this.mediaFileAccept = [_this.props.media.image ? imageMediaType : null, _this.props.media.video ? videoMediaType : null, _this.props.media.audio ? audioMediaType : null].filter(function (item) {
      return item;
    }).join(','), _this.selectItem = function (file) {
      var id = file.id,
          selected = file.selected,
          error = file.error,
          uploading = file.uploading;


      if (error || uploading) {
        return false;
      }

      selected = !selected;
      _this.mediaLibrary.setItemState(id, { selected: selected });
    }, _this.removeItem = function (event) {

      var mediaId = event.currentTarget.dataset.id;
      var mediaItem = _this.mediaLibrary.getItem(mediaId);

      if (!mediaItem) {
        return false;
      }

      if (_this.props.media.removeConfirmFn) {
        _this.props.media.removeConfirmFn({
          items: [mediaItem],
          confirm: function confirm() {
            _this.mediaLibrary.removeItem(mediaId);
            _this.props.media.onRemove && _this.props.media.onRemove([mediaItem]);
          }
        });
      } else {
        _this.mediaLibrary.removeItem(mediaId);
        _this.props.media.onRemove && _this.props.media.onRemove([mediaItem]);
      }

      event.stopPropagation();
    }, _this.removeSelectedItems = function () {

      var selectedItems = _this.mediaLibrary.getSelectedItems();

      if (_this.props.media.removeConfirmFn) {
        _this.props.media.removeConfirmFn({
          items: selectedItems,
          confirm: function confirm() {
            _this.mediaLibrary.removeSelectedItems();
            _this.props.media.onRemove && _this.props.media.onRemove(selectedItems);
          }
        });
      } else {
        _this.mediaLibrary.removeSelectedItems();
        _this.props.media.onRemove && _this.props.media.onRemove(selectedItems);
      }
    }, _this.selectAllItems = function () {
      _this.mediaLibrary.selectAllItems();
    }, _this.deselectAllItems = function () {
      _this.mediaLibrary.deselectAllItems();
    }, _this.handleDragLeave = function (e) {
      _this.dragCounter--;
      _this.dragCounter === 0 && _this.setState({
        draging: false
      });
    }, _this.handleDragDrop = function (e) {
      _this.dragCounter = 0;
      _this.setState({
        draging: false
      });
    }, _this.handleDragEnter = function (e) {
      e.preventDefault();
      _this.dragCounter++;
      _this.setState({
        draging: true
      });
    }, _this.handleFilesPicked = function (e) {

      var index = 0;
      var files = e.target.files;

      var length = files.length;

      e.persist();

      var resolveFile = function resolveFile(index) {

        if (index < length) {

          if (_this.validateFn(files[index])) {

            var data = {
              id: new Date().getTime() + '_' + (0, _base.UniqueIndex)(),
              file: files[index],
              name: files[index].name,
              size: files[index].size,
              uploadProgress: 0,
              uploading: false,
              selected: false,
              error: 0,
              onReadyToInsert: function onReadyToInsert(_ref2) {
                var id = _ref2.id;

                _this.mediaLibrary.selectItem(id);
              }
            };

            if (files[index].type.indexOf('image/') === 0 && _this.props.media.image) {
              data.type = 'IMAGE';
              _this.mediaLibrary.addItems([data]);
            } else if (files[index].type.indexOf('video/') === 0 && _this.props.media.video) {
              data.type = 'VIDEO';
              _this.mediaLibrary.addItems([data]);
            } else if (files[index].type.indexOf('audio/') === 0 && _this.props.media.audio) {
              data.type = 'AUDIO';
              _this.mediaLibrary.addItems([data]);
            }
          }

          setTimeout(function () {
            resolveFile(index + 1);
          }, 100);
        } else {
          e.target.value = null;
        }
      };

      resolveFile(0);
    }, _this.inputExternal = function (e) {
      _this.setState({
        external: _extends({}, _this.state.external, {
          url: e.target.value
        })
      });
    }, _this.switchExternalType = function (e) {
      _this.setState({
        external: _extends({}, _this.state.external, { type: e.target.dataset.type })
      });
    }, _this.confirmAddExternal = function (e) {
      if (e.target.nodeName.toLowerCase() === 'button' || e.keyCode === 13) {
        var _this$state$external = _this.state.external,
            url = _this$state$external.url,
            type = _this$state$external.type;

        url = url.split('|');
        var name = url.length > 1 ? url[0] : _this.props.language.mediaPicker.unnamedItem;
        url = url.length > 1 ? url[1] : url[0];
        var thumbnail = type === 'IMAGE' ? url : null;
        _this.mediaLibrary.addItems([{
          thumbnail: thumbnail, url: url, name: name, type: type,
          id: new Date().getTime() + '_' + (0, _base.UniqueIndex)(),
          uploading: false,
          uploadProgress: 1,
          selected: true
        }]);
        _this.setState({
          showExternalForm: false,
          external: {
            url: '',
            type: 'IMAGE'
          }
        });
      }
    }, _this.toggleExternalMode = function () {
      _this.setState({
        showExternalForm: !_this.state.showExternalForm
      });
    }, _this.confirmInsertMedia = function () {

      var selectedMedias = _this.mediaLibrary.getSelectedItems();

      if (_this.props.media.onInsert) {
        var filteredMedias = _this.props.media.onInsert(selectedMedias);
        if (filteredMedias && filteredMedias instanceof Array) {
          // 如果onInsert返回了一个有效的数组，则将该数组作为媒体内容插入
          _this.props.editor.insertMedias(filteredMedias);
          _this.hide();
        } else if (filteredMedias !== false) {
          // 如果onInsert返回不是false，则插入已选择的媒体内容
          _this.props.editor.insertMedias(selectedMedias);
          _this.hide();
        }
      } else {
        _this.props.editor.insertMedias(selectedMedias);
        _this.hide();
      }
    }, _this.show = function () {
      _this.setState({
        visible: true
      });
    }, _this.hide = function () {
      _this.setState({
        visible: false
      }, function () {
        _this.mediaLibrary.deselectAllItems();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MediaPicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var media = this.props.media;


      this.setState({
        external: {
          url: '',
          type: media.externalMedias.image ? 'IMAGE' : media.externalMedias.audio ? 'AUDIO' : media.externalMedias.video ? 'VIDEO' : media.externalMedias.embed ? 'EMBED' : ''
        }
      });

      this.mediaLibrary = this.props.mediaLibrary;
      this.mediaLibrary.uploadFn = this.props.media.uploadFn || null;
      this.validateFn = this.props.media.validateFn || defaultValidateFn;
      this.mediaLibrary.onChange = function (files) {
        _this2.setState({
          files: files,
          confirmable: !!files.filter(function (item) {
            return item.selected;
          }).length
        });
        media.onChange && media.onChange(files);
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var media = nextProps.media;


      this.setState({
        external: {
          url: '',
          type: media.externalMedias.image ? 'IMAGE' : media.externalMedias.audio ? 'AUDIO' : media.externalMedias.video ? 'VIDEO' : media.externalMedias.embed ? 'EMBED' : ''
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.pickerModal && this.pickerModal.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          media = _props.media,
          language = _props.language;
      var _state = this.state,
          files = _state.files,
          visible = _state.visible,
          external = _state.external,
          draging = _state.draging,
          confirmable = _state.confirmable,
          showExternalForm = _state.showExternalForm;

      var allowExternalMedia = media.externalMedias && (media.externalMedias.image || media.externalMedias.audio || media.externalMedias.video || media.externalMedias.embed);
      var bottomText = allowExternalMedia ? _react2.default.createElement(
        'span',
        {
          onClick: this.toggleExternalMode,
          className: 'braft-media-toggle-external-mode'
        },
        showExternalForm ? _react2.default.createElement(
          'span',
          { className: 'braft-media-bottom-text' },
          _react2.default.createElement('i', { className: 'braft-icon-add' }),
          ' ',
          language.mediaPicker.addLocalFile
        ) : _react2.default.createElement(
          'span',
          { className: 'braft-media-bottom-text' },
          _react2.default.createElement('i', { className: 'braft-icon-add' }),
          ' ',
          language.mediaPicker.addExternalSource
        )
      ) : null;

      return _react2.default.createElement(
        _Modal2.default,
        {
          title: language.mediaPicker.caption,
          width: 640,
          visible: visible,
          language: language,
          className: 'braft-media-picker-modal',
          bottomText: bottomText,
          confirmable: confirmable && !showExternalForm,
          onClose: this.hide,
          onCancel: this.hide,
          onConfirm: this.confirmInsertMedia,
          confirmText: language.mediaPicker.confirmInsert,
          ref: function ref(instance) {
            return _this3.pickerModal = instance;
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'braft-media-picker' },
          _react2.default.createElement(
            'div',
            {
              onDragEnter: this.handleDragEnter,
              onDragLeave: this.handleDragLeave,
              onDrop: this.handleDragDrop,
              className: 'braft-media-uploader'
            },
            _react2.default.createElement(
              'div',
              { className: "braft-media-drag-uploader " + (draging || !files.length ? 'active ' : ' ') + (draging ? 'draging' : '') },
              _react2.default.createElement(
                'span',
                { className: 'braft-media-drag-tip' },
                _react2.default.createElement('input', { accept: this.mediaFileAccept, onChange: this.handleFilesPicked, multiple: true, type: 'file' }),
                draging ? language.mediaPicker.dropTip : language.mediaPicker.dragTip
              )
            ),
            files.length ? _react2.default.createElement(
              'div',
              { className: 'braft-media-list-wrap' },
              _react2.default.createElement(
                'div',
                { className: 'braft-media-list-tools' },
                _react2.default.createElement(
                  'span',
                  { onClick: this.selectAllItems, className: 'braft-media-select-all' },
                  _react2.default.createElement('i', { className: 'braft-icon-done' }),
                  ' ',
                  language.mediaPicker.selectAll
                ),
                _react2.default.createElement(
                  'span',
                  { onClick: this.deselectAllItems, disabled: !confirmable, className: 'braft-media-deselect-all' },
                  _react2.default.createElement('i', { className: 'braft-icon-close' }),
                  ' ',
                  language.mediaPicker.deselect
                ),
                _react2.default.createElement(
                  'span',
                  { onClick: this.removeSelectedItems, disabled: !confirmable, className: 'braft-media-remove-selected' },
                  _react2.default.createElement('i', { className: 'braft-icon-bin' }),
                  ' ',
                  language.mediaPicker.removeSelected
                )
              ),
              this.buildMediaList()
            ) : null,
            showExternalForm && allowExternalMedia ? _react2.default.createElement(
              'div',
              { className: 'braft-media-add-external' },
              _react2.default.createElement(
                'div',
                { className: 'braft-media-external-form' },
                _react2.default.createElement(
                  'div',
                  { className: 'braft-media-external-input' },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('input', { onKeyDown: this.confirmAddExternal, value: external.url, onChange: this.inputExternal, placeholder: language.mediaPicker.externalInputPlaceHolder })
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: this.confirmAddExternal, disabled: !external.url.trim().length },
                    language.base.confirm
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { 'data-type': external.type, className: 'braft-media-switch-external-type' },
                  media.externalMedias.image ? _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: this.switchExternalType, 'data-type': 'IMAGE' },
                    language.media.image
                  ) : null,
                  media.externalMedias.audio ? _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: this.switchExternalType, 'data-type': 'AUDIO' },
                    language.media.audio
                  ) : null,
                  media.externalMedias.video ? _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: this.switchExternalType, 'data-type': 'VIDEO' },
                    language.media.video
                  ) : null,
                  media.externalMedias.embed ? _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: this.switchExternalType, 'data-type': 'EMBED' },
                    language.media.embed
                  ) : null
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'braft-media-external-tip' },
                  language.mediaPicker.externalInputTip
                )
              )
            ) : null
          )
        )
      );
    }
  }, {
    key: 'buildMediaList',
    value: function buildMediaList() {
      var _this4 = this;

      return _react2.default.createElement(
        'ul',
        { className: 'braft-media-list' },
        _react2.default.createElement(
          'li',
          { className: 'braft-media-add-item' },
          _react2.default.createElement('i', { className: 'braft-icon-add' }),
          _react2.default.createElement('input', { accept: this.mediaFileAccept, onChange: this.handleFilesPicked, multiple: true, type: 'file' })
        ),
        this.state.files.map(function (file, index) {

          var previewerComponents = null;
          var progressMarker = file.uploading ? _react2.default.createElement(
            'div',
            { className: 'braft-media-item-uploading' },
            _react2.default.createElement('div', { className: 'braft-media-item-uploading-bar', style: { width: file.uploadProgress / 1 + '%' } })
          ) : '';

          switch (file.type) {
            case 'IMAGE':
              previewerComponents = _react2.default.createElement(
                'div',
                { className: 'braft-media-image' },
                progressMarker,
                _react2.default.createElement('img', { src: file.thumbnail || file.url })
              );
              break;
            case 'VIDEO':
              previewerComponents = _react2.default.createElement(
                'div',
                { className: 'braft-media-icon braft-media-video', title: file.url },
                progressMarker,
                _react2.default.createElement('i', { className: 'braft-icon-film' }),
                _react2.default.createElement(
                  'span',
                  null,
                  file.name || file.url
                )
              );
              break;
            case 'AUDIO':
              previewerComponents = _react2.default.createElement(
                'div',
                { className: 'braft-media-icon braft-media-audio', title: file.url },
                progressMarker,
                _react2.default.createElement('i', { className: 'braft-icon-music' }),
                _react2.default.createElement(
                  'span',
                  null,
                  file.name || file.url
                )
              );
              break;
            case 'EMBED':
              previewerComponents = _react2.default.createElement(
                'div',
                { className: 'braft-media-icon braft-media-embed', title: file.url },
                progressMarker,
                _react2.default.createElement('i', { className: 'braft-icon-code' }),
                _react2.default.createElement(
                  'span',
                  null,
                  file.name || _this4.props.language.media.embed
                )
              );
              break;
            default:
              previewerComponents = _react2.default.createElement(
                'a',
                { className: 'braft-media-icon braft-media-file', title: file.url, href: file.url },
                progressMarker,
                _react2.default.createElement('i', { className: 'braft-icon-file-text' }),
                _react2.default.createElement(
                  'span',
                  null,
                  file.name || file.url
                )
              );
              break;
          }

          var className = ['braft-media-item'];
          file.selected && className.push('active');
          file.uploading && className.push('uploading');
          file.error && className.push('error');

          return _react2.default.createElement(
            'li',
            {
              key: index,
              title: file.name,
              className: className.join(' '),
              onClick: function onClick() {
                return _this4.selectItem(file);
              }
            },
            previewerComponents,
            _react2.default.createElement('span', { 'data-id': file.id, onClick: _this4.removeItem, className: 'braft-media-item-remove braft-icon-close' }),
            _react2.default.createElement(
              'span',
              { className: 'braft-media-item-title' },
              file.name
            )
          );
        })
      );
    }
  }]);

  return MediaPicker;
}(_react2.default.Component);

exports.default = MediaPicker;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextAlign = function (_React$Component) {
  _inherits(TextAlign, _React$Component);

  function TextAlign() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextAlign);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextAlign.__proto__ || Object.getPrototypeOf(TextAlign)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentAlignment: undefined
    }, _this.setAlignment = function (e) {
      _this.props.editor.toggleSelectionAlignment(e.currentTarget.dataset.alignment);
      _this.props.editor.requestFocus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextAlign, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      this.setState({
        currentAlignment: next.editor.getSelectionBlockData('textAlign')
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentAlignment = this.state.currentAlignment;
      var _props = this.props,
          language = _props.language,
          textAlignOptions = _props.textAlignOptions;

      var textAlignmentTitles = [language.controls.alignLeft, language.controls.alignCenter, language.controls.alignRight, language.controls.alignJustify];

      return _react2.default.createElement(
        'div',
        { className: 'control-item-group' },
        textAlignOptions.map(function (item, index) {
          return _react2.default.createElement(
            'button',
            {
              type: 'button',
              key: index,
              title: textAlignmentTitles[index],
              'data-alignment': item,
              className: 'control-item button ' + (item === currentAlignment ? 'active' : null),
              onClick: _this2.setAlignment
            },
            _react2.default.createElement('i', { className: "braft-icon-align-" + item })
          );
        })
      );
    }
  }]);

  return TextAlign;
}(_react2.default.Component);

exports.default = TextAlign;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(56);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(2);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _ColorPicker = __webpack_require__(31);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextColor = function (_React$Component) {
  _inherits(TextColor, _React$Component);

  function TextColor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextColor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextColor.__proto__ || Object.getPrototypeOf(TextColor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      colorType: 'color'
    }, _this.dropDownComponentId = 'BRAFT-DROPDOWN-' + (0, _base.UniqueIndex)(), _this.switchColorType = function (e) {

      _this.setState({
        colorType: e.currentTarget.dataset.type
      });
    }, _this.toggleColor = function (color) {

      if (_this.state.colorType === 'color') {
        _this.props.editor.toggleSelectionColor(color);
      } else {
        _this.props.editor.toggleSelectionBackgroundColor(color);
      }

      _this.dropDownComponent.hide();
      _this.props.editor.requestFocus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextColor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var captionStyle = {};
      var currentColor = null;
      var colorType = this.state.colorType;
      var _props = this.props,
          editor = _props.editor,
          language = _props.language,
          colors = _props.colors,
          tempColors = _props.tempColors,
          viewWrapper = _props.viewWrapper,
          editorHeight = _props.editorHeight,
          allowSetTextBackgroundColor = _props.allowSetTextBackgroundColor;
      [].concat(_toConsumableArray(colors), _toConsumableArray(tempColors)).forEach(function (color) {
        var color_id = color.replace('#', '');
        if (editor.selectionHasInlineStyle('COLOR-' + color_id)) {
          captionStyle.color = color;
          colorType === 'color' && (currentColor = color);
        }

        if (editor.selectionHasInlineStyle('BGCOLOR-' + color_id)) {
          captionStyle.backgroundColor = color;
          colorType === 'backgroundColor' && (currentColor = color);
        }
      });

      var caption = _react2.default.createElement(
        'i',
        { style: captionStyle, className: 'braft-icon-text-color' },
        _react2.default.createElement('span', { className: 'path1' }),
        _react2.default.createElement('span', { className: 'path2' })
      );

      return _react2.default.createElement(
        _DropDown2.default,
        {
          caption: caption,
          hoverTitle: language.controls.color,
          showDropDownArrow: false,
          viewWrapper: viewWrapper,
          editorHeight: editorHeight,
          componentId: this.dropDownComponentId,
          ref: function ref(instance) {
            return _this2.dropDownComponent = instance;
          },
          className: "control-item dropdown text-color-dropdown"
        },
        _react2.default.createElement(
          'div',
          { className: 'braft-text-color-picker-wrap' },
          _react2.default.createElement(
            'div',
            { className: 'braft-color-switch-buttons', style: allowSetTextBackgroundColor ? {} : { display: 'none' } },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                'data-type': 'color',
                'data-keep-active': true,
                'data-braft-component-id': this.dropDownComponentId,
                className: colorType === 'color' ? 'active' : '',
                onClick: this.switchColorType
              },
              language.controls.textColor
            ),
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                'data-type': 'backgroundColor',
                'data-keep-active': true,
                'data-braft-component-id': this.dropDownComponentId,
                className: colorType === 'backgroundColor' ? 'active' : '',
                onClick: this.switchColorType
              },
              language.controls.backgroundColor
            )
          ),
          _react2.default.createElement(_ColorPicker2.default, {
            width: 200,
            language: language,
            current: currentColor,
            disableAlpha: true,
            colors: colors,
            tempColors: tempColors,
            onChange: this.toggleColor
          })
        )
      );
    }
  }]);

  return TextColor;
}(_react2.default.Component);

exports.default = TextColor;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(57);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentIndent = null;
  var defaultCaption = props.defaultCaption,
      editor = props.editor,
      language = props.language,
      indents = props.indents,
      viewWrapper = props.viewWrapper,
      editorHeight = props.editorHeight;


  indents.find(function (item) {
    if (editor.selectionHasInlineStyle('INDENT-' + item)) {
      caption = item;
      currentIndent = item;
      return true;
    }
    return false;
  });

  caption = caption || defaultCaption || language.controls.indent;

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption,
      viewWrapper: viewWrapper,
      editorHeight: editorHeight,
      hoverTitle: language.controls.indent,
      className: "control-item dropdown braft-indent-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'braft-indents-wrap' },
      indents.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: item === currentIndent ? 'active' : null,
            'data-size': item,
            onClick: function onClick(e) {
              editor.toggleSelectionIndent(e.currentTarget.dataset.size);
              editor.requestFocus();
            }
          },
          item
        );
      })
    )
  );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(58);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(1);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentLetterSpacing = null;
  var defaultCaption = props.defaultCaption,
      editor = props.editor,
      language = props.language,
      letterSpacings = props.letterSpacings,
      viewWrapper = props.viewWrapper,
      editorHeight = props.editorHeight;


  letterSpacings.find(function (item) {
    if (editor.selectionHasInlineStyle('LETTERSPACING-' + item)) {
      caption = item;
      currentLetterSpacing = item;
      return true;
    }
    return false;
  });

  caption = caption || defaultCaption || language.controls.letterSpacing;

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption,
      viewWrapper: viewWrapper,
      editorHeight: editorHeight,
      hoverTitle: language.controls.letterSpacing,
      className: "control-item dropdown braft-letter-spacing-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'braft-letter-spacings-wrap' },
      letterSpacings.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: item === currentLetterSpacing ? 'active' : null,
            'data-size': item,
            onClick: function onClick(e) {
              editor.toggleSelectionLetterSpacing(e.currentTarget.dataset.size);
              editor.requestFocus();
            }
          },
          item
        );
      })
    )
  );
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(59);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var current = props.current,
      colors = props.colors,
      tempColors = props.tempColors,
      onChange = props.onChange,
      language = props.language;


  return _react2.default.createElement(
    'div',
    { className: 'braft-color-list-wrap' },
    _react2.default.createElement(
      'ul',
      { className: 'braft-color-list' },
      colors.map(function (item, index) {
        var className = item === current ? 'color-item active' : 'color-item';
        return _react2.default.createElement('li', {
          key: index,
          title: item,
          className: className,
          style: { color: item },
          'data-color': item.replace('#', ''),
          onClick: function onClick(e) {
            return props.onChange(e.currentTarget.dataset.color);
          }
        });
      })
    ),
    tempColors.length ? _react2.default.createElement(
      'div',
      { className: 'braft-color-list-split-line' },
      _react2.default.createElement(
        'span',
        null,
        language.controls.tempColors
      )
    ) : null,
    tempColors.length ? _react2.default.createElement(
      'ul',
      { className: 'braft-color-list' },
      tempColors.map(function (item, index) {
        var className = item === current ? 'color-item active' : 'color-item';
        return _react2.default.createElement('li', {
          key: index,
          title: item,
          className: className,
          style: { color: item },
          'data-color': item.replace('#', ''),
          onClick: function onClick(e) {
            return props.onChange(e.currentTarget.dataset.color);
          }
        });
      })
    ) : null
  );
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (lang) {
  return [{
    key: 'undo',
    title: lang.controls.undo,
    text: _react2.default.createElement('i', { className: 'braft-icon-undo' }),
    type: 'editor-state-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: lang.controls.redo,
    text: _react2.default.createElement('i', { className: 'braft-icon-redo' }),
    type: 'editor-state-method',
    command: 'redo'
  }, {
    key: 'remove-styles',
    title: lang.controls.removeStyles,
    text: _react2.default.createElement('i', { className: 'braft-icon-format_clear' }),
    type: 'editor-state-method',
    command: 'removeSelectionInlineStyles'
  }, {
    key: 'hr',
    title: lang.controls.hr,
    text: _react2.default.createElement('i', { className: 'braft-icon-hr' }),
    type: 'editor-state-method',
    command: 'insertHorizontalLine'
  }, {
    key: 'bold',
    title: lang.controls.bold,
    text: _react2.default.createElement('i', { className: 'braft-icon-bold' }),
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: lang.controls.italic,
    text: _react2.default.createElement('i', { className: 'braft-icon-italic' }),
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: lang.controls.underline,
    text: _react2.default.createElement('i', { className: 'braft-icon-underlined' }),
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: lang.controls.strikeThrough,
    text: _react2.default.createElement('i', { className: 'braft-icon-strikethrough' }),
    type: 'inline-style',
    command: 'strikethrough'
  }, {
    key: 'superscript',
    title: lang.controls.superScript,
    text: _react2.default.createElement('i', { className: 'braft-icon-superscript' }),
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: lang.controls.subScript,
    text: _react2.default.createElement('i', { className: 'braft-icon-subscript' }),
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: lang.controls.headings,
    type: 'headings'
  }, {
    key: 'blockquote',
    title: lang.controls.blockQuote,
    text: _react2.default.createElement('i', { className: 'braft-icon-quote' }),
    type: 'block-type',
    command: 'blockquote'
  }, {
    key: 'code',
    title: lang.controls.code,
    text: _react2.default.createElement('i', { className: 'braft-icon-code' }),
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list_ul',
    title: lang.controls.unorderedList,
    text: _react2.default.createElement('i', { className: 'braft-icon-list' }),
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list_ol',
    title: lang.controls.orderedList,
    text: _react2.default.createElement('i', { className: 'braft-icon-list-numbered' }),
    type: 'block-type',
    command: 'ordered-list-item'
  }, {
    key: 'link',
    title: lang.controls.link,
    type: 'link'
  }, {
    key: 'text-color',
    title: lang.controls.color,
    type: 'text-color'
  }, {
    key: 'line-height',
    title: lang.controls.lineHeight,
    type: 'line-height'
  }, {
    key: 'letter-spacing',
    title: lang.controls.letterSpacing,
    type: 'letter-spacing'
  }, {
    key: 'indent',
    title: lang.controls.indent,
    type: 'indent'
  }, {
    key: 'font-size',
    title: lang.controls.fontSize,
    type: 'font-size'
  }, {
    key: 'font-family',
    title: lang.controls.fontFamily,
    type: 'font-family'
  }, {
    key: 'text-align',
    title: lang.controls.textAlign,
    type: 'text-align'
  }, {
    key: 'media',
    title: lang.controls.media,
    text: _react2.default.createElement('i', { className: 'braft-icon-media' }),
    type: 'media'
  }, {
    key: 'emoji',
    title: lang.controls.emoji,
    text: _react2.default.createElement('i', { className: 'braft-icon-emoji' }),
    type: 'emoji'
  }, {
    key: 'clear',
    title: lang.controls.clear,
    text: _react2.default.createElement(
      'span',
      { className: 'braft-control-text' },
      lang.controls.clear
    ),
    type: 'editor-state-method',
    command: 'clear'
  }];
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(2);

var resizeEventHandlers = [];
var responsiveHelperInited = false;
var debouce = false;

exports.default = {
  resolve: function resolve(eventHandler) {
    var id = (0, _base.UniqueIndex)();
    resizeEventHandlers.push({ id: id, eventHandler: eventHandler });
    return id;
  },
  unresolve: function unresolve(id) {
    resizeEventHandlers = resizeEventHandlers.filter(function (item) {
      return item.id !== id;
    });
  }
};


if (!responsiveHelperInited) {

  window.addEventListener('resize', function (event) {
    clearTimeout(debouce);
    debouce = setTimeout(function () {
      resizeEventHandlers.map(function (item) {
        typeof item.eventHandler === 'function' && item.eventHandler(event);
      });
      debouce = false;
    }, 100);
  });

  responsiveHelperInited = true;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _languages = __webpack_require__(15);

var _languages2 = _interopRequireDefault(_languages);

var _draftJs = __webpack_require__(4);

var _draftConvert = __webpack_require__(19);

var _draftjsUtils = __webpack_require__(6);

var _convert = __webpack_require__(10);

var _keybindings = __webpack_require__(11);

var _keybindings2 = _interopRequireDefault(_keybindings);

var _options = __webpack_require__(12);

var _options2 = _interopRequireDefault(_options);

var _base = __webpack_require__(2);

var _controller = __webpack_require__(13);

var _controller2 = _interopRequireDefault(_controller);

var _renderers = __webpack_require__(16);

var _ControlBar = __webpack_require__(9);

var _ControlBar2 = _interopRequireDefault(_ControlBar);

var _MediaLibrary = __webpack_require__(14);

var _MediaLibrary2 = _interopRequireDefault(_MediaLibrary);

var _colors = __webpack_require__(5);

__webpack_require__(17);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO
// 重写convertToHTML
// 支持mention功能
// 支持hashtag功能
// 增加取色器

var editorDecorators = new _draftJs.CompositeDecorator(_renderers.decorators);
var blockRenderMap = _draftJs.DefaultDraftBlockRenderMap.merge(_renderers.customBlockRenderMap);

var BraftEditor = function (_EditorController) {
  _inherits(BraftEditor, _EditorController);

  function BraftEditor(props) {
    _classCallCheck(this, BraftEditor);

    var _this = _possibleConstructorReturn(this, (BraftEditor.__proto__ || Object.getPrototypeOf(BraftEditor)).call(this, props));

    _initialiseProps.call(_this);

    var editorState = _draftJs.EditorState.createEmpty(editorDecorators);
    _this.editorState = editorState;
    _this.contentState = editorState.getCurrentContent();
    _this.selectionState = editorState.getSelection();
    _this.mediaLibrary = new _MediaLibrary2.default();
    _this.isFocused = false;
    _this.instanceIndex = (0, _base.UniqueIndex)();

    _this.state = {
      tempColors: [],
      editorState: editorState,
      editorProps: {}
    };

    var browser = null;
    if (window.chrome) {
      browser = "chrome";
    } else if (window.safari) {
      browser = "safari";
    } else if (navigator.userAgent.indexOf("Firefox") > 0) {
      browser = "firefox";
    }

    if (!document.body.classList.contains("browser-" + browser)) {
      document.body.classList.add("browser-" + browser);
    }
    return _this;
  }

  _createClass(BraftEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.initialContent !== "undefined" && this.props.initialContent !== null) {
        this.setContent(this.props.initialContent);
        this.contentInitialized = true;
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.initialContent !== "undefined" && nextProps.initialContent !== null) {
        if (!this.contentInitialized) {
          this.contentInitialized = true;
          this.setContent(nextProps.initialContent, nextProps.contentFormat);
        } else if (nextProps.contentId !== this.props.contentId) {
          this.setContent(nextProps.initialContent, nextProps.contentFormat);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          controls = _props.controls,
          excludeControls = _props.excludeControls,
          extendControls = _props.extendControls,
          disabled = _props.disabled,
          height = _props.height,
          media = _props.media,
          language = _props.language,
          colors = _props.colors,
          fontSizes = _props.fontSizes,
          fontFamilies = _props.fontFamilies,
          emojis = _props.emojis,
          viewWrapper = _props.viewWrapper,
          placeholder = _props.placeholder,
          imageControls = _props.imageControls,
          lineHeights = _props.lineHeights,
          letterSpacings = _props.letterSpacings,
          indents = _props.indents,
          textAlignOptions = _props.textAlignOptions,
          allowSetTextBackgroundColor = _props.allowSetTextBackgroundColor,
          extendAtomics = _props.extendAtomics;


      controls = controls.filter(function (item) {
        return excludeControls.indexOf(item) === -1;
      });

      var tempColors = this.state.tempColors;

      language = _languages2.default[language] || _languages2.default[_options2.default.language];

      var externalMedias = media && media.externalMedias ? _extends({}, _options2.default.media.externalMedias, media.externalMedias) : _options2.default.media.externalMedias;

      media = _extends({}, _options2.default.media, media, { externalMedias: externalMedias });

      imageControls = imageControls ? _extends({}, _options2.default.imageControls, imageControls) : _options2.default.imageControls;

      viewWrapper = viewWrapper || ".BraftEditor-instance-" + this.instanceIndex;

      this.colorList = [].concat(_toConsumableArray(colors), _toConsumableArray(tempColors));
      this.fontSizeList = fontSizes;
      this.fontFamilyList = fontFamilies;
      this.lineHeightList = lineHeights;
      this.letterSpacingList = letterSpacings;
      this.indentList = indents;

      if (!media.uploadFn) {
        media.video = false;
        media.audio = false;
      }

      var controlBarProps = {
        editor: this,
        editorHeight: height,
        ref: function ref(instance) {
          return _this2.controlBarInstance = instance;
        },
        media: media, controls: controls, language: language, viewWrapper: viewWrapper, extendControls: extendControls, colors: colors, tempColors: tempColors, fontSizes: fontSizes, fontFamilies: fontFamilies,
        emojis: emojis, lineHeights: lineHeights, letterSpacings: letterSpacings, indents: indents, textAlignOptions: textAlignOptions, allowSetTextBackgroundColor: allowSetTextBackgroundColor
      };

      var blockRendererFn = (0, _renderers.getBlockRendererFn)({
        editor: this, imageControls: imageControls,
        language: language, viewWrapper: viewWrapper,
        extendAtomics: extendAtomics
      });

      var customStyleMap = (0, _renderers.getCustomStyleMap)({
        colors: [].concat(_toConsumableArray(colors), _toConsumableArray(tempColors)),
        fontSizes: fontSizes, fontFamilies: fontFamilies, lineHeights: lineHeights, letterSpacings: letterSpacings, indents: indents
      });

      var editorProps = _extends({
        ref: function ref(instance) {
          _this2.draftInstance = instance;
        },
        editorState: this.state.editorState,
        handleKeyCommand: this.handleKeyCommand,
        handleReturn: this.handleReturn,
        handleDrop: this.handleDrop,
        handleDroppedFiles: this.handleDroppedFiles,
        handlePastedText: this.handlePastedText,
        handlePastedFiles: this.handlePastedFiles,
        onChange: this.onChange,
        onTab: this.onTab,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        readOnly: disabled,
        customStyleMap: customStyleMap, blockStyleFn: _renderers.blockStyleFn, keyBindingFn: _keybindings2.default,
        blockRendererFn: blockRendererFn, blockRenderMap: blockRenderMap, placeholder: placeholder
      }, this.state.editorProps);

      return _react2.default.createElement(
        "div",
        { className: "BraftEditor-container BraftEditor-instance-" + this.instanceIndex + " " + (disabled ? "disabled" : "") },
        _react2.default.createElement(_ControlBar2.default, controlBarProps),
        _react2.default.createElement(
          "div",
          { className: "BraftEditor-content", style: height ? { height: height } : {} },
          _react2.default.createElement(_draftJs.Editor, editorProps)
        )
      );
    }
  }]);

  return BraftEditor;
}(_controller2.default);

BraftEditor.defaultProps = _extends({}, _options2.default, {
  onChange: null,
  onHTMLChange: null,
  onRawChange: null,
  onFocus: null,
  onBlur: null,
  onSave: null
});

BraftEditor.getContent = function (format, contentState) {
  var fontFamilies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  fontFamilies = fontFamilies || _options2.default.fontFamilies;

  if (format === "html") {
    return (0, _draftConvert.convertToHTML)((0, _convert.getToHTMLConfig)({ contentState: contentState, fontFamilies: fontFamilies }))(contentState);
  }
  return (0, _draftJs.convertToRaw)(contentState);
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChange = function (editorState) {
    _this3.editorState = editorState;
    _this3.contentState = editorState.getCurrentContent();
    _this3.selectionState = editorState.getSelection();
    _this3.setState({ editorState: editorState }, function () {
      clearTimeout(_this3.syncTimer);
      _this3.syncTimer = setTimeout(function () {
        var _props2 = _this3.props,
            onChange = _props2.onChange,
            onRawChange = _props2.onRawChange,
            onHTMLChange = _props2.onHTMLChange;

        onChange && onChange(BraftEditor.getContent("raw", _this3.contentState, _this3.props.fontFamilies));
        onHTMLChange && onHTMLChange(_this3.getHTMLContent());
        onRawChange && onRawChange(_this3.getRawContent());
      }, 300);
    });
  };

  this.getHTMLContent = function () {
    return BraftEditor.getContent("html", _this3.contentState, _this3.props.fontFamilies);
  };

  this.getRawContent = function () {
    return BraftEditor.getContent("raw", _this3.contentState, _this3.props.fontFamilies);
  };

  this.isEmpty = function () {
    return _this3.getHTMLContent() === "<p></p>";
  };

  this.getContentState = function () {
    return _this3.contentState;
  };

  this.getEditorState = function () {
    return _this3.editorState;
  };

  this.getDraftInstance = function () {
    return _this3.draftInstance;
  };

  this.getMediaLibraryInstance = function () {
    return _this3.mediaLibrary;
  };

  this.convertHTML = function (htmlString) {
    var fontFamilies = _this3.props.fontFamilies;

    return (0, _draftConvert.convertFromHTML)((0, _convert.getFromHTMLConfig)({ fontFamilies: fontFamilies }))(htmlString);
  };

  this.setContent = function (content, format) {
    var convertedContent = void 0;
    var newState = {};
    var _props3 = _this3.props,
        contentFormat = _props3.contentFormat,
        colors = _props3.colors;


    contentFormat = format || contentFormat || "raw";

    if (contentFormat === "html") {
      content = content || "";
      newState.tempColors = [].concat(_toConsumableArray(_this3.state.tempColors), _toConsumableArray((0, _colors.detectColorsFromHTML)(content))).filter(function (item) {
        return _this3.props.colors.indexOf(item) === -1;
      }).filter(function (item, index, array) {
        return array.indexOf(item) === index;
      });
      convertedContent = _this3.convertHTML(content);
    } else if (contentFormat === "raw") {
      if (!content || !content.blocks) {
        return false;
      }
      newState.tempColors = [].concat(_toConsumableArray(_this3.state.tempColors), _toConsumableArray((0, _colors.detectColorsFromRaw)(content))).filter(function (item) {
        return _this3.props.colors.indexOf(item) === -1;
      }).filter(function (item, index, array) {
        return array.indexOf(item) === index;
      });
      convertedContent = (0, _draftJs.convertFromRaw)(content);
    }

    newState.editorState = _draftJs.EditorState.createWithContent(convertedContent, editorDecorators);

    _this3.editorState = newState.editorState;
    _this3.contentState = newState.editorState.getCurrentContent();
    _this3.selectionState = newState.editorState.getSelection();

    _this3.setState(newState);

    return _this3;
  };

  this.setEditorProp = function (key, name) {
    _this3.setState({
      editorProps: _extends({}, _this3.state.editorProps, _defineProperty({}, key, name))
    });
    return _this3;
  };

  this.forceRender = function () {
    _this3.setState({
      editorState: _draftJs.EditorState.createWithContent(_this3.contentState, editorDecorators)
    });
    return _this3;
  };

  this.onTab = function (event) {
    var currentBlock = _this3.getSelectionBlock();
    var currentBlockType = currentBlock.getType();
    var tabIndents = _this3.props.tabIndents;

    if (currentBlockType === "code-block") {
      _this3.insertText(" ".repeat(tabIndents), false);
      event.preventDefault();
      return false;
    }

    if (_this3.props.onTab) {
      _this3.props.onTab(event);
    }
  };

  this.onFocus = function () {
    _this3.isFocused = true;
    if (_this3.props.onFocus) {
      _this3.props.onFocus();
    }
  };

  this.onBlur = function () {
    _this3.isFocused = false;
    if (_this3.props.onBlur) {
      _this3.props.onBlur();
    }
  };

  this.handleKeyCommand = function (command) {
    if (command === "braft-save") {
      if (_this3.props.onSave()) {
        _this3.props.onSave();
      }

      return "handled";
    }

    var nextEditorState = _draftJs.RichUtils.handleKeyCommand(_this3.editorState, command);

    if (nextEditorState) {
      _this3.onChange(nextEditorState);
      return "handled";
    }

    return "not-handled";
  };

  this.handleReturn = function (event) {

    var currentBlock = _this3.getSelectionBlock();
    var currentBlockType = currentBlock.getType();

    if (currentBlockType === "unordered-list-item" || currentBlockType === "ordered-list-item") {

      if (currentBlock.getLength() === 0) {
        _this3.toggleSelectionBlockType("unstyled");
        return true;
      }

      return false;
    } else if (currentBlockType === "code-block") {

      if (event.which === 13 && (event.getModifierState("Shift") || event.getModifierState("Alt") || event.getModifierState("Control"))) {
        _this3.toggleSelectionBlockType("unstyled");
        return true;
      }

      return false;
    }

    if (_this3.props.forceNewLine) {
      event.which = 13;
      event.getModifierState = function () {
        return true;
      };
    }

    var nextEditorState = (0, _draftjsUtils.handleNewLine)(_this3.state.editorState, event);

    if (nextEditorState) {
      _this3.onChange(nextEditorState);
      return true;
    }

    return false;
  };

  this.handleDrop = function (selectionState, dataTransfer, isInternal) {

    if (window.__BRAFT_DRAGING__IMAGE__) {

      _this3.removeBlock(window.__BRAFT_DRAGING__IMAGE__.block, selectionState);
      _this3.insertMedias([window.__BRAFT_DRAGING__IMAGE__.mediaData]);

      window.__BRAFT_DRAGING__IMAGE__ = null;
      _this3.setEditorProp("readOnly", false);
      return "handled";
    } else if (!dataTransfer || !dataTransfer.getText()) {
      return "handled";
    }

    return "not-handled";
  };

  this.handleDroppedFiles = function (selectionState, files) {

    if (files[0] && files[0].type.indexOf("image") > -1 && _this3.props.media && _this3.props.media.allowPasteImage !== false) {
      _this3.mediaLibrary.uploadImage(files[0], function (image) {
        return _this3.insertMedias([image]);
      });
      return "handled";
    }

    return "not-handled";
  };

  this.handlePastedFiles = function (files) {

    if (files[0] && files[0].type.indexOf("image") > -1 && _this3.props.media && _this3.props.media.allowPasteImage !== false) {
      _this3.mediaLibrary.uploadImage(files[0], function (image) {
        return _this3.insertMedias([image]);
      });
      return "handled";
    }

    return "not-handled";
  };

  this.handlePastedText = function (text, html) {
    if (!html) {
      return false;
    }

    var pasteMode = _this3.tmpPasteMode || _this3.props.pasteMode || "normal";

    if (pasteMode === "text") {
      _this3.tmpPasteMode = "normal";
      var tmpTextHolder = document.createElement("div");
      tmpTextHolder.innerHTML = html;
      return _this3.handlePastedText(text, tmpTextHolder.textContent || tmpTextHolder.innerText || "");
    }
    _this3.tmpPasteMode = null;

    var fontFamilies = _this3.props.fontFamilies;

    var blockMap = (0, _draftConvert.convertFromHTML)((0, _convert.getFromHTMLConfig)({ fontFamilies: fontFamilies }))(html || text).blockMap;
    var nextContentState = _draftJs.Modifier.replaceWithFragment(_this3.contentState, _this3.selectionState, blockMap);

    _this3.setState({
      tempColors: [].concat(_toConsumableArray(_this3.state.tempColors), _toConsumableArray((0, _colors.detectColorsFromHTML)(html))).filter(function (item) {
        return _this3.props.colors.indexOf(item) === -1;
      }).filter(function (item, index, array) {
        return array.indexOf(item) === index;
      })
    }, function () {
      _this3.onChange(_draftJs.EditorState.push(_this3.editorState, nextContentState, "insert-fragment"));
    });

    return true;
  };

  this.addTempColors = function (colors, callback) {

    _this3.setState({
      tempColors: [].concat(_toConsumableArray(_this3.state.tempColors), _toConsumableArray(colors)).filter(function (item) {
        return _this3.props.colors.indexOf(item) === -1;
      }).filter(function (item, index, array) {
        return array.indexOf(item) === index;
      })
    }, callback);
  };
};

exports.default = BraftEditor;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  base: {
    remove: 'Remove',
    cancel: 'Cancel',
    confirm: 'Confirm',
    inert: 'Insert',
    width: 'Width',
    height: 'Height'
  },
  controls: {
    clear: 'Clear',
    undo: 'Undo',
    redo: 'Redo',
    fontSize: 'Font Size',
    color: 'Color',
    textColor: 'Text',
    tempColors: 'Temp Colors',
    backgroundColor: 'Background',
    bold: 'Bold',
    lineHeight: 'Line Height',
    letterSpacing: 'Letter Spacing',
    indent: 'Indent at both ends',
    italic: 'Italic',
    underline: 'Underline',
    strikeThrough: 'Strike Through',
    fontFamily: 'Font Family',
    textAlign: 'Text Alignment',
    alignLeft: 'Left Alignment',
    alignCenter: 'Center Alignment',
    alignRight: 'Right Alignment',
    alignJustify: 'Justify Alignment',
    floatLeft: 'Left Float',
    floatRight: 'Right Float',
    superScript: 'Super Script',
    subScript: 'Sub Script',
    removeStyles: 'Remove Styles',
    headings: 'Headings',
    header: 'Header',
    normal: 'Normal',
    orderedList: 'Ordered List',
    unorderedList: 'Unordered List',
    blockQuote: 'Quote',
    code: 'Code',
    link: 'Link',
    unlink: 'Unlink',
    hr: 'Horizontal Line',
    media: 'Media',
    emoji: 'Emoji'
  },
  linkEditor: {
    inputPlaceHolder: 'Input link URL',
    inputWithEnterPlaceHolder: 'Input link URL and press Enter',
    openInNewWindow: 'Open in new window',
    removeLink: 'Remove Link'
  },
  audioPlayer: {
    title: 'Play Audio'
  },
  videoPlayer: {
    title: 'Play Video',
    embedTitle: 'Embed Media'
  },
  media: {
    image: 'Image',
    video: 'Video',
    audio: 'Audio',
    embed: 'Embed'
  },
  mediaPicker: {
    caption: 'Media Library',
    dragTip: 'Click Or Drag Files Here',
    dropTip: 'Drop To Upload',
    selectAll: 'Select All',
    deselect: 'Deselect',
    removeSelected: 'Remove Selected Items',
    externalInputPlaceHolder: 'Source Name|Source URL',
    externalInputTip: 'Split source name and source URL with "|", confirm by hit Enter.',
    addLocalFile: 'Add from local',
    addExternalSource: 'Add from Internet',
    unnamedItem: 'Unnamed Item',
    confirmInsert: 'Insert selected items'
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  base: {
    remove: '刪除',
    cancel: '取消',
    confirm: '確定',
    inert: '插入',
    width: '宽度',
    height: '高度'
  },
  controls: {
    clear: '清除内容',
    undo: '撤銷',
    redo: '重做',
    fontSize: '字號',
    color: '顏色',
    textColor: '文字顏色',
    backgroundColor: '背景顏色',
    tempColors: '臨時顏色',
    bold: '加粗',
    lineHeight: '行高',
    letterSpacing: '字間距',
    indent: '兩端縮進',
    border: '邊框',
    italic: '斜體',
    underline: '下劃線',
    strikeThrough: '刪除線',
    fontFamily: '字體',
    textAlign: '文本對齊',
    alignLeft: '居左',
    alignCenter: '居中',
    alignRight: '居右',
    alignJustify: '兩端對齊',
    floatLeft: '左浮動',
    floatRight: '右浮動',
    superScript: '上標',
    subScript: '下標',
    removeStyles: '清除样式',
    headings: '標題',
    header: '標題',
    normal: '常規',
    orderedList: '有序列表',
    unorderedList: '無序列表',
    blockQuote: '引用',
    code: '代碼',
    link: '鏈接',
    unlink: '清除鏈接',
    hr: '水平线',
    media: '媒體',
    emoji: '小表情'
  },
  linkEditor: {
    inputPlaceHolder: '輸入鏈接地址',
    inputWithEnterPlaceHolder: '輸入鏈接地址並回車',
    openInNewWindow: '在新窗口打開',
    removeLink: '移除鏈接'
  },
  audioPlayer: {
    title: '播放音頻文件'
  },
  videoPlayer: {
    title: '播放視頻文件',
    embedTitle: '嵌入式媒體'
  },
  media: {
    image: '圖像',
    video: '視頻',
    audio: '音頻',
    embed: '嵌入式媒體'
  },
  mediaPicker: {
    caption: '多媒體資源庫',
    dragTip: '點擊或拖動文件至此',
    dropTip: '鬆開鼠標以上傳',
    selectAll: '全選',
    deselect: '取消選择',
    removeSelected: '删除所選项目',
    externalInputPlaceHolder: '資源名稱|資源地址',
    externalInputTip: '以豎線符("|")分割資源名和資源地址，按回車確認',
    addLocalFile: '添加本地文件',
    addExternalSource: '添加網絡資源',
    unnamedItem: '未命名項目',
    confirmInsert: '插入所選項目'
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  base: {
    remove: '删除',
    cancel: '取消',
    confirm: '确定',
    inert: '插入',
    width: '宽度',
    height: '高度'
  },
  controls: {
    clear: '清除内容',
    undo: '撤销',
    redo: '重做',
    fontSize: '字号',
    lineHeight: '行高',
    letterSpacing: '字间距',
    indent: '两端缩进',
    border: '边框',
    color: '颜色',
    textColor: '文字颜色',
    backgroundColor: '背景颜色',
    tempColors: '临时颜色',
    bold: '加粗',
    italic: '斜体',
    underline: '下划线',
    strikeThrough: '删除线',
    fontFamily: '字体',
    textAlign: '文本对齐',
    alignLeft: '居左',
    alignCenter: '居中',
    alignRight: '居右',
    alignJustify: '两端',
    floatLeft: '左浮动',
    floatRight: '右浮动',
    superScript: '上标',
    subScript: '下标',
    removeStyles: '清除样式',
    headings: '标题',
    header: '标题',
    normal: '常规',
    orderedList: '有序列表',
    unorderedList: '无序列表',
    blockQuote: '引用',
    code: '代码',
    link: '链接',
    unlink: '清除链接',
    hr: '水平线',
    media: '媒体',
    emoji: '小表情'
  },
  linkEditor: {
    inputPlaceHolder: '输入链接地址',
    inputWithEnterPlaceHolder: '输入链接地址并回车',
    openInNewWindow: '在新窗口打开',
    removeLink: '移除链接'
  },
  audioPlayer: {
    title: '播放音频文件'
  },
  videoPlayer: {
    title: '播放视频文件',
    embedTitle: '嵌入式媒体'
  },
  media: {
    image: '图像',
    video: '视频',
    audio: '音频',
    embed: '嵌入式媒体'
  },
  mediaPicker: {
    caption: '多媒体资源库',
    dragTip: '点击或拖动文件至此',
    dropTip: '松开鼠标以上传',
    selectAll: '全选',
    deselect: '取消选择',
    removeSelected: '删除所选项目',
    externalInputPlaceHolder: '资源名称|资源地址',
    externalInputTip: '以竖线符("|")分割资源名和资源地址，按回车确认',
    addLocalFile: '添加本地文件',
    addExternalSource: '添加网络资源',
    unnamedItem: '未命名项目',
    confirmInsert: '插入所选项目'
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(63);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Audio = function (_React$Component) {
  _inherits(Audio, _React$Component);

  function Audio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Audio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Audio.__proto__ || Object.getPrototypeOf(Audio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toolbarVisible: false,
      playerVisible: false
    }, _this.showPlayer = function () {

      _this.playerModal = (0, _Modal.showModal)({
        title: _this.props.language.audioPlayer.title,
        width: 480,
        confirmable: true,
        language: _this.props.language,
        showCancel: false,
        onClose: _this.handlePlayerClose,
        onConfirm: _this.handlePlayerClose,
        children: _react2.default.createElement('audio', { className: 'braft-embed-audio-player', src: _this.props.mediaData.url, controls: true })
      });
    }, _this.removeAudio = function () {
      _this.props.editor.removeBlock(_this.props.block);
    }, _this.showToolbar = function () {
      _this.setState({
        toolbarVisible: true
      });
    }, _this.hideToolbar = function () {
      _this.setState({
        toolbarVisible: false
      });
    }, _this.handlePlayerClose = function () {
      _this.playerModal = null;
      _this.props.editor && _this.props.editor.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Audio, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.playerModal && this.playerModal.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          toolbarVisible = _state.toolbarVisible,
          playerVisible = _state.playerVisible;
      var _props = this.props,
          mediaData = _props.mediaData,
          language = _props.language;
      var url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name;


      return _react2.default.createElement(
        'div',
        {
          className: 'braft-media-audio-holder',
          onMouseOver: this.showToolbar,
          onMouseLeave: this.hideToolbar
        },
        _react2.default.createElement('i', { className: 'braft-icon-music' }),
        _react2.default.createElement(
          'h5',
          null,
          name
        ),
        _react2.default.createElement(
          'h6',
          null,
          url
        ),
        toolbarVisible ? _react2.default.createElement(
          'div',
          {
            ref: function ref(instance) {
              return _this2.toolbarElement = instance;
            },
            className: 'braft-embed-audio-toolbar'
          },
          _react2.default.createElement(
            'a',
            { onClick: this.showPlayer },
            '\uE037'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.removeAudio },
            '\uE9AC'
          )
        ) : null
      );
    }
  }]);

  return Audio;
}(_react2.default.Component);

exports.default = Audio;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(64);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Embed = function (_React$Component) {
  _inherits(Embed, _React$Component);

  function Embed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Embed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Embed.__proto__ || Object.getPrototypeOf(Embed)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toolbarVisible: false,
      playerVisible: false
    }, _this.showPlayer = function () {
      var url = _this.props.mediaData.url;


      _this.playerModal = (0, _Modal.showModal)({
        title: _this.props.language.videoPlayer.embedTitle,
        confirmable: true,
        language: _this.props.language,
        showCancel: false,
        onClose: _this.handlePlayerClose,
        children: _react2.default.createElement('div', { className: 'braft-embed-media-player', dangerouslySetInnerHTML: { __html: url } })
      });
    }, _this.removeEmbed = function () {
      _this.props.editor.removeBlock(_this.props.block);
    }, _this.showToolbar = function () {
      _this.setState({
        toolbarVisible: true
      });
    }, _this.hideToolbar = function () {
      _this.setState({
        toolbarVisible: false
      });
    }, _this.handlePlayerClose = function () {
      _this.props.editor && _this.props.editor.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Embed, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.playerModal && this.playerModal.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          toolbarVisible = _state.toolbarVisible,
          playerVisible = _state.playerVisible;
      var _props = this.props,
          mediaData = _props.mediaData,
          language = _props.language;
      var url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name;


      return _react2.default.createElement(
        'div',
        {
          className: 'braft-media-video-holder',
          onMouseOver: this.showToolbar,
          onMouseLeave: this.hideToolbar
        },
        _react2.default.createElement('i', { className: 'braft-icon-code' }),
        _react2.default.createElement(
          'h5',
          null,
          name
        ),
        _react2.default.createElement(
          'h6',
          null,
          url
        ),
        toolbarVisible ? _react2.default.createElement(
          'div',
          {
            ref: function ref(instance) {
              return _this2.toolbarElement = instance;
            },
            className: 'braft-embed-video-toolbar'
          },
          _react2.default.createElement(
            'a',
            { onClick: this.showPlayer },
            '\uE037'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.removeEmbed },
            '\uE9AC'
          )
        ) : null
      );
    }
  }]);

  return Embed;
}(_react2.default.Component);

exports.default = Embed;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalLine = function (_React$Component) {
  _inherits(HorizontalLine, _React$Component);

  function HorizontalLine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HorizontalLine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HorizontalLine.__proto__ || Object.getPrototypeOf(HorizontalLine)).call.apply(_ref, [this].concat(args))), _this), _this.removeHorizontalLine = function () {
      _this.props.editor.removeBlock(_this.props.block);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HorizontalLine, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'braft-horizontal-line' },
        _react2.default.createElement(
          'div',
          { className: 'braft-horizontal-line-toolbar' },
          _react2.default.createElement(
            'a',
            { onClick: this.removeHorizontalLine },
            '\uE9AC'
          )
        )
      );
    }
  }]);

  return HorizontalLine;
}(_react2.default.Component);

exports.default = HorizontalLine;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(66);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switch = __webpack_require__(7);

var _Switch2 = _interopRequireDefault(_Switch);

var _constants = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toolbarVisible: false,
      toolbarOffset: 0,
      linkEditorVisible: false,
      sizeEditorVisible: false,
      tempLink: null,
      tempWidth: null,
      tempHeight: null
    }, _this.custom = function () {
      _this.props.imageControls.custom.fn(_this.imageElement, _this.props.block._map._root.entries[0][1]);
    }, _this.handleDragStart = function (event) {

      window.__BRAFT_DRAGING__IMAGE__ = {
        block: _this.props.block,
        mediaData: _extends({
          type: 'IMAGE'
        }, _this.props.mediaData)
      };

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.props.editor.setEditorProp('readOnly', false);
      });

      return true;
    }, _this.handleDragEnd = function (event) {

      window.__BRAFT_DRAGING__IMAGE__ = null;
      return false;
    }, _this.removeImage = function (e) {
      _this.props.editor.removeBlock(_this.props.block);
      _this.props.editor.setEditorProp('readOnly', false);
    }, _this.toggleLinkEditor = function () {
      _this.setState({
        linkEditorVisible: !_this.state.linkEditorVisible,
        sizeEditorVisible: false
      });
    }, _this.toggleSizeEditor = function () {
      _this.setState({
        linkEditorVisible: false,
        sizeEditorVisible: !_this.state.sizeEditorVisible
      });
    }, _this.handleLinkInputKeyDown = function (e) {

      if (e.keyCode === 13) {
        _this.confirmImageLink();
      } else {
        return;
      }
    }, _this.setImageLink = function (e) {

      _this.setState({
        tempLink: e.currentTarget.value
      });

      return;
    }, _this.confirmImageLink = function () {
      var link = _this.state.tempLink;


      if (link !== null) {
        _this.props.editor.setMediaData(_this.props.entityKey, { link: link });
        window.setImmediate(_this.props.editor.forceRender);
      }
    }, _this.handleSizeInputKeyDown = function (e) {

      if (e.keyCode === 13) {
        _this.confirmImageSize();
      } else {
        return;
      }
    }, _this.setImageWidth = function (_ref2) {
      var currentTarget = _ref2.currentTarget;
      var value = currentTarget.value;


      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempWidth: value
      });

      return;
    }, _this.setImageHeight = function (_ref3) {
      var currentTarget = _ref3.currentTarget;
      var value = currentTarget.value;


      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempHeight: value
      });

      return;
    }, _this.confirmImageSize = function () {
      var _this$state = _this.state,
          width = _this$state.tempWidth,
          height = _this$state.tempHeight;

      var newImageSize = {};

      width !== null && (newImageSize.width = width);
      height !== null && (newImageSize.height = height);

      _this.props.editor.setMediaData(_this.props.entityKey, newImageSize);
      window.setImmediate(_this.props.editor.forceRender);
    }, _this.setImageFloat = function (e) {
      var float = e.currentTarget.dataset.float;

      _this.props.editor.setMediaPosition(_this.props.block, { float: float });
      _this.props.editor.setEditorProp('readOnly', false);
    }, _this.setImageAlignment = function (e) {
      var alignment = e.currentTarget.dataset.alignment;

      _this.props.editor.setMediaPosition(_this.props.block, { alignment: alignment });
      _this.props.editor.setEditorProp('readOnly', false);
    }, _this.showToolbar = function (event) {

      event.preventDefault();

      if (!_this.state.toolbarVisible) {
        _this.setState({
          toolbarVisible: true
        }, function () {
          _this.props.editor.setEditorProp('readOnly', true);
          _this.setState({
            toolbarOffset: _this.calcToolbarOffset()
          });
        });
      }
    }, _this.hideToolbar = function (event) {

      event.preventDefault();

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.props.editor.setEditorProp('readOnly', false);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          mediaData = _props.mediaData,
          language = _props.language,
          imageControls = _props.imageControls;
      var _state = this.state,
          toolbarVisible = _state.toolbarVisible,
          toolbarOffset = _state.toolbarOffset,
          linkEditorVisible = _state.linkEditorVisible,
          sizeEditorVisible = _state.sizeEditorVisible;

      var blockData = this.props.block.getData();

      var float = blockData.get('float');
      var alignment = blockData.get('alignment');
      var url = mediaData.url,
          link = mediaData.link,
          link_target = mediaData.link_target,
          width = mediaData.width,
          height = mediaData.height;

      var imageStyles = {};
      var clearFix = false;

      if (float) {
        alignment = null;
      } else if (alignment === 'left') {
        imageStyles.float = 'left';
        clearFix = true;
      } else if (alignment === 'right') {
        imageStyles.float = 'right';
        clearFix = true;
      } else if (alignment === 'center') {
        imageStyles.textAlign = "center";
      } else {
        imageStyles.float = 'left';
        clearFix = true;
      }

      return _react2.default.createElement(
        'div',
        { className: 'braft-media-embeder braft-image-embeder' },
        _react2.default.createElement(
          'div',
          {
            style: imageStyles,
            draggable: true,
            onMouseEnter: this.showToolbar,
            onMouseMove: this.showToolbar,
            onMouseLeave: this.hideToolbar,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            ref: function ref(instance) {
              return _this2.mediaEmbederInstance = instance;
            },
            className: 'braft-embed-image'
          },
          toolbarVisible ? _react2.default.createElement(
            'div',
            {
              style: { marginLeft: toolbarOffset },
              ref: function ref(instance) {
                return _this2.toolbarElement = instance;
              },
              'data-float': float,
              'data-alignment': alignment,
              className: 'braft-embed-image-toolbar'
            },
            linkEditorVisible ? _react2.default.createElement(
              'div',
              { className: 'braft-embed-image-link-editor' },
              _react2.default.createElement(
                'div',
                { className: 'editor-input-group' },
                _react2.default.createElement('input', { type: 'text', placeholder: language.linkEditor.inputWithEnterPlaceHolder, onKeyDown: this.handleLinkInputKeyDown, onChange: this.setImageLink, defaultValue: link }),
                _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.confirmImageLink },
                  language.base.confirm
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'switch-group' },
                _react2.default.createElement(_Switch2.default, {
                  active: link_target === '_blank',
                  onClick: function onClick() {
                    return _this2.setImageLinkTarget(link_target);
                  }
                }),
                _react2.default.createElement(
                  'label',
                  null,
                  language.linkEditor.openInNewWindow
                )
              )
            ) : null,
            sizeEditorVisible ? _react2.default.createElement(
              'div',
              { className: 'braft-embed-image-size-editor' },
              _react2.default.createElement(
                'div',
                { className: 'editor-input-group' },
                _react2.default.createElement('input', { type: 'text', placeholder: language.base.width, onKeyDown: this.handleSizeInputKeyDown, onChange: this.setImageWidth, defaultValue: width }),
                _react2.default.createElement('input', { type: 'text', placeholder: language.base.height, onKeyDown: this.handleSizeInputKeyDown, onChange: this.setImageHeight, defaultValue: height }),
                _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.confirmImageSize },
                  language.base.confirm
                )
              )
            ) : null,
            imageControls.floatLeft ? _react2.default.createElement(
              'a',
              { 'data-float': 'left', onClick: this.setImageFloat },
              '\uE91E'
            ) : null,
            imageControls.floatRight ? _react2.default.createElement(
              'a',
              { 'data-float': 'right', onClick: this.setImageFloat },
              '\uE914'
            ) : null,
            imageControls.alignLeft ? _react2.default.createElement(
              'a',
              { 'data-alignment': 'left', onClick: this.setImageAlignment },
              '\uE027'
            ) : null,
            imageControls.alignCenter ? _react2.default.createElement(
              'a',
              { 'data-alignment': 'center', onClick: this.setImageAlignment },
              '\uE028'
            ) : null,
            imageControls.alignRight ? _react2.default.createElement(
              'a',
              { 'data-alignment': 'right', onClick: this.setImageAlignment },
              '\uE029'
            ) : null,
            imageControls.size ? _react2.default.createElement(
              'a',
              { onClick: this.toggleSizeEditor },
              '\uE3C2'
            ) : null,
            imageControls.link ? _react2.default.createElement(
              'a',
              { className: link ? 'active' : '', onClick: this.toggleLinkEditor },
              '\uE91A'
            ) : null,
            _react2.default.createElement(
              'a',
              { onClick: this.custom },
              '\u8BC6\u522B'
            ),
            imageControls.remove ? _react2.default.createElement(
              'a',
              { onClick: this.removeImage },
              '\uE9AC'
            ) : null,
            _react2.default.createElement('i', { style: { marginLeft: toolbarOffset * -1 }, className: 'braft-embed-image-toolbar-arrow' })
          ) : null,
          _react2.default.createElement('img', {
            ref: function ref(instance) {
              return _this2.imageElement = instance;
            },
            src: url, style: { width: width, height: height }, width: width, height: height
          })
        ),
        clearFix && _react2.default.createElement('div', { className: 'clearfix', style: { clear: 'both', height: 0, lineHeight: 0, float: 'none' } })
      );
    }
  }, {
    key: 'calcToolbarOffset',
    value: function calcToolbarOffset() {

      var viewRect = null;

      if (this.props.viewWrapper) {
        viewRect = document.querySelector(this.props.viewWrapper).getBoundingClientRect();
      } else {
        viewRect = document.body.getBoundingClientRect();
      }

      var toolbarRect = this.toolbarElement.getBoundingClientRect();
      var imageRect = this.imageElement.getBoundingClientRect();
      var right = imageRect.right - imageRect.width / 2 + toolbarRect.width / 2;
      var left = imageRect.left + imageRect.width / 2 - toolbarRect.width / 2;

      right = viewRect.right - right;
      left = left - viewRect.left;

      if (right < 10) {
        return right - 10;
      } else if (left < 10) {
        return left * -1 + 10;
      } else {
        return 0;
      }
    }
  }, {
    key: 'setImageLinkTarget',
    value: function setImageLinkTarget(link_target) {

      link_target = link_target === '_blank' ? '' : '_blank';
      this.props.editor.setMediaData(this.props.entityKey, { link_target: link_target });
      window.setImmediate(this.props.editor.forceRender);
    }
  }]);

  return Image;
}(_react2.default.Component);

exports.default = Image;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(67);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toolbarVisible: false,
      playerVisible: false
    }, _this.showPlayer = function () {
      var _this$props$mediaData = _this.props.mediaData,
          url = _this$props$mediaData.url,
          meta = _this$props$mediaData.meta;


      _this.playerModal = (0, _Modal.showModal)({
        title: _this.props.language.videoPlayer.title,
        width: 480,
        confirmable: true,
        language: _this.props.language,
        showCancel: false,
        onClose: _this.handlePlayerClose,
        children: _react2.default.createElement('video', { poster: meta && meta.poster ? meta.poster : '', className: 'braft-embed-video-player', src: url, controls: true })
      });
    }, _this.removeVideo = function () {
      _this.props.editor.removeBlock(_this.props.block);
    }, _this.showToolbar = function () {
      _this.setState({
        toolbarVisible: true
      });
    }, _this.hideToolbar = function () {
      _this.setState({
        toolbarVisible: false
      });
    }, _this.handlePlayerClose = function () {
      _this.props.editor && _this.props.editor.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Video, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.playerModal && this.playerModal.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          toolbarVisible = _state.toolbarVisible,
          playerVisible = _state.playerVisible;
      var _props = this.props,
          mediaData = _props.mediaData,
          language = _props.language;
      var url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name,
          meta = mediaData.meta;


      return _react2.default.createElement(
        'div',
        {
          className: 'braft-media-video-holder',
          onMouseOver: this.showToolbar,
          onMouseLeave: this.hideToolbar
        },
        meta && meta.poster ? _react2.default.createElement('img', { className: 'braft-media-video-poster', src: meta.poster }) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'braft-icon-film' }),
          _react2.default.createElement(
            'h5',
            null,
            name
          ),
          _react2.default.createElement(
            'h6',
            null,
            url
          )
        ),
        toolbarVisible ? _react2.default.createElement(
          'div',
          {
            ref: function ref(instance) {
              return _this2.toolbarElement = instance;
            },
            className: 'braft-embed-video-toolbar'
          },
          _react2.default.createElement(
            'a',
            { onClick: this.showPlayer },
            '\uE037'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.removeVideo },
            '\uE9AC'
          )
        ) : null
      );
    }
  }]);

  return Video;
}(_react2.default.Component);

exports.default = Video;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleStrategy(contentBlock, callback, contentState) {

  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

var Link = function Link(props) {
  var children = props.children,
      entityKey = props.entityKey,
      contentState = props.contentState;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      href = _contentState$getEnti.href,
      target = _contentState$getEnti.target;

  return _react2.default.createElement(
    'span',
    { className: 'braft-link-wrap' },
    _react2.default.createElement(
      'a',
      { onClick: function onClick(event) {
          return viewLink(event, href);
        }, className: 'braft-link', href: href, target: target },
      children
    )
  );
};

var viewLink = function viewLink(event, link) {
  if (event.getModifierState('Shift')) {
    var tempLink = document.createElement('a');
    tempLink.href = link;
    tempLink.target = '_blank';
    tempLink.click();
  }
};

exports.default = {
  strategy: handleStrategy,
  component: Link
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Link = __webpack_require__(43);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_Link2.default];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockStyleFn;
function blockStyleFn(block) {

  var blockAlignment = block.getData() && block.getData().get('textAlign');
  var blockFloat = block.getData() && block.getData().get('float');

  var result = null;

  if (blockAlignment) {
    result = 'braft-' + blockAlignment + '-aligned-block';
  }

  if (blockFloat) {
    result += ' braft-float-' + blockFloat;
  }

  return result;
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {

  var colorStyles = {};
  var bgColorStyles = {};
  var fontSizeStyles = {};
  var fontFamilyStyles = {};
  var lineHeightStyles = {};
  var letterSpacingtStyles = {};
  var indentStyles = {};

  props.colors.forEach(function (color) {
    var color_id = color.replace('#', '').toUpperCase();
    colorStyles['COLOR-' + color_id] = { color: color };
    bgColorStyles['BGCOLOR-' + color_id] = { backgroundColor: color };
  });

  props.fontSizes.forEach(function (fontSize) {
    fontSizeStyles['FONTSIZE-' + fontSize] = { fontSize: fontSize };
  });

  props.fontFamilies.forEach(function (fontFamily) {
    fontFamilyStyles['FONTFAMILY-' + fontFamily.name.toUpperCase()] = {
      fontFamily: fontFamily.family
    };
  });

  props.lineHeights.forEach(function (lineHeight) {
    lineHeightStyles['LINEHEIGHT-' + lineHeight] = { lineHeight: lineHeight };
  });

  props.letterSpacings.forEach(function (letterSpacing) {
    letterSpacingtStyles['LETTERSPACING-' + letterSpacing] = { letterSpacing: letterSpacing };
  });
  props.indents.forEach(function (indent) {
    indentStyles['INDENT-' + indent] = { paddingLeft: indent, paddingRight: indent };
  });

  return _extends({
    'SUPERSCRIPT': {
      position: 'relative',
      top: '-8px',
      fontSize: '11px'
    },
    'SUBSCRIPT': {
      position: 'relative',
      bottom: '-8px',
      fontSize: '11px'
    }
  }, colorStyles, bgColorStyles, fontSizeStyles, fontFamilyStyles, lineHeightStyles, letterSpacingtStyles, indentStyles);
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.Immutable = factory();
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step > 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    findEntry: function(predicate, context) {
      var found;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findLastEntry: function(predicate, context) {
      return this.toSeq().reverse().findEntry(predicate, context);
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  // Temporary warning about using length
  (function () {
    try {
      Object.defineProperty(IterablePrototype, 'length', {
        get: function () {
          if (!Iterable.noLengthWarning) {
            var stack;
            try {
              throw new Error();
            } catch (error) {
              stack = error.stack;
            }
            if (stack.indexOf('_wrapObject') === -1) {
              console && console.warn && console.warn(
                'iterable.length has been deprecated, '+
                'use iterable.size or iterable.count(). '+
                'This warning will become a silent error in a future version. ' +
                stack
              );
              return this.size;
            }
          }
        }
      });
    } catch (e) {}
  })();



  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLastKey: function(predicate, context) {
      return this.toSeq().reverse().findKey(predicate, context);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    lastKeyOf: function(searchValue) {
      return this.findLastKey(function(value ) {return is(value, searchValue)});
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.toKeyedSeq().keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.toKeyedSeq().reverse().keyOf(searchValue);
      return key === undefined ? -1 : key;

      // var index =
      // return this.toSeq().reverse().indexOf(searchValue);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var key = this.toKeyedSeq().findLastKey(predicate, context);
      return key === undefined ? -1 : key;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : value;
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ })
/******/ ]);
});