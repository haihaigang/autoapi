define(['exports', '../base/BaseRobotReq'], function (exports, _BaseRobotReq2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _BaseRobotReq3 = _interopRequireDefault(_BaseRobotReq2);

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

    var AccountLoginReq = function (_BaseRobotReq) {
        _inherits(AccountLoginReq, _BaseRobotReq);

        function AccountLoginReq(options, params, successFn, errorFn) {
            _classCallCheck(this, AccountLoginReq);

            var _this = _possibleConstructorReturn(this, (AccountLoginReq.__proto__ || Object.getPrototypeOf(AccountLoginReq)).call(this, options, params, successFn, errorFn));

            console.log('AccountLoginReq constructor');

            // 配置当前接口请求的，包含url、请求类型、请求内容类型等
            // 约定url使用相对地址，都以斜杠开头
            _this._defaultOptions = {
                url: '/account/login',
                type: 'POST',
                contentType: 'application/json'
            };

            _this._names = ['username', 'password', 'vcode'];
            return _this;
        }

        /**
         * 添加接口请求参数
         * @param username 用户名
         * @param password 密码
         * @param vcode 验证码
         */


        _createClass(AccountLoginReq, [{
            key: 'setParam',
            value: function setParam(username, password, vcode) {
                this.addParams('username', username);
                this.addParams('password', password);
                this.addParams('vcode', vcode);
            }
        }, {
            key: 'ajaxSend',
            value: function ajaxSend(username, password, vcode, callback, callbackError) {
                _get(AccountLoginReq.prototype.__proto__ || Object.getPrototypeOf(AccountLoginReq.prototype), 'send', this).call(this, {
                    username: username,
                    password: password,
                    vcode: vcode
                }, callback, callbackError);
            }
        }]);

        return AccountLoginReq;
    }(_BaseRobotReq3.default);

    exports.default = AccountLoginReq;
});