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

            _this.key = 'id'; //列表中的主键，用于生成table中的key和查找详情、删除的参数名
            _this.name = name;
            _this.timeout = 0;

            _this._createReq = undefined;
            _this._updateReq = undefined;
            _this._retrieveReq = undefined;
            _this._deleteReq = undefined;
            _this._detailReq = undefined;
            return _this;
        }

        /**
         * 查询列表
         */


        _createClass(CurdReq, [{
            key: 'search',
            value: function search(condition, successFn, errorFn) {
                var req = new this._retrieveReq();
                // req.setSimpleParams('haigang@meigo.com', '123456', 9090);
                req.setComplexParams(condition);
                req.setSuccessFn(successFn);
                req.setErrorFn(errorFn);

                req.send();
            }
        }, {
            key: 'save',
            value: function save(data, successFn, errorFn) {

                var req = new this._createReq();
                if (data && data.id) {
                    req = new this._updateReq();
                }
                req.setComplexParams(data);
                req.setSuccessFn(successFn);
                req.setErrorFn(errorFn);

                req.send();
            }
        }, {
            key: 'getDetail',
            value: function getDetail(id, successFn, errorFn) {
                var data = {};
                data[this.key] = id;

                var req = new this._detailReq();
                req.setComplexParams(data);
                req.setSuccessFn(successFn);
                req.setErrorFn(errorFn);

                req.send();
            }
        }, {
            key: 'remove',
            value: function remove(id, successFn, errorFn) {
                var data = {};
                data[this.key] = id;

                var req = new this._deleteReq();
                req.setComplexParams(data);
                req.setSuccessFn(successFn);
                req.setErrorFn(errorFn);
            }
        }]);

        return CurdReq;
    }(_BaseReq3.default);

    exports.default = CurdReq;
});