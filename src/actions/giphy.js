import axios from "axios";

const API_KEY =
  import.meta.env.VITE_GIPHY_API_KEY || "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g";
const BASE_URL = "https://api.giphy.com/v1/gifs";

export const fetchTrendingGifs = async ({ pageParam = 0 }) => {
  const response = await axios.get(`${BASE_URL}/trending`, {
    params: {
      api_key: API_KEY,
      limit: 25,
      offset: pageParam,
      rating: "g",
    },
  });
  return response.data.data;
};

export const searchGifs = async ({ query, pageParam = 0 }) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      api_key: API_KEY,
      q: query,
      limit: 25,
      offset: pageParam,
      rating: "g",
      lang: "en",
    },
  });
  return response.data.data;
};
