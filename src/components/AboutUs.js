import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const MessageBox = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  padding: 4rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1.5rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: var(--secondary-color);
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

function AboutUs() {
  return (
    <PageContainer>
      <Title>About Us</Title>
      <MessageBox>
        <p>Infronics Systems Ltd a technology-enabled IT solutions company, forseeing future needs & exigencies, delivering excellent products of high quality and reliability with unflinching commitment and having emphatic global market presence.</p>
        <p>Infronics specializes in industry-specific software and hardware solutions, which proven reputation for delivering high quality solutions to a broad spectrum of industry verticals.</p>
      </MessageBox>
    </PageContainer>
  );
}

export default AboutUs;
