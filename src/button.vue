<template>
  <a-button type="primary" @click="say">{{text}}</a-button>
</template>
<script>
import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/lib/button/style/css'

export default{
    name:'hello',
    props:{
        msg:{
          type:'String',
          default:'hello world'
        }
    },
    components:{
        AButton:Button
    },
    data:function() {
        return  {
           text:'hello~~~'
        }
    },
    methods:{
      say(){
        alert(this.msg)
      }
    }
}
</script>
<style>
  h1{
    color: #ffb93f;
  }
</style>