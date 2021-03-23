<script lang="ts">
import { defineComponent, onMounted, useAsync } from '@nuxtjs/composition-api'
import useUserRepositories from '@/composables/useUserRepositories'
import Logo from '~/components/Logo.vue'

export default defineComponent({
  components: {
    Logo,
  },
  setup() {
    const { data, fetching, error, fetchUser } = useUserRepositories()

    useAsync(fetchUser)

    onMounted(() => {
      console.debug('onMounted', data)
    })
    return {
      user: data,
      loading: fetching,
      error,
    }
  },
})
</script>

<template>
  <div
    class="text-center items-center justify-center flex mx-auto my-0 min-h-screen"
  >
    <div>
      <logo />
      <h1 class="title">nuxt-vite</h1>
      <h2 class="subtitle">My remarkable Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div>
        <p>loading: {{ loading }}</p>
        <pre v-if="!loading" v-text="user" />
      </div>
    </div>
  </div>
</template>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
