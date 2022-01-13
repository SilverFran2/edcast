import axios from 'axios';

const axiosUsers = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`
});

export default axiosUsers;