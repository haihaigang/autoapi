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

    var CurdReq = function (_BaseReq) {
        _inherits(CurdReq, _BaseReq);

        function CurdReq(name) {
            _classCallCheck(this, CurdReq);

            var _this = _possibleConstructorReturn(this, (CurdReq.__proto__ || Object.getPrototypeOf(CurdReq)).call(this));

            _this.curd = { //基本的curd接口
                create: '/:name/create',
                update: '/:name/update/:id',
                retrieve: '/:name/list',
                delete: '/:name/delete',
                detail: '/:name/get/:id'
            };
            _this.key = 'id'; //列表中的主键，用于生成table中的key和查找详情、删除的参数名
            _this.name = name;
            _this.timeout = 0;
            return _this;
        }

        /**
         * 格式化接口地址
         * @param url 路由
         * @param id  编号
         */


        _createClass(CurdReq, [{
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
        }, {
            key: 'search',
            value: function search(condition, callback, callbackError) {
                _get(CurdReq.prototype.__proto__ || Object.getPrototypeOf(CurdReq.prototype), 'search', this).call(this, {
                    url: this.formatUrl(this.curd.retrieve),
                    type: 'GET',
                    data: condition,
                    key: this.key,
                    timeout: this.timeout,
                    responseKey: this.responseKey
                }, callback, callbackError);
            }
        }, {
            key: 'save',
            value: function save(data, callback, callbackError) {
                var url = this.formatUrl(this.curd.create);
                if (data && data.id) {
                    url = this.formatUrl(this.curd.update, data.id);
                }

                _get(CurdReq.prototype.__proto__ || Object.getPrototypeOf(CurdReq.prototype), 'save', this).call(this, {
                    url: url,
                    data: data,
                    type: 'POST',
                    contentType: this.contentType || 'application/json'
                }, callback, callbackError);
            }
        }, {
            key: 'getDetail',
            value: function getDetail(id, callback, callbackError) {
                var data = {};
                data[this.key] = id;

                _get(CurdReq.prototype.__proto__ || Object.getPrototypeOf(CurdReq.prototype), 'send', this).call(this, {
                    url: this.formatUrl(this.curd.detail, id),
                    data: data,
                    showLoading: true
                }, callback, callbackError);
            }
        }, {
            key: 'remove',
            value: function remove(id, callback, callbackError) {
                var data = {};
                data[this.key] = id;

                _get(CurdReq.prototype.__proto__ || Object.getPrototypeOf(CurdReq.prototype), 'remove', this).call(this, {
                    url: this.formatUrl(this.curd.delete, id),
                    data: data,
                    type: 'POST'
                }, callback, callbackError);
            }
        }]);

        return CurdReq;
    }(_BaseReq3.default);

    exports.default = CurdReq;
});