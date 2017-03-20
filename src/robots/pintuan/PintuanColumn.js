/**
 * 该文件系自动生成，手动修改可能会被替换
 * 表头：拼团活动
 * {
 * "title": "显示的名称",
 * "dataIndex": "排序标识",
 * "key": "列的唯一标识",
 * "checked": "是否默认显示"
 * }
 */
const columns = [{
    title: '编号',
    dataIndex: 'id',
    key: 'id',
    checked: true,
}, {
    title: '拼团ID',
    dataIndex: 'pintuanId',
    key: 'pintuanId',
    checked: true,
}, {
    title: '拼团名称',
    dataIndex: 'pintuanName',
    key: 'pintuanName',
    checked: true,
}, {
    title: '开始时间',
    dataIndex: 'startedAt',
    key: 'startedAt',
    checked: true,
    type: 'date'
}, {
    title: '结束时间',
    dataIndex: 'endedAt',
    key: 'endedAt',
    checked: true,
    type: 'date'
}, {
    title: '佣金',
    dataIndex: 'commissionRate',
    key: 'commissionRate',
    checked: true,
}, {
    title: '看板可以',
    dataIndex: 'visible',
    key: 'visible',
    checked: true,
}, {
    title: '排序',
    dataIndex: 'sortNum',
    key: 'sortNum',
    checked: true
}];

export default columns;