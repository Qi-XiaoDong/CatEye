<template>
  <div class="home-page content clearfix">

    <div class="movie float-left">
      <home-left
        v-for="ele in this.item"
        :key="ele.id"
        :info="ele"
      />
     
    </div>

    <div class="list float-right">
      右侧
    </div>

  </div>
</template>

<script>
  import HomeLeft from '../components/main/home/left/index.vue'
export default {
  data () {
    return {
      item : [
        {
          id:1,
          title:'正在热映',
          num:0,
          className:''
        },
        {
          id:2,
          title:'即将上映',
          num:122,
          className:'release'
        },
        {
          id:3,
          title:'热播电影',
          num:36,
          className:''
        }
      ]
    }
  },
  components : {
    HomeLeft
  }
  
}
</script>

<style lang="less" scoped>
  @import '../assets/css/main/home.less';
</style>