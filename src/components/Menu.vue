<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useMenu from '~/composables/useMenu'

export default defineComponent({
  setup() {
    const { isOpen, toggle } = useMenu()

    return {
      isOpen,
      toggle,
    }
  },
})
</script>

<template>
  <div class="m-4">
    <button type="button" :class="{ 'is-open': isOpen }" @click="toggle">
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path v-if="isOpen" d="M6 18L18 6M6 6l12 12"></path>
        <path v-else d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
