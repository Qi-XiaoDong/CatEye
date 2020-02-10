<template>
  <div class="user float-right">
    <!-- App 推广 -->
    <div class="app float-left">
      <div>
        <span class="iconfont phone"></span>
        <span class="down">APP下载</span>
        <i class="iconfont el-icon-caret-bottom"></i>
      </div>
      <div class="drop-down">
        <div>
          <p class="down-app">扫码下载App</p>
          <p class="discount">选座更优惠</p>
        </div>
      </div>
    </div>
  <!-- 搜索框 -->
    <div class="seach float-left">
      <div class="form">
        <input type="text" placeholder="找影视剧、影人、影院">
        <span class="seach-icon el-icon-search"></span>
      </div>
    </div>
<!-- 用户信息 -->
    <div class="user float-left">
      <div class="user-info">
        <a href="">
          <img src="../../../assets/img/user.png" alt="">
        </a>
         <i class="iconfont el-icon-caret-bottom"></i>
      </div>

      <div class="dorp-login">
        <a href="">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  @import '../../../assets/css/default/header/headerUser.less';
</style>