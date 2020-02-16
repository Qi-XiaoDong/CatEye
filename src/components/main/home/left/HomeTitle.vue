<template>
  <div class="home-title clearfix"
   :class="[this.titleInfo.className]"
  >

    <!-- title -->
    <div class="item-title float-left ">
      {{this.titleInfo.title}}
      <span class="number">{{this.titleInfo.num}}</span>
    </div>

    <!-- 更多 -->
    <div class="more float-right ">
      <a  href="#">全部</a>
      <span class="el-icon-arrow-right"></span>
    </div>

  </div>
</template>

<script>
export default {
  props:['titleInfo'],
  data(){
    return {
      
    }
  },
}
</script>

<style lang="less" scoped>
  @import '../../../../assets/css/components/main/home/left/title.less';

</style>
