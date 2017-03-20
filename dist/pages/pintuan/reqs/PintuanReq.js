define(['exports', '../../../base/reqs/CurdReq', '../../../robots/pintuan/reqs/PintuanCurds'], function (exports, _CurdReq2, _PintuanCurds) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _CurdReq3 = _interopRequireDefault(_CurdReq2);

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

    var Req = function (_CurdReq) {
        _inherits(Req, _CurdReq);

        function Req() {
            _classCallCheck(this, Req);

            var _this = _possibleConstructorReturn(this, (Req.__proto__ || Object.getPrototypeOf(Req)).call(this));

            _this._createReq = _PintuanCurds.CreateReq;
            _this._updateReq = _PintuanCurds.UpdateReq;
            _this._retrivevReq = _PintuanCurds.RetrieveReq;
            _this._deleteReq = _PintuanCurds.DeleteReq;
            _this._detailReq = _PintuanCurds.DetailReq;
            return _this;
        }

        /**
         * 自定义查询，保留该方式以便能扩展一些自定义的查询
         * @param data 自定义参数
         * @param successFn 成功回调
         * @param errorFn   失败回调
         * @return
         */


        _createClass(Req, [{
            key: 'custom',
            value: function custom(data, successFn, errorFn) {
                _get(Req.prototype.__proto__ || Object.getPrototypeOf(Req.prototype), 'send', this).call(this, {
                    url: this._host + '/custom/test',
                    data: data,
                    type: 'GET'
                }, successFn, errorFn);
            }
        }]);

        return Req;
    }(_CurdReq3.default);

    exports.default = new Req();
});