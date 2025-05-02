import axios from 'axios';


const API_KEY="7983|CzZIbg5Vra2cLvnGdqpH5C9xxbV3oeJrHYS4ZTqS";


const priceCompareApi = axios.create({
  baseURL: 'https://zylalabs.com/api/2332/prices+comparison+api/2242',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
});

export default priceCompareApi;

export const fetchPrices = async (query) => {
    try {
      const response = await priceCompareApi.get(`/compare+prices?q=${query}`, {
        // params: { q: query }
      });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch price data:", error);
      throw error;
    }
  };