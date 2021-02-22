import axios from 'axios';

const API = 'http://localhost:5000';

export const getArticles = async () => {
    console.log('Buscando...')
    return await axios.get(`${API}/articles`);
}