define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    // import { Icon, Popconfirm } from 'antd';
    // import OPERATE_TYPE from '../constants/OperateTypeConstants'

    /**
     * 表头对应的展示形式关系表
     * 预先定义各种不同表头的展示形式
     * 类型包括：
     * text 普通文本类型
     * date 日期类型，处理时间戳
     * operation 操作栏，默认包含编辑、删除按钮
     */
    var TYPES_TO_RENDERS = {
        text: function text(_text, record) {},
        date: function date(text, record) {},
        operation: function operation(text, record) {
            // return (
            //          <span>
            //              <a href="javascript:;" onClick={record.onOperateClick.bind(this,OPERATE_TYPE.EDIT)}><Icon type="edit" /></a>
            //              <span className="ant-divider"></span>
            //              <Popconfirm title="您确认要删除吗？" onConfirm={record.onOperateClick.bind(this,OPERATE_TYPE.REMOVE)}><a href="javascript:;"><Icon type="delete" /></a></Popconfirm>
            //          </span>
            //      );
        }
    };

    exports.default = TYPES_TO_RENDERS;
});