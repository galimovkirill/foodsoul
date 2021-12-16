import {
  Module,
  VuexAction,
  VuexModule,
  VuexMutation,
} from 'nuxt-property-decorator'
import { getElementIndex } from '~/utils'

interface CartItem {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  count: number
}

@Module({ name: 'cart', namespaced: true, stateFactory: true })
export default class Cart extends VuexModule {
  public items: CartItem[] = []

  get getCartItems(): CartItem[] {
    return this.items
  }

  get getCartTotalPrice(): any {
    return this.items.reduce((acc: any, curr: any) => {
      return acc + curr.price * curr.count
    }, 0)
  }

  @VuexMutation
  public SET_CART_ITEMS(items: CartItem[]) {
    this.items = items
  }

  @VuexMutation
  public ADD_CART_ITEM(item: CartItem) {
    this.items.push(item)
  }

  @VuexMutation
  public REMOVE_CART_ITEM(itemIndex: number) {
    this.items.splice(itemIndex, 1)
  }

  @VuexMutation
  public INCREMENT_CART_ITEM(itemIndex: number) {
    this.items[itemIndex].count++
  }

  @VuexMutation
  public DECREMENT_CART_ITEM(itemIndex: number) {
    this.items[itemIndex].count--
  }

  @VuexAction
  public updateCartCookies() {
    const cookies = this.store.app.$cookies // TODO: fix TS error
    cookies.set('cart', this.items)
  }

  @VuexAction
  public setCartItems(items: CartItem[]) {
    this.SET_CART_ITEMS(items)
  }

  @VuexAction
  public addCartItem(item: CartItem) {
    const itemIndex = getElementIndex(this.items, 'id', item)

    if (itemIndex !== -1) {
      this.INCREMENT_CART_ITEM(itemIndex)
      this.updateCartCookies()

      return 0
    }

    this.ADD_CART_ITEM({ ...item, count: 1 })
    this.updateCartCookies()
  }

  @VuexAction
  public removeCartItem(item: CartItem) {
    const itemIndex = getElementIndex(this.items, 'id', item)

    if (this.items[itemIndex].count <= 1) {
      this.REMOVE_CART_ITEM(itemIndex)
      this.updateCartCookies()

      return 0
    }

    this.DECREMENT_CART_ITEM(itemIndex)
    this.updateCartCookies()
  }

  @VuexAction
  public totalRemoveCartItem(item: CartItem) {
    const itemIndex = getElementIndex(this.items, 'id', item)
    this.REMOVE_CART_ITEM(itemIndex)
    this.updateCartCookies()
  }
}
