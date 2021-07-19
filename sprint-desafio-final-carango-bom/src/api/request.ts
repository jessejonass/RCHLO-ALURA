import axios, { Method, AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const request = <T>(
  method: Method,
  url: string,
  params?: string,
): Promise<AxiosResponse<T>> =>
  api.request<T>({
    method,
    url,
    params,
  });

//
// export const test = request('GET', `/marcas?_limit=10&_page=1`).then(
// (response: AxiosResponse) => response.data,
// );
//
