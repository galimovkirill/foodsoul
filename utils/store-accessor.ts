import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import StoreCatalog from '~/store/catalog'

let catalog: StoreCatalog

function initialiseStores(store: Store<any>): void {
  catalog = getModule(StoreCatalog, store)
}

export { initialiseStores, catalog }
