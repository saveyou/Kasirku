import axios from 'axios';
import config from '../app.config'

axios.defaults.baseURL = config.api_url;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios