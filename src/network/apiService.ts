import {AxiosRequestConfig} from 'axios';
import APIClient from './apiClient';

/**
 * Make a GET request to the specified API.
 *
 * @param api - The API endpoint to be called.
 * @param params - The Axios request config.
 * @returns A promise that resolves to the API response data if the status
 * code of the response is between 200 and 204, and rejects with the status code
 * otherwise.
 */
export const getApiService = (api: string, params?: AxiosRequestConfig<any>) =>
  new Promise((resolve, reject) => {
    APIClient.get(api, params)
      .then((res: any) => {
        console.log('api call here1', res);
        
        if (res?.status >= 200 && res?.status <= 204) {
          resolve(res.data);
        } else {
          reject(res.status);
        }
      })
      .catch((err: any) => reject(err))
      .finally(() => {
        console.log('api call here2');
        resolve([]);
      });
  });

/**
 * Make a POST request to the specified API.
 *
 * @param api - The API endpoint to be called.
 * @param payload - The data to be sent in the request body.
 * @param params - The Axios request config.
 * @returns A promise that resolves to the API response data if the status
 * code of the response is between 200 and 204, and rejects with the status code
 * otherwise.
 */
export const postApiService = (api: string, payload?: any, params?: any) =>
  new Promise((resolve, reject) => {
    APIClient.post(api, payload, params)
      .then((res: any) => {
        if (res?.status >= 200 && res?.status <= 204) {
          resolve(res.data);
        } else {
          reject(res.status);
        }
      })
      .catch((err: any) => {
        return reject(err);
      })
      .finally(() => {
        resolve([]);
      });
  });

/**
 * Make a PUT request to the specified API.
 *
 * @param api - The API endpoint to be called.
 * @param payload - The data to be sent in the request body.
 * @param params - The Axios request config.
 * @returns A promise that resolves to the API response data if the status
 * code of the response is between 200 and 204, and rejects with the status code
 * otherwise.
 */
export const putApiService = (api: string, payload?: any, params?: any) =>
  new Promise((resolve, reject) => {
    APIClient.put(api, payload, params)
      .then((res: any) => {
        if (res?.status >= 200 && res?.status <= 204) {
          resolve(res.data);
        } else {
          reject(res.status);
        }
      })
      .catch((err: any) => reject(err))
      .finally(() => {
        resolve([]);
      });
  });

/**
 * Make a PATCH request to the specified API.
 *
 * @param api - The API endpoint to be called.
 * @param payload - The data to be sent in the request body.
 * @param params - The Axios request config.
 * @returns A promise that resolves to the API response data if the status
 * code of the response is between 200 and 204, and rejects with the status code
 * otherwise.
 */
export const patchApiService = (api: string, payload?: any, params?: any) =>
  new Promise((resolve, reject) => {
    APIClient.patch(api, payload, params)
      .then((res: any) => {
        if (res?.status >= 200 && res?.status <= 204) {
          resolve(res.data);
        } else {
          reject(res.status);
        }
      })
      .catch((err: any) => reject(err))
      .finally(() => {
        resolve([]);
      });
  });

/**
 * Make a DELETE request to the specified API.
 *
 * @param api - The API endpoint to be called.
 * @param payload - The data to be sent in the request body.
 * @returns A promise that resolves to the API response data if the status
 * code of the response is between 200 and 204, and rejects with the status code
 * otherwise.
 */
export const deleteApiService = (api: string, payload?: any) =>
  new Promise((resolve, reject) => {
    APIClient.delete(api, payload)
      .then((res: any) => {
        if (res?.status >= 200 && res?.status <= 204) {
          resolve(res.data);
        } else {
          reject(res.status);
        }
      })
      .catch((err: any) => reject(err))
      .finally(() => {
        resolve([]);
      });
  });
