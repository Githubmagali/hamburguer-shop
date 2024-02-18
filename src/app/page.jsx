import UserPage from '@/components/user'
import { CartProvider } from '../context/cartProvider'
import MenuPage from './menu/menuPage'


 function HomePage(){
  return(
  <>
    <UserPage />
  <CartProvider>
  <MenuPage />
  </CartProvider>
    </>

  )
}

export default HomePage