import axios from 'axios';

const KEY = 'aa8448f2d9283308fdc52f0d2be6cb21';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrending = () => {
  const data = instance.get('/trending/all/week', {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const getMovies = name => {
  const data = instance.get('/search/movie', {
    params: {
      api_key: KEY,
      language: 'en',
      query: name,
      include_adult: false,
    },
  });
  return data;
};

export const getMovieById = id => {
  const data = instance.get(`/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const getCast = id => {
  const data = instance.get(`/movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const getReview = id => {
  const data = instance.get(`/movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

// export const getTrending = async () => {
//   const mediaType = 'all';
//   const timeWindow = 'week';
//   const response = await fetch(
//     `${BASE_URL}/trending/${mediaType}/${timeWindow}?api_key=${KEY}`
//   );
//   return response.json();
// };
