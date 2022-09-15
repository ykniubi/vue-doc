<template>
  <div class="overviewContainer">
    <Gotop />

    <el-backtop target=".overviewContainer">
    </el-backtop>
    <!-- <h1>{{this.$route.params.id}}</h1> -->
    <!-- <h1>{{this.$route.query.jumpMenu}}</h1> -->

    <Goto :menu="menu" />
    <div class="toPrevRoute" v-show="!isFirst">
      <a href="javascript:;" @click="routerPrevOrNext(true)">
        <i class="el-icon-arrow-left"></i>
      </a>
    </div>
    <div style="width: 50%; margin: 0 auto;">
      <h1 @mouseenter="isHhover = !isHhover" @mouseleave="isHhover = !isHhover">
        <a href="#openinstall---产品概述:;" class="linkContainer" name="openinstall---产品概述">
        </a>
        openinstall - 产品概述
      </h1>
      <p class="imgContainer">
        <a href="javascript:;">
          <el-image style="width: 100%;" :src="img.yuanli.url" :preview-src-list="img.yuanli.srcList">
          </el-image>
        </a>
      </p>
      <h3>
        <a href="#一、App传参安装" class="linkContainer" name="一、App传参安装">
        </a>
        一、App传参安装
      </h3>
      <p>
        <strong>
          openinstall的核心价值在于，帮助Android/iOS开发者精确的获取App每一次安装的分享(或推广)来源。
        </strong>
      </p>
      <p>
        大致原理如下：
      </p>
      <ul>
        <li>
          <p>
            开发者在分享的h5页面上集成openinstall web sdk，发布分享链接时在url上动态的拼接任意的自定义参数（如推广渠道号，邀请码，游戏房间号等等）；
          </p>
        </li>
        <li>
          <p>
            当某一终端访问该h5页面时，openinstall web sdk将同时确定该设备的个性化信息和采集自定义参数，上传至openinstall服务器，
            待用户通过该h5页面安装App后首次打开时（如当前设备已安装该App，将直接拉起App），使用openinstall Android/iOS sdk从openinstall服务器再取回暂存的自定义参数；
          </p>
        </li>
        <li>
          <p>
            开发者根据各自的需求，在分享链接自定义拼接各种动态参数。比如通过在分享链接url中附带App邀请人的用户id，就可达到免填邀请码的效果。对战类游戏App通过在url中附带游戏房间号，新老用户都可通过该url链接直接进入邀请人的对战房间，更多使用场景均取决于开发者的需求。
          </p>
        </li>
      </ul>
      <p class="imgContainer">
        <a href="javascript:;">
          <el-image style="width: 100%;" :src="img.getInstall.url" :preview-src-list="img.getInstall.srcList">
          </el-image>
        </a>
      </p>
      <p>
        更多详情看
        <a href="javascript:;" style="color: #4183c4;" class="defaultA">
          App传参安装
        </a>
      </p>
      <h3>
        <a href="#二、渠道统计" class="linkContainer" name="二、渠道统计">
        </a>
        二、渠道统计
      </h3>
      <p>
        <strong>
          渠道统计的意义在于确定App每一次安装的推广来源，根据统计数据来及时调整推广计划。
        </strong>
      </p>
      <p>
        openinstall渠道分为H5渠道、广告平台渠道、ASA渠道。其中【H5渠道】还额外支持渠道包形式统计。
      </p>
      <p>
        <strong>
          1. H5渠道
        </strong>
      </p>
      <ul>
        <li>
          <p>提供一个自定义的H5页面作为App的安装引导页，并在该页面上集成openinstall web sdk；</p>
        </li>
        <li>
          <p>在openinstall平台创建任意多个渠道，openinstall将为每个渠道生成一个带渠道编号的url链接，通过某个渠道链接带来的安装，均归因于该渠道；</p>
        </li>
        <li>
          <p>H5渠道免除了手工生成渠道包，同时兼容Android/iOS平台，可灵活适用于多个推广场景，如App内的分享，二维码的线下投放，各论坛的线上投放等等；</p>
        </li>
        <li>
          <p>技术上，H5渠道利用了openinstall携参安装的原理，渠道H5页面上集成的web
            sdk将收集设备指纹与渠道链接上的渠道编号，App安装后首次打开进行初始化时，将再次收集设备指纹完成配对，从而确定此次安装的渠道来源。</p>
        </li>
      </ul>
      <h3>
        <a href="#三、一键拉起" class="linkContainer" name="三、一键拉起">
        </a>
        三、一键拉起
      </h3>
      <ul>
        <li>
          <p>在App已安装的情况下，openinstall通过标准的scheme，universal
            links等技术，从各种浏览器（兼容国内50+主流浏览器与社交平台，包括QQ、新浪微博、钉钉等主流社交软件的内置浏览器）一键拉起App并传递自定义参数，一键直达页面。</p>
        </li>
        <li>
          <p>避免了用户在已安装App的情况下却引导用户去安装App，将用户操作流程变得更合理，借助一键拉起传参功能还能实现更多的便捷场景，让App功能流程体验更佳。</p>
        </li>
      </ul>
      <p class="imgContainer">
        <a href="javascript:;">
          <el-image style="width: 100%;" :src="img.getWakeup.url" :preview-src-list="img.getWakeup.srcList">
          </el-image>
        </a>
      </p>
      <p>
        更多详情看
        <a href="javascript:;" style="color: #4183c4;" class="defaultA">
          一键拉起
        </a>
      </p>
      <h3>
        <a href="#四、快速安装" class="linkContainer" name="四、快速安装">
        </a>
        四、快速安装
      </h3>
      <ul>
        <li>
          <p>在App未安装的情况下，openinstall帮助您在社交平台快速安装App，实现App的快速安装，从此告别“右上角打开浏览器”，大幅提升安装概率，助力用户增长；</p>
        </li>
        <li>
          <p>
            在支持快速安装功能的应用环境中（例如：支付宝、钉钉），用户打开落地页后点击安装按钮，openinstall快速安装功能可以自动跳到设备默认浏览器中安装App安装包文件，免去用户还需要手动点击使用”默认浏览器“打开的操作。优化用户的安装环节，减少操作流程，从而降低用户的流失率，提高转化率。
          </p>
        </li>
      </ul>

      <!-- <button @click="backTop">去顶部</button> -->
    </div>
    <div class="toNextRoute" v-show="!isLast">
      <a href="javascript:;" @click="routerPrevOrNext(false)">
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>

  </div>
</template>

<script>
import Goto from "../components/Goto/index.vue";
import Gotop from "../components/Gotop/index.vue";
import { mapState } from "vuex";
export default {
  name: "Content",
  data() {
    return {
      gotop: true,
      docid: 1,
      img: {
        yuanli: {
          url: require("@/assets/images/产品概述/yuanli.png"),
          srcList: [
            require("@/assets/images/产品概述/yuanli.png")
          ],
        },
        getInstall: {
          url: require("@/assets/images/产品概述/getInstall.png"),
          srcList: [
            require("@/assets/images/产品概述/getInstall.png")
          ],
        },
        getWakeup: {
          url: require("@/assets/images/产品概述/getWakeup.png"),
          srcList: [
            require("@/assets/images/产品概述/getWakeup.png")
          ],
        }
      },
      isHhover: false,
      menu: {
        title: "openinstall---产品概述",
        subTitles: [
          "一、App传参安装",
          "二、渠道统计",
          "三、一键拉起",
          "四、快速安装"
        ]
      }
    };
  },
  // mounted() {
  //   let id = this.$route.params.id;
  //   this.docid = id;
  //   console.log(id)
  // },
  methods: {
    // 点击左右箭头跳转
    routerPrevOrNext(isPrev) {
      let id = Number(this.$route.params.id)
      let jumpMenu = this.jumpMenu
      let index = jumpMenu.findIndex(item => item.id === id)
      if (isPrev) {
        // 向前跳转
        // 如果是第一个则不跳转
        if (!this.isFirst) {
          this.$router.push({ name: "content", params: { id: jumpMenu[index - 1].id } }).catch(err => err);
        }
      }
      else {
        // 向后跳转
        // 如果是最后一个则不跳转
        if (!this.isLast) {
          this.$router.push({ name: "content", params: { id: jumpMenu[index + 1].id } }).catch(err => err);
        }
      }
    },
  },
  computed: {
    ...mapState(['jumpMenu']),
    // 当前路由是不是第一个
    isFirst() {
      let id = Number(this.$route.params.id)
      let jumpMenu = this.jumpMenu
      let index = jumpMenu.findIndex(item => item.id === id)
      return index === 0
    },
    // 当前路由是不是第最后一个
    isLast() {
      let id = Number(this.$route.params.id)
      let jumpMenu = this.jumpMenu
      let index = jumpMenu.findIndex(item => item.id === id)
      return index === jumpMenu.length - 1
    }
  },
  components: { Goto, Gotop },

}
</script>

<style lang="less" scoped>
.defaultA:hover {
  text-decoration: underline;
}

.overviewContainer {
  display: flex;
  padding: 100px 0;

  .toPrevRoute,
  .toNextRoute {
    // background: red;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100px;
    top: 0;

    i {
      font-size: 40px;
      line-height: 100px;
      text-align: center;
      width: 50px;
      color: #dbdbdb;

      &:hover {
        color: #000;
      }
    }
  }

  .toNextRoute {
    right: 0;
  }
}


.linkContainer {
  float: left;
  margin-left: -32px;
}

.dashboard {
  &-container {
    margin: 30px;

    .imgContainer {
      width: 100%;
    }
  }
}
</style>
