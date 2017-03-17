define(['exports', './config/BaseConfig'], function (exports, _BaseConfig) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _BaseConfig2 = _interopRequireDefault(_BaseConfig);

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

    var BaseReq = function () {
        function BaseReq(options) {
            _classCallCheck(this, BaseReq);

            this.host = _BaseConfig2.default.HOST; //接口地址
            this.phpHost = _BaseConfig2.default.PHP_HOST; //php接口地址
            this.pageSize = _BaseConfig2.default.PAGESIZE; //分页大小
            this.path = _BaseConfig2.default.PATH; //路由前缀路径
            this.timeout = 15000; //请求超时时间
            this.cache = true; //是否缓存
            this.isLoading = false; //是否正在请求
            this.queue = {}; //请求队列
            this.onEnd = function () {}; //当请求都完成
            this.loadingTip = undefined;
            this.timeTick = 0; //每次请求的时间
            this.responseKey = 'body.content'; //默认接口返回的内容结构体
            this.timestamp = undefined; //每次接口返回的当前服务器时间

            this.options = options;
        }

        _createClass(BaseReq, [{
            key: 'send',
            value: function send(options, callback, callbackError) {
                console.log('I am base send.');
                options = this.processOptions();
                console.log(options);
            }
        }, {
            key: 'processOptions',
            value: function processOptions() {
                return this.assign(this.defaultOptions, this.options);
            }
        }, {
            key: 'assign',
            value: function assign(options, opts) {
                if ('assign' in Object) {
                    return Object.assign(options, opts);
                } else {
                    for (var i in opts) {
                        options[i] = opts[i];
                    }
                    return options;
                }
            }
        }]);

        return BaseReq;
    }();

    exports.default = BaseReq;
});