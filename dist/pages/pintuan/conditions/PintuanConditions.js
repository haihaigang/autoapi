define(['exports', '../../../base/conditions/BaseConditions', '../../../robots/pintuan/conditions/PintuanConditions'], function (exports, _BaseConditions2, _PintuanConditions) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _BaseConditions3 = _interopRequireDefault(_BaseConditions2);

    var _PintuanConditions2 = _interopRequireDefault(_PintuanConditions);

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

    var PintuanConditions = function (_BaseConditions) {
        _inherits(PintuanConditions, _BaseConditions);

        function PintuanConditions() {
            _classCallCheck(this, PintuanConditions);

            var _this = _possibleConstructorReturn(this, (PintuanConditions.__proto__ || Object.getPrototypeOf(PintuanConditions)).call(this));

            _this._conditions = _PintuanConditions2.default;

            // 示例，添加一个自定义的没有在自动生成中的搜索条件信息
            // this.addCondition({
            //     key: 'exampleKey',
            //     type: 'text',
            //     label: '示例名称',
            //     placeholder: true
            // });

            // 示例，更改某个搜索条件的类型
            // this.changeCondition('exampleKey', this._types.date);
            // 更改多个表头的展现形式
            // this.changeCondition([{'key': 'exampleKey','type': this._types.date}]);

            // 示例，更新某个搜索条件的数据
            // this.setCondition('bn', {data: [], 'label': '排山倒海'});
            return _this;
        }

        return PintuanConditions;
    }(_BaseConditions3.default);

    exports.default = PintuanConditions;
});