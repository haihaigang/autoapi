define(['exports', '../../../base/reqs/BaseRobotReq'], function (exports, _BaseRobotReq2) {
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

    var PintuanCreateReq = function (_BaseRobotReq) {
        _inherits(PintuanCreateReq, _BaseRobotReq);

        function PintuanCreateReq(options, params, successFn, errorFn) {
            _classCallCheck(this, PintuanCreateReq);

            var _this = _possibleConstructorReturn(this, (PintuanCreateReq.__proto__ || Object.getPrototypeOf(PintuanCreateReq)).call(this, options, params, successFn, errorFn));

            // 配置当前接口请求的，包含url、请求类型、请求内容类型等
            // 约定url使用相对地址，都以斜杠开头
            _this._defaultOptions = {
                url: '/pintuan/create',
                type: 'POST',
                contentType: 'application/json'
            };

            // 请求参数的描述信息，只定义先不用
            _this._paramsDescriptor = [{
                key: 'username',
                desc: '用户名',
                isRequired: true
            }];

            _this.curd = 'c';
            return _this;
        }

        /**
         * 添加接口请求参数，适用于参数较少
         * @param username 用户名
         * @param password 密码
         * @param vcode 验证码
         */


        _createClass(PintuanCreateReq, [{
            key: 'setSimpleParams',
            value: function setSimpleParams(username, password, vcode) {
                this.addParams('username', username);
                this.addParams('password', password);
                this.addParams('vcode', vcode);
            }
        }, {
            key: 'setComplexParams',
            value: function setComplexParams(obj) {
                this.setParams(obj);
            }
        }]);

        return PintuanCreateReq;
    }(_BaseRobotReq3.default);

    exports.default = PintuanCreateReq;
});