import axios from 'axios';

axios.interceptors.request.use((config) => {
    const baseConfig = config;
    baseConfig.headers.Accept = 'application/vnd.github.v3+json';
  return baseConfig;
});

export default axios;
