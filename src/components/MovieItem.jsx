import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieItem = ({ filmData }) => {
  const location = useLocation();
  return (
    <>
      <MovieListItem>
        <LinkStyled state={{ from: location }} to={`/movies/${filmData.id}`}>
          {filmData.original_title || filmData.original_name}
        </LinkStyled>
      </MovieListItem>
    </>
  );
};

export default MovieItem;

export const MovieListItem = styled.li`
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const LinkStyled = styled(Link)`
  color: ${p => p.theme.colors.accent};
`;
