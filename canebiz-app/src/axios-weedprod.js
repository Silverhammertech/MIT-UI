
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://weed-product.firebaseio.com/'
});

export default instance;