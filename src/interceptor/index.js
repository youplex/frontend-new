import axios from 'axios';
import { setToken } from '../redux/services/authSlice';
import { store } from '../redux/store';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

let isRetry = false;
axios.interceptors.response.use(resp => resp, async (error) => {
    if(error.response.status === 401 && !isRetry){
        isRetry = true;
        const { data, status} = await axios.post('/auth/refresh', {}, { withCredentials: true });
        if(status === 200){
            store.dispatch(setToken(data.token));

            return axios(error.config);
        }
    }
    isRetry = false;
    return error;
})
