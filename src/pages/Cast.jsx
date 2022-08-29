import { useEffect, useState } from 'react';
import { getCast } from '../helpers/api';
import { useParams } from 'react-router-dom';
import CastItem from 'components/CastItem';
import styled from 'styled-components';
import { ParagraphTitleStyled } from './MovieDetails';

const Cast = () => {
  const [castData, setCastData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchCast = async id => {
      try {
        const response = await getCast(id);
        setCastData(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast(params.movieId);
  }, [params.movieId]);

  return (
    <>
      <CastListStyled>
        {(castData.length !== 0 &&
          castData.map(el => (
            <CastItemStyled key={el.id}>
              <CastItem data={el} />
            </CastItemStyled>
          ))) || (
          <ParagraphTitleStyled>
            There are no Casts on this movie
          </ParagraphTitleStyled>
        )}
      </CastListStyled>
    </>
  );
};

export default Cast;

export const CastListStyled = styled.ul``;
export const CastItemStyled = styled.li``;
