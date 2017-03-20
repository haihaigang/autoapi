define(['exports', './reqs/PintuanCreateReq', './reqs/PintuanUpdateReq', './reqs/PintuanRetrieveReq', './reqs/PintuanDeleteReq', './reqs/PintuanDetailReq'], function (exports, _PintuanCreateReq, _PintuanUpdateReq, _PintuanRetrieveReq, _PintuanDeleteReq, _PintuanDetailReq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DetailReq = exports.DeleteReq = exports.RetrieveReq = exports.UpdateReq = exports.CreateReq = undefined;

  var _PintuanCreateReq2 = _interopRequireDefault(_PintuanCreateReq);

  var _PintuanUpdateReq2 = _interopRequireDefault(_PintuanUpdateReq);

  var _PintuanRetrieveReq2 = _interopRequireDefault(_PintuanRetrieveReq);

  var _PintuanDeleteReq2 = _interopRequireDefault(_PintuanDeleteReq);

  var _PintuanDetailReq2 = _interopRequireDefault(_PintuanDetailReq);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.CreateReq = _PintuanCreateReq2.default;
  exports.UpdateReq = _PintuanUpdateReq2.default;
  exports.RetrieveReq = _PintuanRetrieveReq2.default;
  exports.DeleteReq = _PintuanDeleteReq2.default;
  exports.DetailReq = _PintuanDetailReq2.default;
});