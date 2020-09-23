<template>
  <el-breadcrumb class="breadcrumb-wrap">
    <el-breadcrumb-item
      v-for="item of breadcrumbList"
      :key="item.key"
      class="item"
    >{{ item.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Breadcrumb',
  computed: {
    ...mapGetters(['breadcrumbList'])
  }
}
</script>

<style scoped lang="scss">
</style>
