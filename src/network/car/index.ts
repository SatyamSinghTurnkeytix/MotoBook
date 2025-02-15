import { API_RESPONSE } from '@src/common/constants/constants';
import { getApiService } from '../apiService';
import { GET_COMPANIES } from './endpoints';

export const getCompaniesListAPI = (
    callBack: (response: API_RESPONSE) => void,
) => {
    console.log('api call start');
    
    getApiService(GET_COMPANIES)
        .then(async (res: any) => {
            console.log('api call here2', res);
            if (res?.status === 200 || res?.status === '200') {
                callBack({
                    data: res?.data,
                    error: undefined,
                });
            } else {
                callBack({
                    data: undefined,
                    error: res?.message,
                });
            }
        })
        .catch((err: any) => {
            console.log('api call here4', err);
            console.error(err);
            callBack({
                data: undefined,
                error: err,
            });
        });
};