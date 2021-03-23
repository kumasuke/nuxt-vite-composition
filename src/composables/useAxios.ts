// https://github.com/nuxt-community/axios-module/issues/393#issuecomment-678910500
import { useContext } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosRequestConfig } from 'axios'

export function useAxios(): NuxtAxiosInstance {
  const { $axios } = useContext()

  if (!$axios) {
    // throw error, no store provided
    throw new Error('nuxt axios is not defined!')
  }
  return $axios
}

export { AxiosRequestConfig }
