import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export const busca = async (url, setData) => {
  const response = await api.get(url);
  setData(response.data);
}