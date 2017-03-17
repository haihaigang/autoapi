import BaseConfig from '../config/BaseConfig';

class BaseReq {
    constructor() {
        this.host = BaseConfig.HOST; //接口地址
        this.phpHost = BaseConfig.PHP_HOST; //php接口地址
        this.pageSize = BaseConfig.PAGESIZE; //分页大小
        this.path = BaseConfig.PATH; //路由前缀路径
        this.timeout = 15000; //请求超时时间
        this.cache = true; //是否缓存
        this.isLoading = false; //是否正在请求
        this.queue = {}; //请求队列
        this.onEnd = function() {}; //当请求都完成
        this.loadingTip = undefined;
        this.timeTick = 0; //每次请求的时间
        this.responseKey = 'body.content'; //默认接口返回的内容结构体
        this.timestamp = undefined; //每次接口返回的当前服务器时间
    }

    send(options, callback, callbackError) {
        console.log('I am base send.');
        // options = this.processOptions();
        console.log(options)
    }

    processOptions(){
        return this.assign(this.defaultOptions, this.options);
    }

    assign(options, opts) {
        if ('assign' in Object) {
            return Object.assign(options, opts);
        } else {
            for(var i in opts){
                options[i] = opts[i];
            }
            return options;
        }
    }
}


export default BaseReq;