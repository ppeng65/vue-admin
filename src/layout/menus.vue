<template>
  <div v-if="menuItem.module.canAccess">
    <template v-if="menuItem.routes && menuItem.routes.length > 0">
      <el-submenu :index="menuItem.module.key">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ menuItem.module.title }}</span>
        </template>
        <Menus v-for="item of menuItem.routes" :key="item.module.key" :menuItem="item" />
      </el-submenu>
    </template>

    <template v-else>
      <router-link :to="`/${menuItem.module.path}`" tag="div">
        <el-menu-item :index="menuItem.module.key">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ menuItem.module.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Menus',
  props: {
    menuItem: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">

</style>
