<template>
<div class="default-page">
  <!-- 网站通用页面，上中下布局 -->
  <el-container>

    <el-header style="height:'';padding:0">
      <my-header/>
    </el-header>
<!--  -->
    <el-main style="height:'';padding:0">
      <router-view/>
    </el-main>

    <el-footer style="height:'';padding:0">
      <my-footer/>
    </el-footer>

   
</el-container>

  
</div>
</template>
  
<script>

import myHeader from '@/components/header/index.vue';
import myFooter from '@/components/footer/index.vue';
export default {
  data() {
    return {

    }
  },
  components:{
    myHeader,
    myFooter
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/css/default/header/header.less";
</style>