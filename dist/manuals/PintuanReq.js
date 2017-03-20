define(['exports', '../base/CurdReq', '../modules/PintuanModule'], function (exports, _CurdReq2, _PintuanModule) {
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

    var Req = function (_CurdReq) {
        _inherits(Req, _CurdReq);

        function Req() {
            _classCallCheck(this, Req);

            var _this = _possibleConstructorReturn(this, (Req.__proto__ || Object.getPrototypeOf(Req)).call(this, 'Commission'));

            _this.curd = {
                create: '/community/pintuan_configs/update',
                update: '/community/pintuan_configs/update',
                retrieve: '/community/pintuan_configs/search',
                detail: '/community/pintuan_configs/get'
            };

            console.log(_PintuanModule.CreateReq);
            return _this;
        }

        return Req;
    }(_CurdReq3.default);

    exports.default = new Req();
});