import axios from 'axios';
const API_URL = 'http://localhost:3000';

export class ApiService {
    constructor() {
    }

    searchTerm(term) {
        const url = `${API_URL}/translate?term=${term}`;
        return axios.get(url).then(response => response.data);
    }
}
