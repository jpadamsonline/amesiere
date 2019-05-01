import axios from 'axios';
let host = document.location.host;
let apiUrl = host.includes('localhost') ? 'http://localhost:5000' : `http://${host}`
const API_URL = 'http://localhost:5000';

export class ApiService {
    constructor() {
    }

    searchTerm(term) {
        const url = `${apiUrl}/translate?term=${term}`;
        return axios.get(url).then(response => response.data);
    }
}
