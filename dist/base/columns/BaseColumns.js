define(['exports', './TypesToRenders', './ColumnTypes'], function (exports, _TypesToRenders, _ColumnTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _TypesToRenders2 = _interopRequireDefault(_TypesToRenders);

    var _ColumnTypes2 = _interopRequireDefault(_ColumnTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

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

    var BaseColumns = function () {
        function BaseColumns() {
            _classCallCheck(this, BaseColumns);

            this._columns = []; //列的数据
            this._defaultOperateColumn = { //默认的操作栏
                title: '操作',
                key: 'operation',
                checked: true,
                type: 'operation'
            };
            this._typesToRenders = {}; //表头对应展现形式关系表
            this._needOperateColumn = true; //是否需要显示操作栏
            this._types = _ColumnTypes2.default; //表头类型表

            // this.init();
        }

        _createClass(BaseColumns, [{
            key: 'setColumns',
            value: function setColumns(columns) {
                this._columns = columns;
            }
        }, {
            key: 'getColumns',
            value: function getColumns() {
                return this._columns;
            }
        }, {
            key: 'init',
            value: function init() {
                var _this = this;

                console.log('base columns init here...');

                if (!this._columns || this._columns.length == 0) {
                    console.error('_columns is empty');
                    return;
                }

                var hasOperate = false;

                this._columns.map(function (item, i) {
                    if (item.key == 'operation') {
                        hasOperate = true;
                    }
                    _this.addRender(item);
                });

                if (this._needOperateColumn && !hasOperate) {
                    // 如果没有操作栏则追加上默认的操作栏
                    this.addRender(this._defaultOperateColumn);
                    this._columns.push(this._defaultOperateColumn);
                }
            }
        }, {
            key: 'addRender',
            value: function addRender(column) {
                var type = column.type || 'text';
                var render = this._typesToRenders[type];

                if (!render) {
                    render = _TypesToRenders2.default[column.type || 'text'];
                }

                column.render = render;
            }
        }, {
            key: 'setColumn',
            value: function setColumn(key, data) {
                this._columns.map(function (item, i) {
                    if (item.key == key) {
                        for (var j in data) {
                            item[j] = data[j];
                        }
                    }
                });
            }
        }, {
            key: 'addColumn',
            value: function addColumn(column) {
                this._columns.push(column);
            }
        }, {
            key: 'addColumns',
            value: function addColumns(columns) {
                this._columns.concat(columns);
            }
        }, {
            key: 'removeColumn',
            value: function removeColumn(key) {
                this._columns = this._columns.filter(function (item, i) {
                    return item.key != key;
                });
            }
        }, {
            key: 'hideColumn',
            value: function hideColumn(key) {
                this._columns.map(function (item, i) {
                    if (item.key == key) {
                        item.checked = false;
                    }
                });
            }
        }, {
            key: 'changeColumn',
            value: function changeColumn(key, type) {
                var hasMore = false;

                if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object' && typeof key.length != 'undefined') {
                    hasMore = true;
                }

                this._columns.map(function (item, i) {
                    if (hasMore) {
                        key.map(function (sitem, j) {
                            if (item.key == sitem.key) {
                                item.type = sitem.type;
                            }
                        });
                    } else {
                        if (item.key == key) {
                            item.type = type;
                        }
                    }
                });
            }
        }]);

        return BaseColumns;
    }();

    exports.default = BaseColumns;
});