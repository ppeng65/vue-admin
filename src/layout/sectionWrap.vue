<template>
  <section class="section-wrap" :class="{'hide-section': isCollapse}">
    <header class="header-wrap">
      <div class="icon-wrap" @click="onToggleMenu">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" />
      </div>
      <div class="breadcrumb-wrap">
        <breadcrumb />
      </div>

      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrap">
            <img class="avatar" src="../assets/IMG_1748.jpg" alt="">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <div class="tabs-list">
      <el-tabs
        v-model="tabSelected"
        type="card"
        :closable="tabcardList.length > 1"
        @tab-remove="onRemoveTab"
      >
        <el-tab-pane
          :key="item.key"
          v-for="item in tabcardList"
          :name="item.key"
          :closable="item.key !== 'ModulePageIndex'"
        >
          <router-link slot="label" :to="`/${item.path}`" tag="span">
            <span class="tab-item">{{ item.title }}</span>
          </router-link>
        </el-tab-pane>
      </el-tabs>
    </div>
    <main class="section-content">
      <router-view />
    </main>
  </section>
</template>

<script>
import breadcrumb from './breadcrumb'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'SectionWrap',
  data() {
    return {
      tabSelected: ''
    }
  },
  components: { breadcrumb },
  mounted() {
    this.tabSelected = this.tabcardVal
  },
  computed: {
    ...mapGetters(['isCollapse', 'tabcardVal', 'tabcardList'])
  },
  watch: {
    tabcardVal: {
      handler(newV) {
        this.tabSelected = newV
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations(['setMenuStatus', 'setTabcardVal']),
    ...mapActions(['rmTabcardValAction']),
    // 是否折叠菜单
    onToggleMenu() {
      this.setMenuStatus(!this.isCollapse)
    },
    // 移除 tabitem
    onRemoveTab(target) {
      this.rmTabcardValAction(target)
    }
  }
}
</script>

<style scoped lang="scss">
  .section-wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: 210px;
    bottom: 0;
    overflow: hidden;
    transition: all 0.3s;
    &.hide-section {
      left: 54px;
    }
    .header-wrap {
      height: 50px;
      border-bottom: 1px solid #d8d8d8;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
      background-color: #ffffff;
      .icon-wrap {
        padding: 0 15px;
        float: left;
        height: 100%;
        cursor: pointer;
        i {
          line-height: 50px;
          font-size: 26px;
        }
      }

      .breadcrumb-wrap {
        margin-left: 8px;
        float: left;
        height: 100%;
        display: flex;
        align-items: center;
      }

      .right-menu {
        float: right;
        height: 100%;
        .avatar-container {
          margin-right: 30px;
          .avatar-wrap {
            margin-top: 5px;
            position: relative;
            cursor: pointer;
            .avatar {
              width: 40px;
              height: 40px;
              border-radius: 10px;
            }
            .el-icon-caret-bottom {
              position: absolute;
              right: -20px;
              top: 25px;
              font-size: 12px;
            }
          }
        }
      }
    }
    .tabs-list {
      /deep/.tab-item {
        font-size: 12px;
        color: #495060;
        &:hover {
          color: #409EFF;
        }
      }
      /deep/.is-active {
        .tab-item {
          color: #409EFF;
        }
      }
    }
    .section-content {
      position: absolute;
      left: 0;
      right: 0;
      top: 92px;
      bottom: 0;
      overflow: hidden;
      /deep/.el-tabs {
        height: 100%;
        .el-tabs__header {
          margin: 0;
        }
        .el-tabs__nav:focus {
          border: 0;
        }
      }
    }
  }
</style>
