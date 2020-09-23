<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import router from './auth/router'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  watch: {
    $route(newV) {
      if (newV.path === '/404' || newV.path === '/login') {
        return
      }
      const pathname = newV.path.substr(1)
      const breadcrumb = router.breadcrumbByPath(pathname)
      this.setBreadcrumb(breadcrumb)
      const currentTabcard = breadcrumb.slice(breadcrumb.length - 1)
      this.setTabcard(currentTabcard)
      this.setTabcardVal(currentTabcard[0].key)
    }
  },
  methods: {
    ...mapMutations(['setBreadcrumb', 'setTabcardVal', 'setTabcard'])
  }
}
</script>

<style lang="scss">
</style>
