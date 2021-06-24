import axios from 'axios';
const API_KEY = 'SiOq4UAKW0fjrhaJWguWr3Xa7KN6KtJo';
const URL = 'https://api.giphy.com/v1/gifs/search';

export const getGifs = async (category) => {
  try {
      const { data: { data } } = await axios.get(URL, {
          params: {
              api_key: API_KEY,
              limit: 3,
              q: category,
          },
      });
      const gifs = data.map(img => (
          {
              id: img.id,
              title: img.title,
              imageUrl: img.images.downsized_medium.url,
          })
      )
      return gifs;
  } catch (error) {
      console.warn(error);
  }
};