define(["exports", "./robot/AccountLoginReq"], function (exports, _AccountLoginReq) {
	"use strict";

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
			key: "login",
			value: function login() {
				new _AccountLoginReq2.default({ abc: 1, type: 'GET' }).send();
			}
		}, {
			key: "logout",
			value: function logout() {
				_AccountLoginReq2.default.send();
			}
		}]);

		return AccountReq;
	}();

	exports.default = new AccountReq();
});