import Home from './pages/Home/Home'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Navbar from './components/Navbar/navBar';
import React, { useEffect, useState } from 'react'

function App () {
  const App = () => {
    const [users, setUsers] = useState([])
  
    const fetchUserData = () => {
      fetch('https://ecomerce-master.herokuapp.com/api/v1/login')
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }

    useEffect(() => {
      fetchUserData()
    }, [])
  
  return (
    <>
      <Home />
      <Navbar />
        <div className='container-fluid'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/Register' element={<Register />} />
            <Route path="/store" element={<Store />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
    </>
  )
}
}
export default App;
