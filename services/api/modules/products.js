import http from '@/services/http'

export default {
  getProducts() {
    return http.get('/products')
  },
}
