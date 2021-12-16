import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Catalog from '~/store/catalog'
import Cart from '~/store/cart'
import Modal from '~/store/modal'

let catalog: Catalog
let cart: Cart
let modal: Modal

function initialiseStores(store: Store<any>): void {
  catalog = getModule(Catalog, store)
  cart = getModule(Cart, store)
  modal = getModule(Modal, store)
}

export { initialiseStores, catalog, cart, modal }
