define(['exports', './FormTypes'], function (exports, _FormTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _FormTypes2 = _interopRequireDefault(_FormTypes);

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

    var BaseForms = function () {
        function BaseForms() {
            _classCallCheck(this, BaseForms);

            this._fields = []; //表单域的数据
            this._types = _FormTypes2.default; //表单域的类型
        }

        _createClass(BaseForms, [{
            key: 'setFields',
            value: function setFields(fields) {
                this._fields = fields;
            }
        }, {
            key: 'getFields',
            value: function getFields() {
                return this._fields;
            }
        }, {
            key: 'setField',
            value: function setField(key, data) {
                this._fields.map(function (item, i) {
                    if (item.key == key) {
                        for (var j in data) {
                            item[j] = data[j];
                        }
                    }
                });
            }
        }, {
            key: 'addField',
            value: function addField(field) {
                this._fields.push(field);
            }
        }, {
            key: 'addFields',
            value: function addFields(fields) {
                this._fields.concat(fields);
            }
        }, {
            key: 'changeField',
            value: function changeField(key, type) {
                var hasMore = false;

                if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object' && typeof key.length != 'undefined') {
                    hasMore = true;
                }

                this._fields.map(function (item, i) {
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

        return BaseForms;
    }();

    exports.default = BaseForms;
});