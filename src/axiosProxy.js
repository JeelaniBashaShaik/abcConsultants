import axios from 'axios';

axios.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/vnd.github.v3+json';
    return config;
})

export default axios;