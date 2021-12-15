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
  public addCartItem(item: CartItem) {
    const itemIndex = getElementIndex(this.items, 'id', item)

    if (itemIndex !== -1) {
      this.INCREMENT_CART_ITEM(itemIndex)

      return 0
    }

    this.ADD_CART_ITEM({ ...item, count: 1 })
  }

  @VuexAction
  public removeCartItem(item: CartItem) {
    const itemIndex = getElementIndex(this.items, 'id', item)

    if (this.items[itemIndex].count <= 1) {
      this.REMOVE_CART_ITEM(itemIndex)

      return 0
    }

    this.DECREMENT_CART_ITEM(itemIndex)
  }
}
