import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://water-my-plants-61621.herokuapp.com/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};
