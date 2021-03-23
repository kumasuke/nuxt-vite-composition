import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { initializeAxios } from '~/utils/axios'

export default defineNuxtPlugin((ctx) => {
  initializeAxios(ctx.$axios)
})
