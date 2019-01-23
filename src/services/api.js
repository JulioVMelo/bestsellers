import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=eNKUrreBakX4EG4JRQTOzEewhXW8aCiX',
});

export default api;
