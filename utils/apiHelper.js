const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000
});

module.exports = {
  getInventory: async () => apiClient.get('/inventory')
};
