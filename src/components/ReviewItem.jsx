import { ParagraphBodyStyled, ParagraphTitleStyled } from 'pages';

const ReviewItem = ({ data, data: { author, content } }) => {
  return (
    <>
      <ParagraphTitleStyled>{author}</ParagraphTitleStyled>

      <ParagraphBodyStyled>{content}</ParagraphBodyStyled>
      {data && (
        <ParagraphBodyStyled>
          There are no reviews for this movie
        </ParagraphBodyStyled>
      )}
    </>
  );
};

export default ReviewItem;
