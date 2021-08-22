import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://trackbackend.herokuapp.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
    },
});

// http://2fea15692065.ngrok.io in development
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;