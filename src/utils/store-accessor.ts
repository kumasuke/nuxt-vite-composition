/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Menu from '~/store/menu'

let MenuStore: Menu

function initialiseStores(store: Store<any>): void {
  MenuStore = getModule(Menu, store)
}

export { initialiseStores, MenuStore }
