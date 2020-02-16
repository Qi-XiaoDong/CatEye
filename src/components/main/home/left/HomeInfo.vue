<template>
  <div class="movie-info">
    <ul class="movie-list">
      <li class="item"
        v-for="ele in info"
        :key="ele.id"
        :class="{hot_one:ele.type === 'hot'}"
      >
      <div class="item-box" :class="{enter:ele.type === 'up-comming'}">
        <div class="movie-img" >
          <a href="">
           <img :src="ele.imgUrl" alt="" >
          </a>
        </div>
        <!-- 热映点击购票区域 -->
        <div class="buy-tickets" v-if="ele.type === 'well-received'">
          <a href="">点击购票</a>
        </div>

        <!-- 即将上映 多少人想看 在即将上映区域有效-->
        <div class="miss-see" v-if="ele.type === 'up-comming'">
          <span>231313</span>
        </div>
        <!-- 预售 预告片 在即将上映区域有效 -->
        <div class="beforehand" v-if="ele.type === 'up-comming'">
          <a href="#" class="trailer">预告片</a>
          <a href="#" class="Advance-sale">预售</a>
        </div>
      </div>
        <!-- 上映时间  在即将上映区域有效-->
        <div class="up-time" v-if="ele.type === 'up-comming'">2月21日上映</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info:[
        {
          id:1233133,
          type:'hot',
          imgUrl:'https://p1.meituan.net/movie/551ddfa39aec08fcbd976308e7eca94d59535.jpg@350w_220h_1e_1c',
        }, {
          id:1233114733,
          type:'hot',
          imgUrl:'https://p0.meituan.net/movie/6c2edded2eedf30b1f684b9993782d2f1325478.jpg@160w_220h_1e_1c',
        }, {
          id:123317133,
          type:'hot',
          imgUrl:'https://p0.meituan.net/movie/6c2edded2eedf30b1f684b9993782d2f1325478.jpg@160w_220h_1e_1c',
        }, {
          id:1217433323133,
          type:'hot',
          imgUrl:'https://p0.meituan.net/movie/6c2edded2eedf30b1f684b9993782d2f1325478.jpg@160w_220h_1e_1c',
        }, {
          id:123173133,
          type:'hot',
          imgUrl:'https://p0.meituan.net/movie/6c2edded2eedf30b1f684b9993782d2f1325478.jpg@160w_220h_1e_1c',
        }, {
          id:12147161633133,
          type:'hot',
          imgUrl:'https://p0.meituan.net/movie/6c2edded2eedf30b1f684b9993782d2f1325478.jpg@160w_220h_1e_1c',
        }, {
          id:123317485616133,
          type:'hot',
          imgUrl:'https://p0.meituan.net/movie/6c2edded2eedf30b1f684b9993782d2f1325478.jpg@160w_220h_1e_1c',
        }, 
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../../../assets/css/components/main/home/left/info.less';
</style>