define(['./pages/pintuan/columns/PintuanColumns', './pages/pintuan/conditions/PintuanConditions'], function (_PintuanColumns, _PintuanConditions) {
  'use strict';

  var _PintuanColumns2 = _interopRequireDefault(_PintuanColumns);

  var _PintuanConditions2 = _interopRequireDefault(_PintuanConditions);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var p = new _PintuanConditions2.default();
  console.log(p.getConditions());
});