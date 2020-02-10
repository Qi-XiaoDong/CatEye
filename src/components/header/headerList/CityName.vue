<template>
<div class="choice-city float-left">
  <div class="city-name">
    宝鸡
    <i class="iconfont el-icon-caret-bottom"></i>
  </div>
  <div class="choice">
    <div class="cur-city">
      <p>
        当前城市：<span> 宝鸡</span>
      </p>
     </div>
    <div class="all-city">
      <div class="clearfix item" 
        v-for="(ele,index) in this.letter"
        :key="index"
      >
        <div class="tip float-left">{{ele}}</div>
        <div class="city"

        >
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span><span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span><span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span><span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span><span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">宝鸡</span>
          <span class="tip-city">哈瑟克斯坦</span>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data(){
    return {
        letter:'ABCDEFGHRGKLMNOPQRSTUVWXYZ',
        // allCity:[
        //   {
        //     id:,
        //     w:,
        //     cityName:,
        //   }
        // ]
    }
  },
  created(){
    this.letter = this.letter.split("");
   
  }
}
</script>

<style lang="less" scoped>
  @import "../../../assets/css/default/header/cityName.less";
</style>