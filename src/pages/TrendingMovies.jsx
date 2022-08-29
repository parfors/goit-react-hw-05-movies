import { useState, useEffect } from 'react';
import { getTrending } from 'helpers/api';
import styled from 'styled-components';
import MovieItem from 'components/MovieItem';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getTrending();
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <HeaderStyled>Trending movies today</HeaderStyled>
      <UlMoviesStyled>
        {trendingMovies.map(el => (
          <MovieItem key={el.id} filmData={el} />
        ))}
      </UlMoviesStyled>
    </>
  );
};

export default TrendingMovies;

export const HeaderStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: 600;
  margin-top: 30px;
  margin-left: 20px;
`;

export const UlMoviesStyled = styled.ol`
  margin-left: 15px;
  margin-top: 20px;
  list-style: number;
`;
