import { createContext, useState, useEffect } from 'react'


const ProductContext = createContext()

function ProductProvider ({ children }) {
  const [list, setList] = useState([]) 
  const [loading, setLoading] = useState(true) 
  const [selectedProduct, setSelectedProduct] = useState({})
  const [search, setSearch] = useState('')

  
  useEffect(() => {
    setTimeout(() => {
      setList(productos)
      setLoading(false)
    }, 2000)
  }, [])

  const data = {
    list,
    loading,
    selectedProduct,
    setSelectedProduct,
    search,
    setSearch
  }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  )
}

export {
  ProductContext,
  ProductProvider
}
