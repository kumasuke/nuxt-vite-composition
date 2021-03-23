import { computed } from '@nuxtjs/composition-api'
import { MenuStore } from '~/store'

export default function () {
  const menu = MenuStore
  const toggle = () => menu.toggle()
  const isOpen = computed(() => menu.isOpened)
  return {
    // state
    isOpen,
    // functions
    toggle,
  }
}
