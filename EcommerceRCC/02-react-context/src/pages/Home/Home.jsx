import ProductList from '@/components/ProductList/ProductList'
import ProductDetails from '@/components/ProductDetails/ProductDetails'
import { ProductProvider } from '@/context/ProductContext'
import Header from '@/components/Header/Header'
import Home from './pages/Home/Home.css'

const Home = () => {
  return (
    <ProductProvider>
      <Header />
      <div className='home-container'>
        <div className='izquierdo'>
          <h2>Product List</h2>
          <ProductList />
        </div>
        <div className='derecho'>
          <ProductDetails />
        </div>
      </div>
    </ProductProvider>
  )
}
export default Home
