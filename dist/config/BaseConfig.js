define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var BaseConfig = function BaseConfig() {
        _classCallCheck(this, BaseConfig);
    };

    BaseConfig.HOST = '/api';
    BaseConfig.PHP_HOST = '/php';
    BaseConfig.PAGESIZE = 15;
    BaseConfig.PATH = '/kiwi';
    BaseConfig.PREVIEW_HOST = 'http://wx.rbyair.com';
    BaseConfig.HOME_PAGEID = 200003;
    BaseConfig.POSITION_PAGEID_HOME = 200003;
    BaseConfig.POSITION_PAGEID_PINTUAN = 200006;
    exports.default = BaseConfig;
});