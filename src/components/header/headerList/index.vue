<template>
  <div class="list float-left">
      <h1 class="float-left">
        <a href=""><span>猫眼电影</span></a>
      </h1>
      <!-- 选择城市 -->
      <city-name/>
      <!-- 网站导航 -->
      <nav class="float-left navbar">
        <ul class="clearfix">
          <li class="item float-left active">
            <a href="#">首页</a>
          </li>
           <li class="item float-left">
            <a href="#">电影</a>
          </li>
           <li class="item float-left">
            <a href="#">演出</a>
          </li>
            <li class="item float-left">
            <a href="#">榜单</a>
          </li>  <li class="item float-left">
            <a href="#">热点</a>
          </li>  <li class="item float-left">
            <a href="#">商城</a>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
  import cityName from './CityName.vue'
export default {
  data() {
    return {

    }
    
  },
  components:{
    cityName
  }
}
</script>

<style lang="less" scoped>
  @import "../../../assets/css/default/header/headerList.less";
</style>