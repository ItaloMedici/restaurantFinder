import React, { useEffect, useState } from 'react';
import LoadingSkeleton from '../Skeleton';

import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: flex-end;
  
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background: 
    linear-gradient(
      0deg,
      rgb(0, 0, 0, 0.8) 36%,
      rgba(0, 0, 0, 0) 54%
    ),
    url(${props => props.photo});
  background-size: cover;
  padding: 5px;
  overflow: hidden;
`;

const Title = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  font-weight: 600;
  color: #FFF;
  font-size: 14px;
  width: 100%;
  word-wrap: break-word;  
`;

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = photo;
    image.onload = () => setImageLoaded(true);
  }, [photo])

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <LoadingSkeleton width="100px" height="100px" />
      )}
    </>
  )
}

export default ImageCard;