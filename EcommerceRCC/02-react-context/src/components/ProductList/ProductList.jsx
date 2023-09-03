import { useProductContext } from '@/hooks/useProductContext'


const ProductList = () => {
  const { list, loading, setSelectedProduct, search } = useProductContext()

  const filteredProduct = list.filter(
    product => product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className='row-container'>
        {loading
          ? <h1>Cargando...</h1>
          : filteredProduct.map((product) => (
            <div
              className='row-product'
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >
              <h4>{Product.title}</h4>
      
            </div>
          ))}
      </div>
    </>

  )
}
export default ProductList
