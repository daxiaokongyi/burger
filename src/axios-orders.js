import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9f2cf.firebaseio.com/'
});

export default instance;
