import React from 'react';
import styled from 'styled-components';
import smartcardsInsideImage from '../assets/smartcards inside.jpg';
import AnimatedImage from './AnimatedImage';

const SmartcardsContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  background-color: var(--background-color);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    color: var(--accent-color);
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`;

const AboutSection = styled(Section)`
  margin-top: 3rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--secondary-color);
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmartcardsImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Smartcards() {
  return (
    <SmartcardsContainer>
      <ContentWrapper>
        <Title>Smartcards Solutions</Title>

        <AnimatedImage src={smartcardsInsideImage} alt="Smartcards Inside View" />

        <AboutSection>
          <SubTitle>About Infronics Systems Limited</SubTitle>
          <Paragraph>
            At Infronics Systems Limited, we specialize in delivering advanced smart card solutions tailored to the unique needs of businesses across various industries. Combining state-of-the-art technology with strategic expertise, we provide secure, efficient, and scalable systems that empower organizations to optimize operations and enhance user experiences. Our team is dedicated to understanding your specific requirements and delivering customized solutions that align with your business goals.
          </Paragraph>
          <Paragraph>
            Our approach emphasizes collaboration, transparency, and a commitment to excellence. From consultation to implementation, we work closely with you to ensure seamless integration and optimal functionality. Staying at the forefront of smart card technology, we continuously innovate to deliver solutions that are both future-ready and reliable.
          </Paragraph>
          
          <List>
            <ListItem><strong>Customized Solutions:</strong> Tailored to meet the unique demands of your organization.</ListItem>
            <ListItem><strong>Advanced Technology:</strong> Empower your business with cutting-edge smart card systems.</ListItem>
            <ListItem><strong>Comprehensive Support:</strong> End-to-end assistance from design to deployment.</ListItem>
            <ListItem><strong>Secure & Scalable:</strong> Solutions designed for long-term reliability and adaptability.</ListItem>
          </List>

          <SubTitle>What's Included in Our Services?</SubTitle>
          <Paragraph>
            Partnering with Infronics Systems Limited for smart card solutions ensures a comprehensive approach that covers every stage of the project:
          </Paragraph>
          
          <List>
            <ListItem><strong>Expert Consultation:</strong> We assess your business needs and recommend the most suitable smart card solutions.</ListItem>
            <ListItem><strong>Design & Development:</strong> Crafting secure, efficient, and user-friendly smart card systems tailored to your requirements.</ListItem>
            <ListItem><strong>System Integration:</strong> Seamlessly incorporating smart card technology into your existing infrastructure.</ListItem>
            <ListItem><strong>Implementation:</strong> Ensuring smooth deployment with minimal disruption to your operations.</ListItem>
            <ListItem><strong>Ongoing Support & Maintenance:</strong> Providing reliable support to keep your systems secure and updated.</ListItem>
          </List>

          <Paragraph>
            With Infronics Systems Limited, experience the power of smart card technology to enhance security, streamline operations, and future-proof your business.
          </Paragraph>
        </AboutSection>
      </ContentWrapper>
    </SmartcardsContainer>
  );
}

export default Smartcards;
