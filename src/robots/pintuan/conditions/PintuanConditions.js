/**
 * 生成时间：2017.03.20 11:22:33
 * 该文件系自动生成，手动修改可能会被替换
 * 搜索条件：拼团
 * 如果没有搜索条件返回空数组
 * {
 * 'key': '关键字',
 * 'type': '类型',
 * 'label': '显示名称',
 * 'placeholder': '默认占位文字',
 * 'data': '附加的数据'
 * }
 */
const conditions = [{
    key: 'bn',
    type: 'text',
    label: '商品编号',
    placeholder: '请输入商品编号'
}, {
    key: 'name',
    type: 'text',
    label: '商品名称',
    placeholder: '请输入商品名称'
}, {
    key: 'marketable',
    type: 'select',
    label: '下架商品是否显示',
    placeholder: '请选择下架状态',
    data: [{
        value: '1',
        label: '是'
    }, {
        value: '0',
        label: '否'
    }]
}, ];

export default conditions;
