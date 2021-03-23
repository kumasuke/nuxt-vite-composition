import { reactive, toRefs } from '@nuxtjs/composition-api'
import { NuxtError } from '@nuxt/types'
import { useAxios, AxiosRequestConfig } from '~/composables/useAxios'

interface ReactiveState {
  error: NuxtError | null
  requesting: boolean
}

export default function <T = any>() {
  const axios = useAxios()
  const state = reactive<ReactiveState>({
    error: null,
    requesting: false,
  })
  async function requestData(config: AxiosRequestConfig): Promise<T> {
    state.requesting = true
    return await axios
      .request<T>(config)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        const nuxtError: NuxtError = {
          message: error.message,
          statusCode: error.response?.status,
        }
        state.error = nuxtError
        return error
      })
      .finally(() => {
        state.requesting = false
      })
  }
  return {
    ...toRefs(state),
    requestData,
  }
}
