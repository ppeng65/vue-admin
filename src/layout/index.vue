<template>
  <div class="layout-wrap">
    <menuWrap />
    <sectionWrap />
  </div>
</template>

<script>
import menuWrap from './menuWrap'
import sectionWrap from './sectionWrap'

export default {
  name: 'Layout',
  components: { menuWrap, sectionWrap }
}
</script>

<style scoped lang="scss">

</style>
