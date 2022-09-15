<template>
  <el-backtop style="box-shadow: none;" class="goTop">
  </el-backtop>
  <!-- <div class="goTop"></div> -->
</template>
<script>
export default {
 
}
</script>

<style lang="less" scoped>
.goTop {
  border-radius: 0%;
  width: 38px;
  height: 38px;
  line-height: 38px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%) !important;
  border: 1px solid rgba(0, 0, 0, .07) !important;
  position: fixed;
  bottom: 100px !important;
  right: 40px;
  text-align: center;
}

</style>