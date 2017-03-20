define(['exports', '../../../base/forms/BaseFormFields', '../../../robots/pintuan/forms/PintuanFormFields'], function (exports, _BaseFormFields2, _PintuanFormFields) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _BaseFormFields3 = _interopRequireDefault(_BaseFormFields2);

    var _PintuanFormFields2 = _interopRequireDefault(_PintuanFormFields);

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

    var PintuanFormFields = function (_BaseFormFields) {
        _inherits(PintuanFormFields, _BaseFormFields);

        function PintuanFormFields() {
            _classCallCheck(this, PintuanFormFields);

            var _this = _possibleConstructorReturn(this, (PintuanFormFields.__proto__ || Object.getPrototypeOf(PintuanFormFields)).call(this));

            _this._fields = _PintuanFormFields2.default;

            // 示例，添加一个自定义的没有在自动生成中的表单域的信息
            // this.addField({
            //     key: 'exampleKey',
            //     type: 'text',
            //     label: '示例名称',
            //     placeholder: true
            // });

            // 示例，更新某个表单域的数据
            // this.setField('bn', {data: [], 'label': '排山倒海'});
            return _this;
        }

        return PintuanFormFields;
    }(_BaseFormFields3.default);

    exports.default = PintuanFormFields;
});