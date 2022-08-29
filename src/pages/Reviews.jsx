import { getReview } from '../helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReviewItem from 'components/ReviewItem';
import { ParagraphTitleStyled } from './MovieDetails';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        const response = await getReview(id);
        setReviewsData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews(params.movieId);
  }, [params.movieId]);

  return (
    <>
      <ReviewListStyled>
        {(reviewsData.length !== 0 &&
          reviewsData.map(el => (
            <ReviewItemStyled key={el.id}>
              <ReviewItem data={el} />
            </ReviewItemStyled>
          ))) || (
          <ReviewParagraphStyled>
            There are no reviews on this movie
          </ReviewParagraphStyled>
        )}
      </ReviewListStyled>
    </>
  );
};

export default Reviews;

export const ReviewListStyled = styled.ul``;
export const ReviewItemStyled = styled.li``;
export const ReviewParagraphStyled = styled(ParagraphTitleStyled)`
  margin-top: 15px;
  margin-left: 15px;
`;
