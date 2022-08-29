import { ParagraphBodyStyled } from 'pages';
import styled from 'styled-components';

const CastItem = ({ data: { original_name, character, profile_path } }) => {
  const defaultURL =
    'https://image.tmdb.org/t/p/w500//8qBylBsQf4llkGrWR3qAsOtOU8O.jpg';
  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : defaultURL;

  return (
    <>
      <CastImgStyled src={imgUrl} />
      <ParagraphBodyStyled>{original_name}</ParagraphBodyStyled>
      <ParagraphBodyStyled>Character:{character}</ParagraphBodyStyled>
    </>
  );
};

export default CastItem;

export const CastImgStyled = styled.img`
  width: 100px;
  height: auto;
`;

export const CastParagraphStyled = styled.p``;
