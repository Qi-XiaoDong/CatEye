<template>
  <div class="header-wrap content clearfix">
    <header-list/>
    <header-user/>
  </div>
</template>

<script>
import HeaderList from './headerList/index.vue';
import HeaderUser from './headerUser/index.vue';
export default {
    data () {
      return {}
    },
    components:{
      HeaderList,
      HeaderUser
    }
}
</script>

<style lang="less" scoped>
  
</style>