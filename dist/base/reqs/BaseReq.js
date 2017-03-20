define(['exports', '../config/BaseConfig'], function (exports, _BaseConfig) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _BaseConfig2 = _interopRequireDefault(_BaseConfig);

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

    var BaseReq = function () {
        function BaseReq() {
            _classCallCheck(this, BaseReq);

            this._host = _BaseConfig2.default.HOST; //接口地址
            this._phpHost = _BaseConfig2.default.PHP_HOST; //php接口地址
            this._pageSize = _BaseConfig2.default.PAGESIZE; //分页大小
            this._path = _BaseConfig2.default.PATH; //路由前缀路径
            this._timeout = 15000; //请求超时时间
            this._cache = true; //是否缓存
            this._isLoading = false; //是否正在请求
            this._queue = {}; //请求队列
            this._onEnd = function () {}; //当请求都完成
            this._timeTick = 0; //每次请求的时间
            this._responseKey = 'body.content'; //默认接口返回的内容结构体
            this._timestamp = undefined; //每次接口返回的当前服务器时间
        }

        _createClass(BaseReq, [{
            key: 'assign',
            value: function assign(options, opts) {
                if ('assign' in Object) {
                    return Object.assign(options, opts);
                } else {
                    for (var i in opts) {
                        options[i] = opts[i];
                    }
                    return options;
                }
            }
        }, {
            key: 'search',
            value: function search(options, callback, callbackError) {
                if (this._isLoading) {
                    console.log('search wait is loading');
                    return;
                }

                this.extend(options, {
                    data: {},
                    logtype: 'search',
                    showLoading: true
                });

                this.extend(options.data, {
                    page: 1,
                    size: this._pageSize
                });

                this.send(options, callback, function (textStatus, response) {
                    if (textStatus == 'Malformed') {
                        if (response.status == 204) {
                            console.error('没有您搜索的结果');
                        } else {
                            console.error(response.message, 5);
                        }
                    }
                    callbackError && callbackError(textStatus, response);
                });
            }
        }, {
            key: 'save',
            value: function save(options, callback, callbackError) {
                if (this._isLoading) {
                    console.log('save wait is loading');
                    return;
                }

                this.extend(options, {
                    type: 'POST',
                    logtype: 'save',
                    showLoading: true,
                    loadingText: '保存中……',
                    contentType: 'application/json'
                });

                this.send(options, callback, function (textStatus, response) {
                    if (textStatus == 'Malformed') {
                        var msg = response.message;
                        var msgArr = msg.split('<BR/>');
                        var brEle = React.createElement('br');
                        var elements = [];
                        if (msgArr.length > 1) {
                            msgArr.map(function (item, i) {
                                var tip = React.createElement('span', null, item);
                                elements.push(tip);
                                if (i < msgArr.length - 1) {
                                    elements.push(brEle);
                                }
                            });
                            var res = React.createElement('span', null, elements);
                            console.error(res, 5);
                        } else {
                            console.error(response.message || '接口校验不通过', 5);
                        }
                    }
                    callbackError && callbackError(textStatus, response);
                });
            }
        }, {
            key: 'remove',
            value: function remove(options, callback, callbackError) {
                if (this._isLoading) {
                    console.log('remove wait is loading');
                    return;
                }

                this.extend(options, {
                    type: 'POST',
                    logtype: 'remove',
                    showLoading: true,
                    loadingText: '删除中……'
                });

                this.send(options, callback, function (textStatus, response) {
                    if (textStatus == 'Malformed') {
                        console.error(response.message || '删除出错', 5);
                    }
                    callbackError && callbackError(textStatus, response);
                });
            }
        }, {
            key: 'send',
            value: function send(options, callback, callbackError) {
                var that = this,
                    headers = {},
                    loadingTip,
                    startTick = Date.now();
                that._isLoading = true;
                that._queue[options.url] = true;

                options = options || {};
                options.logtype = options.logtype || 'default';

                if (options.showLoading) {
                    // loadingTip = Message.loading(options.loadingText || '加载中……', 0);
                }

                var user = Storage.get('User');
                if (user && user.accessToken) {
                    headers['X-Auth-Token'] = user.accessToken;
                }
                var blink = location.href;

                //处理成json提交数据，仅在请求头为json时
                if (options.contentType == 'application/json') {
                    options.data = JSON.stringify(options.data);
                }

                Ajax({
                    url: options.url,
                    data: options.data,
                    type: options.type || 'GET',
                    dataType: 'json',
                    timeout: options.timeout || that.timeout,
                    cache: that.cache,
                    contentType: options.contentType,
                    // processData: options.processData,
                    headers: headers,
                    success: function success(response, textStatus, jqXHR) {
                        that._isLoading = false;
                        delete that._queue[options.url];

                        if (!response || response.status != 200 && response.status != 204) {
                            that.logged(options.logtype, response.message, options.url);
                            if (response.status == 401) {
                                if (typeof callbackError == 'function') {
                                    callbackError('401', response);
                                }
                                blink = blink ? blink.split('/kiwi')[1] : '/account';
                                if (blink != '/account') {
                                    Storage.set('BackLink', blink);
                                }
                                browserHistory.push(_BaseConfig2.default.PATH + '/account');
                                return;
                            }
                            if (response.status == 500 && options.showLoading) {
                                //特殊处理接口正确返回，但返回错误码为500
                                console.error('服务器异常');
                                if (typeof callbackError == 'function') {
                                    callbackError('500', response);
                                }
                                return;
                            }

                            if (typeof callbackError == 'function') {
                                callbackError('Malformed', response);
                            }
                            return;
                        }

                        if (response.timestamp) {
                            //设置接口返回的服务器时间
                            that._timestamp = response.timestamp;
                        }

                        if (options.key) {
                            if (options.responseKey) {
                                that.responseKey = options.responseKey;
                            }
                            var content = that.getDataWithKey(response, that.responseKey);
                            //若请求的列表数据，需要添加key键，用于操作栏使用
                            for (var i = 0, len = content.length; i < len; i++) {
                                content[i].okey = content[i][options.key];
                            }
                        }

                        // if(options.type == 'POST' && options.url.indexOf('user') != -1){
                        //     HomeStore.setQuickLoginVisible(true);
                        //     HomeStore.emitChange();
                        //     return;
                        // }

                        if (typeof callback == 'function') {
                            callback(response);
                        }
                        if (that.isEmpty(that._queue) && typeof that.onEnd == 'function') {
                            that.onEnd.call(this);
                        }
                    },
                    error: function error(jqXHR, textStatus, errorThrown) {
                        that.logged(options.logtype, textStatus, options.url);
                        delete that._queue[options.url];

                        if (jqXHR.status == 404) {
                            if (options.type == 'POST') {
                                HomeStore.setQuickLoginVisible(true);
                                HomeStore.emitChange();
                            } else {
                                //测试约定404为退出登录了
                                blink = blink ? blink.split('/kiwi')[1] : '/account';
                                if (blink != '/account') {
                                    Storage.set('BackLink', blink);
                                }
                                browserHistory.push(_BaseConfig2.default.PATH + '/account');
                                return;
                            }
                        }

                        if (options.showLoading) {
                            //约定接口不正常访问，统一提示用户服务器异常
                            console.error('服务器异常。');
                        }
                        if (typeof callbackError == 'function') {
                            // callbackError(textStatus, {});
                        }

                        if (that.isEmpty(that._queue) && typeof that._onEnd == 'function') {
                            that._onEnd.call(this);
                        }
                        that._isLoading = false;
                    },
                    complete: function complete(xhr, status) {
                        that._isLoading = false;
                        that._timeTick = Date.now() - startTick;
                        that.logged('time', '请求耗时约' + that._timeTick + 'ms', options.url);
                        if (loadingTip) {
                            loadingTip();
                        }
                    }
                });
            }
        }, {
            key: 'extend',
            value: function extend(options, opt) {
                options = options || {};
                for (var i in opt) {
                    options[i] = typeof options[i] == 'undefined' ? opt[i] : options[i];
                }
            }
        }, {
            key: 'logged',
            value: function logged(type, message, url) {
                console.info('[' + type + '] ' + message + ' url=' + url);
            }
        }, {
            key: 'isEmpty',
            value: function isEmpty(obj) {
                var flag = true;
                for (var i in obj) {
                    flag = false;
                    break;
                }

                return flag;
            }
        }, {
            key: 'getDataWithKey',
            value: function getDataWithKey(data, keyStr) {
                if (keyStr.indexOf('.') == -1 && keyStr.indexOf('[') == -1) {
                    return data[keyStr];
                }
                var keyArr = keyStr.split('.'),
                    len = keyArr.length,
                    i = 0,
                    tempObj = data,
                    reg = /^(.*)\[(\d+)\]$/;

                while (i < len) {
                    if (reg.test(keyArr[i])) {
                        var result = reg.exec(keyArr[i]);
                        if (!tempObj[result[1]]) {
                            tempObj = '';
                            break;
                        }
                        tempObj = tempObj[result[1]][result[2]];
                    } else {
                        tempObj = tempObj[keyArr[i]];
                    }
                    i++;
                }
                return tempObj;
            }
        }]);

        return BaseReq;
    }();

    exports.default = BaseReq;
});