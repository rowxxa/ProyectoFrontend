import { useProductContext } from '@/hooks/useProductContext'

const ProductDetails = () => {
  const { selectedProduct } = useProductContext()
  return (
    <>
      {selectedProduct.title
        ? (
          <div>
            <img src={selectedProduct.img_url} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.artist}</p>
            <p>{selectedProduct.year}</p>
          </div>
          )
        : <h1>Selecciona un producto para ver el detalle</h1>}
    </>
  )
}
export default ProductDetails
