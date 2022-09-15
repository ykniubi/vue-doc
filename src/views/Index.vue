<template>
  <el-container style="height: 100vh; ">
    <el-aside width="300px" v-show="showMenu">
      <div class="logo">
        <h1>SUPER SDK</h1>
      </div>
      <el-menu :default-active="$route.path">
        <el-menu-item :index="`/index/content/${item.id}`" @click="toContent(item.id)" v-for="(item) in normalMenu"
          :key="item.id">{{item.title}}</el-menu-item>
        <el-submenu :index="`/index/content/${item.id}`" v-for="item in subMenu" :key="item.id">
          <template v-slot:title>{{item.title}}</template>
          <el-menu-item :index="`/index/content/${subItem.id}`" @click="toContent(subItem.id)"
            v-for="(subItem) in item.children" :key="subItem.id">{{subItem.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <div class="menuControl">
          <a @click="showMenu = !showMenu" style="z-index: 999;">
            <i :class="{'el-icon-s-fold':showMenu,'el-icon-s-unfold':!showMenu}"></i>
          </a>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      showMenu: true,
      mockMenu: [
        { title: '1. 产品概述', id: 123 },
        { title: '2. 接入指南', id: 33 },
        {
          title: '3. 合规指南',
          id: 589,
          children: [
            { title: '应用合规指南', id: 233 },
            { title: 'App上架指南', id: 999 }
          ]
        },
        {
          title: '4. 集成指南',
          id: 666,
          children: [
            { title: 'IOS集成指南', id: 989 },
            { title: 'Android集成指南', id: 5345 },
            { title: 'Web集成指南', id: 333 }
          ]
        },
      ]
    };
  },
  methods: {
    toContent(id) {
      let jumpMenu = this.jumpMenu
      this.$router.push({ name: "content", params: { id } }).catch(err => err);
    },
  },
  computed: {
    normalMenu() {
      return this.mockMenu.filter(item => !item.children)
    },
    subMenu() {
      return this.mockMenu.filter(item => item.children)
    },
    jumpMenu() {
      let normalMenu = this.normalMenu
      let subMenu = this.subMenu
      let jumpMenu = []
      jumpMenu = jumpMenu.concat(normalMenu)
      subMenu.forEach(item => jumpMenu = jumpMenu.concat(item.children))
      return jumpMenu
    }
  },
  mounted() {
    this.$store.dispatch('setJumpMenu', this.jumpMenu)
  }
}
</script>


<style lang="less" scoped>
.menuControl {
  display: flex;
  align-items: center;
  height: 100%;

  a {
    display: inline-block;
    padding: 5px 10px;
    font-size: 24px;
    cursor: pointer;
  }
}

aside {
  .el-menu {
    border-right: none !important;
  }

  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    margin: 20px 0;
  }

  font-family: -apple-system,
  BlinkMacSystemFont,
  Segoe UI,
  Roboto,
  Helvetica Neue,
  Arial,
  Noto Sans,
  sans-serif,
  apple color emoji,
  segoe ui emoji,
  Segoe UI Symbol,
  noto color emoji;
  border: 1px solid #eee;
}
</style>
