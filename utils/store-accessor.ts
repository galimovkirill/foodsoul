import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Catalog from '~/store/catalog'
import Cart from '~/store/cart'

let catalog: Catalog
let cart: Cart

function initialiseStores(store: Store<any>): void {
  catalog = getModule(Catalog, store)
  cart = getModule(Cart, store)
}

export { initialiseStores, catalog, cart }
