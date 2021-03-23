import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'menu',
  stateFactory: true,
  namespaced: true,
})
export default class Menu extends VuexModule {
  private opened: boolean = false

  public get isOpened() {
    return this.opened
  }

  @Mutation
  public toggle() {
    this.opened = !this.opened
  }
}
