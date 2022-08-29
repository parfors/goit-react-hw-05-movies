import styled from 'styled-components';
import { HeaderStyled } from './TrendingMovies';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieById } from 'helpers/api';
import { LinkStyled } from 'components/MovieItem';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = location.state?.from;

  useEffect(() => {
    const fetchMovie = async name => {
      try {
        const response = await getMovieById(name);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie(params.movieId);
  }, [params.movieId]);

  const clickHandler = () => {
    navigate(prevLocation || '/');
  };

  const {
    original_title,
    poster_path,
    genres = [],
    overview,
    vote_average,
  } = movie;

  const defaultPath =
    'https://image.tmdb.org/t/p/w500//62HCnUTziyWcpDaBO2i1DX17ljH.jpg';
  const posterURL = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : defaultPath;
  const genresActual =
    movie.genres?.length !== 0
      ? genres.map(el => el.name).join(' ')
      : 'Unknown';

  return (
    <>
      <ButtonBackStyled onClick={clickHandler}>Back</ButtonBackStyled>
      <WrapperStyled>
        <ImgStyled src={posterURL} />
        <MovieInfoHolder>
          <HeaderStyled>{original_title}</HeaderStyled>
          <ParagraphBodyStyled>{vote_average}</ParagraphBodyStyled>
          <ParagraphTitleStyled>Overview</ParagraphTitleStyled>
          <ParagraphBodyStyled>{overview}</ParagraphBodyStyled>
          <ParagraphTitleStyled>Genres</ParagraphTitleStyled>
          <ParagraphBodyStyled>{genresActual}</ParagraphBodyStyled>
        </MovieInfoHolder>
      </WrapperStyled>
      <UlLinkStyled>
        <UlItemStyled>
          <LinkStyled state={{ from: prevLocation }} to={'cast'}>
            Cast
          </LinkStyled>
        </UlItemStyled>
        <UlItemStyled>
          <LinkStyled state={{ from: prevLocation }} to={'reviews'}>
            Reviews
          </LinkStyled>
        </UlItemStyled>
      </UlLinkStyled>
      <Suspense
        fallback={<ParagraphTitleStyled>Loading...</ParagraphTitleStyled>}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

export const ButtonBackStyled = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

export const ImgStyled = styled.img`
  width: 250px;
  height: auto;
`;

export const ParagraphBodyStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.small};
`;

export const ParagraphTitleStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 600;
`;

export const WrapperStyled = styled.div`
  display: flex;
`;
export const MovieInfoHolder = styled.div`
  margin-left: 15px;
`;

export const UlLinkStyled = styled.ul`
  margin-top: 10px;
  border-bottom: 3px solid ${p => p.theme.colors.dark};
  border-top: 3px solid ${p => p.theme.colors.dark};
`;

export const UlItemStyled = styled.li`
  margin-top: 20px;
  &:last-child {
    margin-bottom: 15px;
  }
`;
