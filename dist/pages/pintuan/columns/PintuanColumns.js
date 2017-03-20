define(['exports', '../../../base/columns/BaseColumns', '../../../robots/pintuan/columns/PintuanColumns', './TypesToRenders'], function (exports, _BaseColumns2, _PintuanColumns, _TypesToRenders) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _BaseColumns3 = _interopRequireDefault(_BaseColumns2);

    var _PintuanColumns2 = _interopRequireDefault(_PintuanColumns);

    var _TypesToRenders2 = _interopRequireDefault(_TypesToRenders);

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

    var PintuanColumns = function (_BaseColumns) {
        _inherits(PintuanColumns, _BaseColumns);

        function PintuanColumns() {
            _classCallCheck(this, PintuanColumns);

            var _this = _possibleConstructorReturn(this, (PintuanColumns.__proto__ || Object.getPrototypeOf(PintuanColumns)).call(this));

            _this._columns = _PintuanColumns2.default; //绑定自动生成的表头数据

            // 示例，添加一个自定义的没有在自动生成中的表头信息
            // this.addColumn({
            //     title: '示例名称',
            //     dataIndex: 'exampleKey',
            //     key: 'exampleKey',
            //     checked: true,
            //     type: 'text'
            // });

            // 示例，添加自定义的表头对应展现形式关系表
            // this._typesToRenders = TYPES_TO_RENDERS;

            // 示例，是否需要显示操作栏
            // this._needOperateColumn = false;

            // 示例，更改某个表头的展现形式
            // this.changeColumn('exampleKey', this._types.date);
            // 更改多个表头的展现形式
            // this.changeColumn([{'key': 'exampleKey','type': this._types.date}])

            // 示例，更新某个表头的数据
            // this.setColumn('exampleKey', {title: '水晶桔子'});

            // 这里init要在最后，以确保相应的数据已初始化
            _this.init();
            return _this;
        }

        /**
         * 初始化，预留扩展
         * 这里可以根据当前模块需要追加（或修改）一些自定义的表头和操作栏
         * @return
         */


        _createClass(PintuanColumns, [{
            key: 'init',
            value: function init() {
                console.log('pintuan columns init here...');
                _get(PintuanColumns.prototype.__proto__ || Object.getPrototypeOf(PintuanColumns.prototype), 'init', this).call(this);

                // TODO 自定义处理一些数据

                // 示例，隐藏某个表头
                // this.hideColumn('operation');
            }
        }]);

        return PintuanColumns;
    }(_BaseColumns3.default);

    exports.default = PintuanColumns;
});