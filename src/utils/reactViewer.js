(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-viewer"] = factory(require("react"), require("react-dom"));
	else
		root["react-viewer"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Viewer = __webpack_require__(4);

	var _Viewer2 = _interopRequireDefault(_Viewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Viewer2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.ActionType = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ActionType = exports.ActionType = undefined;
	(function (ActionType) {
	    ActionType[ActionType["zoomIn"] = 1] = "zoomIn";
	    ActionType[ActionType["zoomOut"] = 2] = "zoomOut";
	    ActionType[ActionType["prev"] = 3] = "prev";
	    ActionType[ActionType["next"] = 4] = "next";
	    ActionType[ActionType["rotateLeft"] = 5] = "rotateLeft";
	    ActionType[ActionType["rotateRight"] = 6] = "rotateRight";
	    ActionType[ActionType["reset"] = 7] = "reset";
	    ActionType[ActionType["close"] = 8] = "close";
	    ActionType[ActionType["scaleX"] = 9] = "scaleX";
	    ActionType[ActionType["scaleY"] = 10] = "scaleY";
	})(ActionType || (exports.ActionType = ActionType = {}));

	var Icon = function (_React$Component) {
	    _inherits(Icon, _React$Component);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }

	    Icon.prototype.render = function render() {
	        var prefixCls = 'react-viewer-icon';
	        return React.createElement("i", { className: prefixCls + " " + prefixCls + "-" + ActionType[this.props.type] });
	    };

	    return Icon;
	}(React.Component);

	exports.default = Icon;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Loading = function (_React$Component) {
	    _inherits(Loading, _React$Component);

	    function Loading() {
	        _classCallCheck(this, Loading);

	        return _possibleConstructorReturn(this, _React$Component.call(this));
	    }

	    Loading.prototype.render = function render() {
	        var cls = 'spin spin-spinning';
	        return React.createElement(
	            'div',
	            { className: 'spin-wrap', style: this.props.style },
	            React.createElement(
	                'div',
	                { className: cls },
	                React.createElement('div', { className: 'spin-dot' })
	            )
	        );
	    };

	    return Loading;
	}(React.Component);

	exports.default = Loading;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _reactDom = __webpack_require__(10);

	var ReactDOM = _interopRequireWildcard(_reactDom);

	var _ViewerCore = __webpack_require__(6);

	var _ViewerCore2 = _interopRequireDefault(_ViewerCore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Viewer = function (_React$Component) {
	    _inherits(Viewer, _React$Component);

	    function Viewer() {
	        _classCallCheck(this, Viewer);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	        _this.container = null;
	        _this.defaultContainer = document.createElement('div');
	        _this.component = null;
	        return _this;
	    }

	    Viewer.prototype.renderViewer = function renderViewer() {
	        var _this2 = this;

	        if (this.props.visible || this.component) {
	            (function () {
	                if (!_this2.container) {
	                    if (_this2.props.container) {
	                        _this2.container = _this2.props.container;
	                    } else {
	                        _this2.container = _this2.defaultContainer;
	                        document.body.appendChild(_this2.container);
	                    }
	                }
	                var instance = _this2;
	                ReactDOM.unstable_renderSubtreeIntoContainer(_this2, React.createElement(_ViewerCore2.default, _this2.props), _this2.container, function () {
	                    instance.component = this;
	                });
	            })();
	        }
	    };

	    Viewer.prototype.removeViewer = function removeViewer() {
	        if (this.container) {
	            var container = this.container;
	            ReactDOM.unmountComponentAtNode(container);
	            container.parentNode.removeChild(container);
	            this.container = null;
	            this.component = null;
	        }
	    };

	    Viewer.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.props.visible) {
	            this.props.onClose();
	            this.removeViewer();
	        } else {
	            this.removeViewer();
	        }
	    };

	    Viewer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.props.container !== nextProps.container) {
	            this.component = null;
	            if (nextProps.container) {
	                if (this.container) {
	                    document.body.removeChild(this.container);
	                }
	                this.container = nextProps.container;
	            } else {
	                this.container = this.defaultContainer;
	                document.body.appendChild(this.container);
	            }
	        }
	    };

	    Viewer.prototype.componentDidMount = function componentDidMount() {
	        this.renderViewer();
	    };

	    Viewer.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.renderViewer();
	    };

	    Viewer.prototype.render = function render() {
	        return null;
	    };

	    return Viewer;
	}(React.Component);

	exports.default = Viewer;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _Loading = __webpack_require__(3);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ViewerCanvas = function (_React$Component) {
	    _inherits(ViewerCanvas, _React$Component);

	    function ViewerCanvas() {
	        _classCallCheck(this, ViewerCanvas);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	        _this.handleResize = function (e) {
	            _this.props.onResize();
	        };
	        _this.handleCanvasMouseDown = function (e) {
	            _this.props.onCanvasMouseDown(e);
	            _this.handleMouseDown(e);
	        };
	        _this.state = {
	            isMouseDown: false,
	            mouseX: 0,
	            mouseY: 0
	        };
	        _this.handleMouseScroll = _this.handleMouseScroll.bind(_this);
	        _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	        _this.bindEvent = _this.bindEvent.bind(_this);
	        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	        _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	        return _this;
	    }

	    ViewerCanvas.prototype.componentDidMount = function componentDidMount() {
	        if (this.props.drag) {
	            this.bindEvent();
	        }
	    };

	    ViewerCanvas.prototype.handleMouseDown = function handleMouseDown(e) {
	        if (!this.props.visible || !this.props.drag) {
	            return;
	        }
	        e.preventDefault();
	        e.stopPropagation();
	        this.setState({
	            isMouseDown: true,
	            mouseX: e.nativeEvent.pageX,
	            mouseY: e.nativeEvent.pageY
	        });
	    };

	    ViewerCanvas.prototype.handleMouseMove = function handleMouseMove(e) {
	        if (this.state.isMouseDown) {
	            var diffX = e.x - this.state.mouseX;
	            var diffY = e.y - this.state.mouseY;
	            this.setState({
	                mouseX: e.x,
	                mouseY: e.y
	            });
	            this.props.onChangeImgState(this.props.width, this.props.height, this.props.top + diffY, this.props.left + diffX);
	        }
	    };

	    ViewerCanvas.prototype.handleMouseUp = function handleMouseUp(e) {
	        this.setState({
	            isMouseDown: false
	        });
	    };

	    ViewerCanvas.prototype.handleMouseScroll = function handleMouseScroll(e) {
	        var direct = 0;
	        if (e.wheelDelta) {
	            direct = e.wheelDelta > 0 ? 1 : -1;
	        } else if (e.detail) {
	            direct = e.detail > 0 ? 1 : -1;
	        }
	        if (direct !== 0) {
	            var pageX = e.pageX;
	            var pageY = e.pageY;
	            this.props.onZoom(pageX, pageY, direct, .05);
	        }
	    };

	    ViewerCanvas.prototype.bindEvent = function bindEvent(remove) {
	        var funcName = 'addEventListener';
	        if (remove) {
	            funcName = 'removeEventListener';
	        }
	        document[funcName]('mousewheel', this.handleMouseScroll, false);
	        document[funcName]('click', this.handleMouseUp, false);
	        document[funcName]('mousemove', this.handleMouseMove, false);
	        window[funcName]('resize', this.handleResize, false);
	    };

	    ViewerCanvas.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!this.props.visible && nextProps.visible) {
	            if (nextProps.drag) {
	                return this.bindEvent();
	            }
	        }
	        if (this.props.visible && !nextProps.visible) {
	            this.handleMouseUp({});
	            if (nextProps.drag) {
	                return this.bindEvent(true);
	            }
	        }
	        if (this.props.drag && !nextProps.drag) {
	            return this.bindEvent(true);
	        }
	        if (!this.props.drag && nextProps.drag) {
	            if (nextProps.visible) {
	                return this.bindEvent(true);
	            }
	        }
	    };

	    ViewerCanvas.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.bindEvent(true);
	    };

	    ViewerCanvas.prototype.render = function render() {
	        var imgStyle = {
	            width: this.props.width + 'px',
	            height: this.props.height + 'px',
	            marginTop: this.props.top + 'px',
	            marginLeft: this.props.left ? this.props.left + 'px' : 'auto',
	            transform: 'rotate(' + this.props.rotate + 'deg) scaleX(' + this.props.scaleX + ') scaleY(' + this.props.scaleY + ')'
	        };
	        var imgClass = this.props.drag ? 'drag' : '';
	        if (!this.state.isMouseDown) {
	            imgClass += ' ' + this.props.prefixCls + '-image-transition';
	        }
	        var style = {
	            zIndex: this.props.zIndex
	        };
	        var imgNode = null;
	        if (this.props.imgSrc !== '') {
	            imgNode = React.createElement('img', { className: imgClass, src: this.props.imgSrc, style: imgStyle, onMouseDown: this.handleMouseDown });
	        }
	        if (this.props.loading) {
	            imgNode = React.createElement(_Loading2.default, { style: {
	                    marginTop: this.props.top,
	                    marginLeft: this.props.left
	                } });
	        }
	        return React.createElement(
	            'div',
	            { className: this.props.prefixCls + '-canvas', onMouseDown: this.handleCanvasMouseDown, style: style },
	            imgNode
	        );
	    };

	    return ViewerCanvas;
	}(React.Component);

	exports.default = ViewerCanvas;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	__webpack_require__(9);

	var _ViewerCanvas = __webpack_require__(5);

	var _ViewerCanvas2 = _interopRequireDefault(_ViewerCanvas);

	var _ViewerNav = __webpack_require__(7);

	var _ViewerNav2 = _interopRequireDefault(_ViewerNav);

	var _ViewerToolbar = __webpack_require__(8);

	var _ViewerToolbar2 = _interopRequireDefault(_ViewerToolbar);

	var _Icon = __webpack_require__(2);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function noop() {}
	var transitionDuration = 300;

	var ViewerCore = function (_React$Component) {
	    _inherits(ViewerCore, _React$Component);

	    function ViewerCore(props) {
	        _classCallCheck(this, ViewerCore);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	        _this.handleTransitionEnd = function (e) {
	            if (!_this.state.transitionEnd || _this.state.visibleStart) {
	                _this.setState({
	                    visibleStart: false,
	                    transitionEnd: true
	                });
	            }
	        };
	        _this.handleCanvasMouseDown = function (e) {
	            _this.props.onMaskClick(e);
	        };
	        _this.prefixCls = 'react-viewer';
	        _this.state = {
	            visible: false,
	            visibleStart: false,
	            transitionEnd: false,
	            activeIndex: _this.props.activeIndex,
	            width: 0,
	            height: 0,
	            top: 15,
	            left: null,
	            rotate: 0,
	            imageWidth: 0,
	            imageHeight: 0,
	            scaleX: 1,
	            scaleY: 1,
	            loading: false
	        };
	        _this.handleChangeImg = _this.handleChangeImg.bind(_this);
	        _this.handleChangeImgState = _this.handleChangeImgState.bind(_this);
	        _this.handleAction = _this.handleAction.bind(_this);
	        _this.handleResize = _this.handleResize.bind(_this);
	        _this.handleZoom = _this.handleZoom.bind(_this);
	        _this.handleRotate = _this.handleRotate.bind(_this);
	        _this.handleKeydown = _this.handleKeydown.bind(_this);
	        _this.handleScaleX = _this.handleScaleX.bind(_this);
	        _this.handleScaleY = _this.handleScaleY.bind(_this);
	        _this.getImageCenterXY = _this.getImageCenterXY.bind(_this);
	        _this.setContainerWidthHeight();
	        _this.footerHeight = 84;
	        return _this;
	    }

	    ViewerCore.prototype.setContainerWidthHeight = function setContainerWidthHeight() {
	        this.containerWidth = window.innerWidth;
	        this.containerHeight = window.innerHeight;
	        if (this.props.container) {
	            this.containerWidth = this.props.container.offsetWidth;
	            this.containerHeight = this.props.container.offsetHeight;
	        }
	    };

	    ViewerCore.prototype.handleClose = function handleClose(e) {
	        this.props.onClose();
	        this.setState({
	        	activeIndex:0
			})
	    };

	    ViewerCore.prototype.startVisible = function startVisible(activeIndex) {
	        var _this2 = this;

	        this.setState({
	            visibleStart: true
	        });
	        setTimeout(function () {
	            _this2.setState({
	                visible: true
	            });
	            setTimeout(function () {
	                _this2.bindEvent();
	                _this2.loadImg(activeIndex, true);
	            }, 300);
	        }, 10);
	    };

	    ViewerCore.prototype.componentDidMount = function componentDidMount() {
	        this.refs['viewerCore'].addEventListener('transitionend', this.handleTransitionEnd, false);
	        this.startVisible(this.state.activeIndex);
	    };

	    ViewerCore.prototype.getImgWidthHeight = function getImgWidthHeight(imgWidth, imgHeight) {
	        var width = 0;
	        var height = 0;
	        var maxWidth = this.containerWidth * .8;
	        var maxHeight = (this.containerHeight - this.footerHeight) * .8;
	        width = Math.min(maxWidth, imgWidth);
	        height = width / imgWidth * imgHeight;
	        if (height > maxHeight) {
	            height = maxHeight;
	            width = height / imgHeight * imgWidth;
	        }
	        return [width, height];
	    };

	    ViewerCore.prototype.loadImg = function loadImg(activeIndex) {
	        var _this3 = this;

	        var firstLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        var imgSrc = '';
	        var images = this.props.images || [];
	        if (images.length > 0) {
	            imgSrc = images[activeIndex].src;
	        }
	        var img = new Image();
	        img.src = imgSrc;
	        if (firstLoad) {
	            this.setState({
	                activeIndex: activeIndex,
	                width: 0,
	                height: 0,
	                left: this.containerWidth / 2,
	                top: (this.containerHeight - this.footerHeight) / 2,
	                rotate: 0,
	                scaleX: 1,
	                scaleY: 1,
	                loading: true
	            });
	        } else {
	            this.setState({
	                activeIndex: activeIndex,
	                loading: true
	            });
	        }
	        img.onload = function () {
	            var imgWidth = img.width;
	            var imgHeight = img.height;
	            if (firstLoad) {
	                setTimeout(function () {
	                    _this3.setState({
	                        activeIndex: activeIndex,
	                        imageWidth: imgWidth,
	                        imageHeight: imgHeight
	                    });
	                    var imgCenterXY = _this3.getImageCenterXY();
	                    _this3.handleZoom(imgCenterXY.x, imgCenterXY.y, 1, 1);
	                }, 50);
	            } else {
	                var _getImgWidthHeight = _this3.getImgWidthHeight(imgWidth, imgHeight),
	                    _getImgWidthHeight2 = _slicedToArray(_getImgWidthHeight, 2),
	                    width = _getImgWidthHeight2[0],
	                    height = _getImgWidthHeight2[1];

	                var left = (_this3.containerWidth - width) / 2;
	                var top = (_this3.containerHeight - height - _this3.footerHeight) / 2;
	                _this3.setState({
	                    activeIndex: activeIndex,
	                    width: width,
	                    height: height,
	                    left: left,
	                    top: top,
	                    imageWidth: imgWidth,
	                    imageHeight: imgHeight,
	                    loading: false,
	                    rotate: 0,
	                    scaleX: 1,
	                    scaleY: 1
	                });
	            }
	        };
	        img.onerror = function () {
	            _this3.setState({
	                activeIndex: activeIndex,
	                imageWidth: 0,
	                imageHeight: 0,
	                loading: false
	            });
	        };
	    };

	    ViewerCore.prototype.handleChangeImg = function handleChangeImg(newIndex) {
	        // let imgCenterXY2 = this.getImageCenterXY();
	        // this.handleZoom(imgCenterXY2.x, imgCenterXY2.y, -1, 1);
	        // setTimeout(() => {
	        //   this.loadImg(newIndex);
	        // }, transitionDuration);
	        this.loadImg(newIndex);
	    };

	    ViewerCore.prototype.handleChangeImgState = function handleChangeImgState(width, height, top, left) {
	        this.setState({
	            width: width,
	            height: height,
	            top: top,
	            left: left
	        });
	    };

	    ViewerCore.prototype.handleAction = function handleAction(type) {
	        switch (type) {
	            case _Icon.ActionType.prev:
	                if (this.state.activeIndex - 1 >= 0) {
	                    this.handleChangeImg(this.state.activeIndex - 1);
	                }
	                break;
	            case _Icon.ActionType.next:
	                if (this.state.activeIndex + 1 < this.props.images.length) {
	                    this.handleChangeImg(this.state.activeIndex + 1);
	                }
	                break;
	            case _Icon.ActionType.zoomIn:
	                var imgCenterXY = this.getImageCenterXY();
	                this.handleZoom(imgCenterXY.x, imgCenterXY.y, 1, .05);
	                break;
	            case _Icon.ActionType.zoomOut:
	                var imgCenterXY2 = this.getImageCenterXY();
	                this.handleZoom(imgCenterXY2.x, imgCenterXY2.y, -1, .05);
	                break;
	            case _Icon.ActionType.rotateLeft:
	                this.handleRotate();
	                break;
	            case _Icon.ActionType.rotateRight:
	                this.handleRotate(true);
	                break;
	            case _Icon.ActionType.reset:
	                this.loadImg(this.state.activeIndex);
	                break;
	            case _Icon.ActionType.scaleX:
	                this.handleScaleX(this.state.scaleX === 1 ? -1 : 1);
	                break;
	            case _Icon.ActionType.scaleY:
	                this.handleScaleY(this.state.scaleY === 1 ? -1 : 1);
	                break;
	            default:
	                break;
	        }
	    };

	    ViewerCore.prototype.handleScaleX = function handleScaleX(newScale) {
	        this.setState({
	            scaleX: newScale
	        });
	    };

	    ViewerCore.prototype.handleScaleY = function handleScaleY(newScale) {
	        this.setState({
	            scaleY: newScale
	        });
	    };

	    ViewerCore.prototype.handleZoom = function handleZoom(targetX, targetY, direct, scale) {
	        var imgCenterXY = this.getImageCenterXY();
	        var diffX = targetX - imgCenterXY.x;
	        var diffY = targetY - imgCenterXY.y;
	        var diffWidth = direct * this.state.width * scale;
	        var diffHeight = direct * this.state.height * scale;
	        // when image width is 0, set original width
	        if (diffWidth === 0) {
	            var _getImgWidthHeight3 = this.getImgWidthHeight(this.state.imageWidth, this.state.imageHeight),
	                _getImgWidthHeight4 = _slicedToArray(_getImgWidthHeight3, 2),
	                width = _getImgWidthHeight4[0],
	                height = _getImgWidthHeight4[1];

	            diffWidth = width;
	            diffHeight = height;
	        }
	        this.setState({
	            width: this.state.width + diffWidth,
	            height: this.state.height + diffHeight,
	            top: this.state.top + -diffHeight / 2 + -direct * diffY * scale,
	            left: this.state.left + -diffWidth / 2 + -direct * diffX * scale,
	            loading: false
	        });
	    };

	    ViewerCore.prototype.getImageCenterXY = function getImageCenterXY() {
	        return {
	            x: this.state.left + this.state.width / 2,
	            y: this.state.top + this.state.height / 2
	        };
	    };

	    ViewerCore.prototype.handleRotate = function handleRotate() {
	        var isRight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	        this.setState({
	            rotate: this.state.rotate + 90 * (isRight ? 1 : -1)
	        });
	    };

	    ViewerCore.prototype.handleResize = function handleResize() {
	        this.setContainerWidthHeight();
	        if (this.props.visible) {
	            var _getImgWidthHeight5 = this.getImgWidthHeight(this.state.imageWidth, this.state.imageHeight),
	                _getImgWidthHeight6 = _slicedToArray(_getImgWidthHeight5, 2),
	                width = _getImgWidthHeight6[0],
	                height = _getImgWidthHeight6[1];

	            var left = (this.containerWidth - width) / 2;
	            var top = (this.containerHeight - height - this.footerHeight) / 2;
	            this.setState({
	                width: width,
	                height: height,
	                left: left,
	                top: top,
	                rotate: 0,
	                scaleX: 1,
	                scaleY: 1
	            });
	        }
	    };

	    ViewerCore.prototype.handleKeydown = function handleKeydown(e) {
	        var keyCode = e.keyCode || e.which || e.charCode;
	        var isFeatrue = false;
	        switch (keyCode) {
	            // key: esc
	            case 27:
	                this.props.onClose();
	                isFeatrue = true;
	                break;
	            // key: ←
	            case 37:
	                if (e.ctrlKey) {
	                    this.handleAction(_Icon.ActionType.rotateLeft);
	                } else {
	                    this.handleAction(_Icon.ActionType.prev);
	                }
	                isFeatrue = true;
	                break;
	            // key: →
	            case 39:
	                if (e.ctrlKey) {
	                    this.handleAction(_Icon.ActionType.rotateRight);
	                } else {
	                    this.handleAction(_Icon.ActionType.next);
	                }
	                isFeatrue = true;
	                break;
	            // key: ↑
	            case 38:
	                this.handleAction(_Icon.ActionType.zoomIn);
	                isFeatrue = true;
	                break;
	            // key: ↓
	            case 40:
	                this.handleAction(_Icon.ActionType.zoomOut);
	                isFeatrue = true;
	                break;
	            // key: Ctrl + 1
	            case 49:
	                if (e.ctrlKey) {
	                    this.loadImg(this.state.activeIndex);
	                    isFeatrue = true;
	                }
	                break;
	            default:
	                break;
	        }
	        if (isFeatrue) {
	            e.preventDefault();
	        }
	    };

	    ViewerCore.prototype.bindEvent = function bindEvent() {
	        var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	        var funcName = 'addEventListener';
	        if (remove) {
	            funcName = 'removeEventListener';
	        }
	        document[funcName]('keydown', this.handleKeydown, false);
	    };

	    ViewerCore.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.bindEvent(true);
	        this.refs['viewerCore'].removeEventListener('transitionend', this.handleTransitionEnd, false);
	    };

	    ViewerCore.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this4 = this;

	        if (!this.props.visible && nextProps.visible) {
	            this.startVisible(nextProps.activeIndex);
	            return;
	        }
	        if (this.props.visible && !nextProps.visible) {
	            this.bindEvent(true);
	            var imgCenterXY2 = this.getImageCenterXY();
	            this.handleZoom(imgCenterXY2.x, imgCenterXY2.y, -1, 1);
	            setTimeout(function () {
	                _this4.setState({
	                    visible: false,
	                    transitionEnd: false
	                });
	            }, transitionDuration);
	            return;
	        }
	        if (this.props.activeIndex !== nextProps.activeIndex) {
	            this.handleChangeImg(nextProps.activeIndex);
	            return;
	        }
	    };

	    ViewerCore.prototype.render = function render() {
	        var activeImg = {
	            src: '',
	            alt: ''
	        };
	        var zIndex = 1000;
	        if (this.props.zIndex) {
	            zIndex = this.props.zIndex;
	        }
	        var viewerStryle = {
	            opacity: this.state.visible ? 1 : 0
	        };
	        if (!this.state.visible && this.state.transitionEnd) {
	            viewerStryle.display = 'none';
	        }
	        if (!this.state.visible && this.state.visibleStart) {
	            viewerStryle.display = 'block';
	        }
	        if (this.state.visible && this.state.transitionEnd) {
	            var images = this.props.images || [];
	            if (images.length > 0 && this.state.activeIndex >= 0) {
	                activeImg = images[this.state.activeIndex];
	            }
	        }
	        var className = this.prefixCls + ' ' + this.prefixCls + '-transition';
	        if (this.props.container) {
	            className += ' inline';
	        }
	        return React.createElement(
	            'div',
	            { ref: 'viewerCore', className: className, style: viewerStryle },
	            React.createElement('div', { className: this.prefixCls + '-mask', style: { zIndex: zIndex } }),
	            React.createElement(
	                'div',
	                { className: this.prefixCls + '-close ' + this.prefixCls + '-btn', onClick: this.handleClose.bind(this), style: { zIndex: zIndex + 10 } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.close })
	            ),
	            React.createElement(_ViewerCanvas2.default, { prefixCls: this.prefixCls, imgSrc: activeImg.src, visible: this.props.visible, width: this.state.width, height: this.state.height, top: this.state.top, left: this.state.left, rotate: this.state.rotate, onChangeImgState: this.handleChangeImgState, onResize: this.handleResize, onZoom: this.handleZoom, zIndex: zIndex + 5, scaleX: this.state.scaleX, scaleY: this.state.scaleY, loading: this.state.loading, drag: this.props.drag, onCanvasMouseDown: this.handleCanvasMouseDown }),
	            React.createElement(
	                'div',
	                { className: this.prefixCls + '-footer', style: { zIndex: zIndex + 5 } },
	                React.createElement(_ViewerToolbar2.default, { prefixCls: this.prefixCls, onAction: this.handleAction, alt: activeImg.alt, width: this.state.imageWidth, height: this.state.imageHeight, attribute: this.props.attribute, zoomable: this.props.zoomable, rotatable: this.props.rotatable, scalable: this.props.scalable, changeable: true }),
	                React.createElement(_ViewerNav2.default, { prefixCls: this.prefixCls, images: this.props.images, activeIndex: this.state.activeIndex, onChangeImg: this.handleChangeImg })
	            )
	        );
	    };

	    return ViewerCore;
	}(React.Component);

	exports.default = ViewerCore;

	ViewerCore.defaultProps = {
	    visible: false,
	    onClose: noop,
	    images: [],
	    activeIndex: 0,
	    zIndex: 1000,
	    drag: true,
	    attribute: true,
	    zoomable: true,
	    rotatable: true,
	    scalable: true,
	    onMaskClick: noop
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ViewerNav = function (_React$Component) {
	    _inherits(ViewerNav, _React$Component);

	    function ViewerNav() {
	        _classCallCheck(this, ViewerNav);

	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }

	    ViewerNav.prototype.handleChangeImg = function handleChangeImg(newIndex) {
	        if (this.props.activeIndex === newIndex) {
	            return;
	        }
	        this.props.onChangeImg(newIndex);
	    };

	    ViewerNav.prototype.render = function render() {
	        var _this2 = this;

	        var marginLeft = (Math.ceil(this.props.images.length / 2) - this.props.activeIndex - 1) * 1.5 * 30;
	        var listStyle = {
	            marginLeft: marginLeft + 'px'
	        };
	        return React.createElement(
	            'div',
	            { className: this.props.prefixCls + '-navbar' },
	            React.createElement(
	                'ul',
	                { className: this.props.prefixCls + '-list ' + this.props.prefixCls + '-list-transition', style: listStyle },
	                this.props.images.map(function (item, index) {
	                    return React.createElement(
	                        'li',
	                        { key: index, className: index === _this2.props.activeIndex ? 'active' : '', onClick: _this2.handleChangeImg.bind(_this2, index) },
	                        React.createElement('img', { src: item.src, alt: item.alt })
	                    );
	                })
	            )
	        );
	    };

	    return ViewerNav;
	}(React.Component);

	exports.default = ViewerNav;

	ViewerNav.defaultProps = {
	    activeIndex: 0
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _Icon = __webpack_require__(2);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ViewerToolbar = function (_React$Component) {
	    _inherits(ViewerToolbar, _React$Component);

	    function ViewerToolbar() {
	        _classCallCheck(this, ViewerToolbar);

	        return _possibleConstructorReturn(this, _React$Component.call(this));
	    }

	    ViewerToolbar.prototype.handleAction = function handleAction(type) {
	        this.props.onAction(type);
	    };

	    ViewerToolbar.prototype.render = function render() {
	        var _this2 = this;

	        var attributeNode = this.props.attribute ? React.createElement(
	            'p',
	            { className: this.props.prefixCls + '-attribute' },
	            this.props.alt + '(' + this.props.width + ' x ' + this.props.height + ')'
	        ) : null;
	        var featureNodeArr = [];
	        if (this.props.zoomable) {
	            featureNodeArr = featureNodeArr.concat([React.createElement(
	                'li',
	                { key: 'zoomIn', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.zoomIn);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.zoomIn })
	            ), React.createElement(
	                'li',
	                { key: 'zoomOut', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.zoomOut);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.zoomOut })
	            )]);
	        }
	        if (this.props.changeable) {
	            featureNodeArr = featureNodeArr.concat([React.createElement(
	                'li',
	                { key: 'prev', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.prev);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.prev })
	            ), React.createElement(
	                'li',
	                { key: 'reset', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.reset);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.reset })
	            ), React.createElement(
	                'li',
	                { key: 'next', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.next);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.next })
	            )]);
	        }
	        if (this.props.rotatable) {
	            featureNodeArr = featureNodeArr.concat([React.createElement(
	                'li',
	                { key: 'rotateLeft', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.rotateLeft);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.rotateLeft })
	            ), React.createElement(
	                'li',
	                { key: 'rotateRight', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.rotateRight);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.rotateRight })
	            )]);
	        }
	        if (this.props.scalable) {
	            featureNodeArr = featureNodeArr.concat([React.createElement(
	                'li',
	                { key: 'scaleX', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.scaleX);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.scaleX })
	            ), React.createElement(
	                'li',
	                { key: 'scaleY', className: this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this2.handleAction(_Icon.ActionType.scaleY);
	                    } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.scaleY })
	            )]);
	        }
	        return React.createElement(
	            'div',
	            null,
	            attributeNode,
	            React.createElement(
	                'ul',
	                { className: this.props.prefixCls + '-toolbar' },
	                featureNodeArr
	            )
	        );
	    };

	    return ViewerToolbar;
	}(React.Component);

	exports.default = ViewerToolbar;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }
/******/ ])
});
;