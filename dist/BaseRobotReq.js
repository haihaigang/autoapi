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

        function BaseRobotReq(options) {
            _classCallCheck(this, BaseRobotReq);

            var _this = _possibleConstructorReturn(this, (BaseRobotReq.__proto__ || Object.getPrototypeOf(BaseRobotReq)).call(this, options));

            console.log('BaseRobotReq constructor');

            //this.options = {}; //配置当前接口请求的配置，包含url、参数、请求类型、请求内容类型等
            return _this;
        }

        _createClass(BaseRobotReq, [{
            key: 'send',
            value: function send(data, callback, callbackError) {
                this.options.data = data;

                _get(BaseRobotReq.prototype.__proto__ || Object.getPrototypeOf(BaseRobotReq.prototype), 'send', this).call(this, this.options, callback, callbackError);
            }
        }]);

        return BaseRobotReq;
    }(_BaseReq3.default);

    exports.default = BaseRobotReq;
});