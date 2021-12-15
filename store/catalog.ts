import { Module, VuexModule, VuexAction } from 'nuxt-property-decorator'
import api from '@/services/api'

@Module({ name: 'catalog', namespaced: true, stateFactory: true })
export default class Catalog extends VuexModule {
  @VuexAction
  async fetchProducts() {
    const products = await api.products.getProducts()
    return products.data
  }
}
