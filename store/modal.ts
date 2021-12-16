import {
  Module,
  VuexModule,
  VuexAction,
  VuexMutation,
} from 'nuxt-property-decorator'

@Module({ name: 'modal', namespaced: true, stateFactory: true })
export default class Modal extends VuexModule {
  public shownModal: string = ''

  get getShownModal(): string {
    return this.shownModal
  }

  @VuexMutation
  SET_SHOWN_MODAL(modalName: string) {
    this.shownModal = modalName
  }

  @VuexAction
  setShownModal(modalName: string) {
    this.SET_SHOWN_MODAL(modalName)
  }

  @VuexAction
  closeModal() {
    this.SET_SHOWN_MODAL('')
  }
}
