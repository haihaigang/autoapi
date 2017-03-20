define(['./pages/pintuan/columns/PintuanColumns', './pages/pintuan/conditions/PintuanConditions', './pages/pintuan/forms/PintuanForms'], function (_PintuanColumns, _PintuanConditions, _PintuanForms) {
  'use strict';

  var _PintuanColumns2 = _interopRequireDefault(_PintuanColumns);

  var _PintuanConditions2 = _interopRequireDefault(_PintuanConditions);

  var _PintuanForms2 = _interopRequireDefault(_PintuanForms);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var p = new _PintuanForms2.default();
  console.log(p.getFields());
});