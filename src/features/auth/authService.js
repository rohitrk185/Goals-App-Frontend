import axios from 'axios'

const API_URI = process.env.REACT_APP_API_URL + '/api/users/';

// Register user
const register = async (userData) => {
  console.log(API_URI);
  const response = await axios.post(API_URI, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URI + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService;