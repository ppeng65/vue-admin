<template>
  <div class="sider-bar" :class="{ 'hide-menu': isCollapse }">
    <el-scrollbar class="menu-wrap">
      <el-menu
        :default-active="menuActive.key"
        class="el-menu-vertical-demo"
        text-color="#bfcbd9"
        background-color="#304156"
        active-text-color="#409EFF"
        :collapse-transition="false"
        :unique-opened="false"
        :collapse="isCollapse"
        mode="vertical"
      >
        <menus v-for="item of menuList" :key="item.module.key" :menuItem="item" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import menus from './menus'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuWrap',
  components: { menus },
  computed: {
    ...mapGetters(['isCollapse', 'menuList', 'breadcrumbList']),
    menuActive() {
      const menuLight = this.breadcrumbList.slice(this.breadcrumbList.length - 1)
      return menuLight[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.sider-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 210px;
  bottom: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #304156;
  transition: all .3s;
  &.hide-menu {
    width: 54px;
    /deep/ .el-menu-item {
      padding: 0!important;
      .el-tooltip {
        padding: 0!important;
        text-align: center;
      }
    }
    /deep/ .el-submenu__title {
      padding: 0!important;
      text-align: center;
      span {
        display: none;
      }
    }
  }
  .menu-wrap {
    height: 100%;
    /deep/ .el-scrollbar__wrap {
      overflow-x: hidden;
      .el-menu {
        width: 100%;
        height: 100%;
        border: 0;
        .el-submenu {
          .el-menu {
            .el-menu-item {
              background-color: #1f2d3d!important;
            }
          }
        }
      }
    }
  }
}
</style>
