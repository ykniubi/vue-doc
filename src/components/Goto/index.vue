<template>
  <div style="" class="goTo" @mouseenter="isMouseEnter = !isMouseEnter" @mouseleave="isMouseEnter = !isMouseEnter">
    <ul v-show="isMouseEnter" style="margin-right: 20px;">
      <li>
        <a :href="`#${menu.title}`">
          {{menu.title}}
        </a>
      </li>
      <ul>
        <ul>
          <li class="subMenu" v-for="(subTitle, index) in menu.subTitles" :key="index"><a
              :href="`#${subTitle}`">{{subTitle}}</a></li>
        </ul>
      </ul>
    </ul>
    <i class="el-icon-rank">
    </i>
  </div>
</template>

<script>
export default {
  props: ['menu'],
  data() {
    return {
      isMouseEnter: false
    }
  },
}
</script>

<style lang="less" scoped>
a {
  color: #000;
  text-decoration: none;
}

ul {
  text-align: left;
  list-style: none;
  margin: 0;
  padding: 0;
}

a:hover {
  text-decoration: underline;
}

.subMenu {
  padding-left: 30px;
}

.goTo {
  z-index: 999;
  background: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  line-height: 38px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  border: 1px solid rgba(0, 0, 0, .07);
  position: fixed;
  top: 80px;
  right: 40px;
  text-align: right;
}

.goTo:hover {}
</style>