import axios from 'axios';

export const $api = axios.create({
    withCredentials: true,
    baseURL: __API__,
})

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token !== null) {
        config.headers.Authorization = "Bearer" + " " + JSON.parse(token);
    } else {
        config.headers.Authorization = "Bearer";
    }

    return config;
})

$api.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config
        if(error.response.status === 401 && error.config && !error.config.isRetry) {
            originalRequest.isRetry = true; // якщо прийде ще раз 401, щоб не зациклити виконання
            try {
                const response = await axios.get(`${__API__}/auth/refresh`, {withCredentials: true})
                localStorage.setItem('token', JSON.stringify(response.data.token))
                return $api.request(originalRequest)
            } catch (e) {
                console.log('Срок дії рефреш токена закінчився')
            }
        }
        throw Error('Інша помилка, не 401')
    }
    )