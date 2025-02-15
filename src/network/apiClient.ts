import { CONFIG } from '@constants/config';
import { ENVIRONMENT } from '@src/common/constants/constants';
import axios from 'axios';
import { getApiService, postApiService } from './apiService';

export const ENV = ENVIRONMENT.DEV;

const getToken = async () => {
  postApiService('auth/verify-otp', {
    "otp": "1234",
    "phoneNumber": "1234567891"
  })
    .then(async (res: any) => {
      console.log('token api = ', res);
      
    }).catch((err: any) => {
      console.error(err);
    });
  return 'generate-new-token-here';
};

const APIClient = axios.create({
  baseURL: CONFIG[`${ENV}`]?.baseUrl,
});

APIClient.interceptors.request.use(
  async config => {
    if (config?.url !== '/token') {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2ExMDViNzdjNmNkYzZkZWFjY2VmNDAiLCJpYXQiOjE3Mzk2Mjk2MTQxNjh9.FiKmGMhmlqPmEASrnymBHHlZ3V2RT47wbNa00EEpJu0`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default APIClient;
