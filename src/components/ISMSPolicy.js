import React from 'react';
import styled from 'styled-components';
import ismsImage from '../assets/im1.jpeg';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const ImageContainer = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

function ISMSPolicy() {
  return (
    <PageContainer>
      <Title>ISMS Policy</Title>
      <ImageContainer>
        <StyledImage 
          src={ismsImage} 
          alt="ISMS Policy Document"
          loading="eager"
        />
      </ImageContainer>
    </PageContainer>
  );
}

export default ISMSPolicy;
