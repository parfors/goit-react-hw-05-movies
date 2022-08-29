import { ButtonBackStyled } from './MovieDetails';
import { HeaderStyled } from './TrendingMovies';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };
  return (
    <>
      <ButtonBackStyled onClick={clickHandler}>Back to Home</ButtonBackStyled>
      <HeaderStyled>404 Page is not found</HeaderStyled>
    </>
  );
};

export default NotFoundPage;
