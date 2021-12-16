import { Store } from 'vuex'
import { initialiseStores, cart } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  nuxtServerInit(_: any, { app }: any) {
    const cartItems = app.$cookies.get('cart')
    cart.SET_CART_ITEMS(cartItems)
  },
}
