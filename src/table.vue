<template>
  <div>
    <a-button type="primary">新建</a-button>
    <a-table :columns="columns" :data-source="data">  
    </a-table>
  </div>
</template>
<script>
import Button from 'ant-design-vue/lib/button'
import Table from 'ant-design-vue/lib/table'
import 'ant-design-vue/lib/button/style/css'
import 'ant-design-vue/lib/table/style/css'

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default{
    name:'Table',
    components:{
        AButton:Button,
        ATable:Table
    },
    data:function() {
        return  {
           data,
           columns
        }
    }
}
</script>
<style>
  h1{
    color: #ffb93f;
  }
</style>