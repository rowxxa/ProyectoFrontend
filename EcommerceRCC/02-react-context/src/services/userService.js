import axios from 'axios'

const BASE_URL = 'http://localhost:5173'


const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const getAllUsersService = (jwtToken) => axios.get(`${BASE_URL}/users`, { headers: { authorization: `Bearer ${jwtToken}` } })

export {
  loginUserService,
  registerUserService,
  getAllUsersService
}
