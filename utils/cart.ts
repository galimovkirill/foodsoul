import { cart } from '~/utils/store-accessor'

export function getCartItemCount(itemId: number): number {
  const item = cart.items.find((el) => el.id === itemId)
  if (item) return item.count

  return 0
}

export function isCartContainsItem(itemId: number): boolean {
  return cart.items.some((el) => el.id === itemId)
}
