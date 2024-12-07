import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  opacity: 0;
  animation: ${fadeInScale} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AnimatedImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt} />
    </ImageContainer>
  );
};

export default AnimatedImage;
