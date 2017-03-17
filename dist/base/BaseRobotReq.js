define(['exports', './BaseReq'], function (exports, _BaseReq2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _BaseReq3 = _interopRequireDefault(_BaseReq2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var BaseRobotReq = function (_BaseReq) {
        _inherits(BaseRobotReq, _BaseReq);

        function BaseRobotReq(options, params, successFn, errorFn) {
            _classCallCheck(this, BaseRobotReq);

            var _this = _possibleConstructorReturn(this, (BaseRobotReq.__proto__ || Object.getPrototypeOf(BaseRobotReq)).call(this, options));

            console.log('BaseRobotReq constructor');

            _this._defaultOptions = {}; //默认的请求配置
            _this._options = options; //请求配置，包含请求地址、请求类型、请求内容类型等
            _this._params = params; //请求参数
            _this._successFn = successFn || function () {}; //成功回调
            _this._errorFn = errorFn || function () {}; //失败回调
            return _this;
        }

        _createClass(BaseRobotReq, [{
            key: 'getOptions',
            value: function getOptions() {
                return this._options;
            }
        }, {
            key: 'setOptions',
            value: function setOptions(options) {
                this._options = options;
            }
        }, {
            key: 'getParams',
            value: function getParams() {
                return this._params;
            }
        }, {
            key: 'setParams',
            value: function setParams(params) {
                this._params = params;
            }
        }, {
            key: 'addParams',
            value: function addParams(key, value) {
                this._params[key] = value;
            }
        }, {
            key: 'getSuccessFn',
            value: function getSuccessFn() {
                this._successFn;
            }
        }, {
            key: 'setSuccessFn',
            value: function setSuccessFn(fn) {
                this._successFn = fn;
            }
        }, {
            key: 'getErrorFn',
            value: function getErrorFn() {
                return this._errorFn;
            }
        }, {
            key: 'setErrorFn',
            value: function setErrorFn(fn) {
                this._errorFn = fn;
            }
        }, {
            key: 'send',
            value: function send() {
                this.processOptions();
                _get(BaseRobotReq.prototype.__proto__ || Object.getPrototypeOf(BaseRobotReq.prototype), 'send', this).call(this, this._options, this._successFn, this._errorFn);
            }
        }, {
            key: 'processOptions',
            value: function processOptions() {
                this._options = this.assign(this._defaultOptions || {}, this._options);

                this._options.data = this._params;
                this._options.url = this.formatUrl(this._options.url);

                return this._options;
            }
        }, {
            key: 'formatUrl',
            value: function formatUrl(url, id) {
                if (!url) {
                    return url;
                }
                if (this.name) {
                    url = url.replace(':name', this.name);
                }
                if (id) {
                    url = url.replace(':id', id);
                }
                return (this.isPhpHost ? this.phpHost : this.host) + url;
            }
        }]);

        return BaseRobotReq;
    }(_BaseReq3.default);

    exports.default = BaseRobotReq;
});