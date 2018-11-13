import axios from 'axios';
import Enums from '../utils/Enums';

const configure = () => axios.defaults.baseURL = Enums.API_BASE_URL;

export default configure();
