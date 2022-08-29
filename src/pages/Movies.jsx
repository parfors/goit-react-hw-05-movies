import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { getMovies } from 'helpers/api';
import MovieItem from 'components/MovieItem';
import { UlMoviesStyled } from './TrendingMovies';
import { ParagraphBodyStyled } from './MovieDetails';

const Movies = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState('');
  const movieName = searchParam.get('name');

  const submitHandler = e => {
    e.preventDefault();
    if (!movieName) {
      setState('emptySearch');
      return;
    }
    const fetchMovies = async () => {
      try {
        const response = await getMovies(movieName);
        if (response.data.results.length === 0) {
          setState('noResults');
          setMovies([]);
          return;
        }
        setMovies(response.data.results);
        setState('');
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  };

  let paragraph;

  if (state === 'emptySearch') {
    paragraph = (
      <ParagraphBodyStyled>Empty search. Try to find movie</ParagraphBodyStyled>
    );
  }
  if (state === 'noResults') {
    paragraph = (
      <ParagraphBodyStyled>
        There is no movies for this query
      </ParagraphBodyStyled>
    );
  }

  return (
    <>
      <FormStyled onSubmit={submitHandler}>
        <InputStyled
          value={movieName || ''}
          onChange={e => setSearchParams({ name: e.target.value })}
        />
        <ButtonStyled type="submit">Search</ButtonStyled>
      </FormStyled>
      {paragraph}
      <UlMoviesStyled>
        {movies.map(el => (
          <MovieItem key={el.id} filmData={el} />
        ))}
      </UlMoviesStyled>
    </>
  );
};

export default Movies;

export const FormStyled = styled.form`
  margin-top: 15px;
`;

export const InputStyled = styled.input`
  margin-right: 20px;
`;
export const ButtonStyled = styled.button`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;
