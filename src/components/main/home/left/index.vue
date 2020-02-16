<template>
  <div class="home-left">
    <div class="movie-item">
      <home-title
        :titleInfo="this.info"
      />
      <home-info/>
    </div>

  </div>
</template>

<script>
  import HomeInfo from './HomeInfo.vue';
  import HomeTitle from './HomeTitle.vue'
export default {
  data () {
    return {

    }
  },
  props:['info'],
  components :{
    HomeTitle,
    HomeInfo,
  },
  created() {
    console.log(this.info)
  }

}
</script>

<style>
  
</style>