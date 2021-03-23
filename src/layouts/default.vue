<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import useMenu from '~/composables/useMenu'
import Menu from '~/components/Menu.vue'

export default defineComponent({
  components: {
    Menu,
  },
  setup() {
    const { isOpen } = useMenu()

    useMeta(() => ({
      bodyAttrs: {
        class: isOpen.value ? 'active' : 'deactive',
      },
    }))
  },
  head: {},
})
</script>

<template>
  <div>
    <Menu />
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  &:hover {
    color: #fff;
    background-color: #3b8070;
  }
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  &:hover {
    color: #fff;
    background-color: #35495e;
  }
}
</style>
