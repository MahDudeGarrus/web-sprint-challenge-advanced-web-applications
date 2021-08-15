import axios from 'axios';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return axiosWithAuth()
    .get("/colors")
    .then((response) => response)
    .catch((error) => error)
}

export default fetchColorService;