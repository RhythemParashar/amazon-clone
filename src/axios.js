import axios from 'axios';

//  'http://localhost:5001/clone-87109/us-central1/api'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-87109.cloudfunctions.net/api',
});

export default instance;
