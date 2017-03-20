define(['exports', './ConditionTypes'], function (exports, _ConditionTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _ConditionTypes2 = _interopRequireDefault(_ConditionTypes);

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

    var BaseConditions = function () {
        function BaseConditions() {
            _classCallCheck(this, BaseConditions);

            this._conditions = []; //搜索条件的数据
            this._types = _ConditionTypes2.default; //搜索条件的类型表
        }

        _createClass(BaseConditions, [{
            key: 'setConditions',
            value: function setConditions(conditions) {
                this._conditions = conditions;
            }
        }, {
            key: 'getConditions',
            value: function getConditions() {
                return this._conditions;
            }
        }, {
            key: 'setCondition',
            value: function setCondition(key, data) {
                this._conditions.map(function (item, i) {
                    if (item.key == key) {
                        for (var j in data) {
                            item[j] = data[j];
                        }
                    }
                });
            }
        }, {
            key: 'addCondition',
            value: function addCondition(condition) {
                this._conditions.push(column);
            }
        }, {
            key: 'addConditions',
            value: function addConditions(conditions) {
                this._conditions.concat(conditions);
            }
        }, {
            key: 'changeCondition',
            value: function changeCondition(key, type) {
                var hasMore = false;

                if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object' && typeof key.length != 'undefined') {
                    hasMore = true;
                }

                this._conditions.map(function (item, i) {
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

        return BaseConditions;
    }();

    exports.default = BaseConditions;
});