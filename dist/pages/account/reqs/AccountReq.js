define(['exports', '../robot/AccountLoginReq'], function (exports, _AccountLoginReq) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _AccountLoginReq2 = _interopRequireDefault(_AccountLoginReq);

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

    var AccountReq = function () {
        function AccountReq() {
            _classCallCheck(this, AccountReq);
        }

        _createClass(AccountReq, [{
            key: 'login',
            value: function login() {
                new _AccountLoginReq2.default({
                    type: 'GET'
                }, {
                    a: 1,
                    b: 2,
                    c: 3
                }, function (response) {
                    console.log('success result is processing.');
                }, function (textStatus, data) {
                    console.log('error, something wrong');
                }).send();

                var req = new _AccountLoginReq2.default();
                req.setOptions({
                    contentType: 'formData'
                });
                req.setSimpleParams('haigang@meigo.com', '123456', 9090);
                // req.setComplexParams({
                //     username: 'haigang@meigo.com',
                //     password: '123456',
                //     vcode: 9891
                // });
                req.setSuccessFn(function (response) {
                    console.log('success result is processing.');
                });
                req.setErrorFn(function (textStatus, data) {
                    console.log('error, something wrong');
                });

                req.send();
            }
        }, {
            key: 'logout',
            value: function logout() {
                _AccountLoginReq2.default.send();
            }
        }]);

        return AccountReq;
    }();

    exports.default = new AccountReq();
});