import axios from 'axios';

const searchImages = async (term: string) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID WR3YQNHy-E6npPO1nvvxkQ86TqRr4TsV3-uz_3JIa1Y',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
