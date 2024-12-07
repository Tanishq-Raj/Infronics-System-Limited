import React from 'react';
import styled from 'styled-components';
import hardwareInsideImage from '../assets/hardware inside.jpg';
import AnimatedImage from './AnimatedImage';

const HardwareContainer = styled.div`
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

const HardwareImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function HardwareProduction() {
  return (
    <HardwareContainer>
      <ContentWrapper>
        <Title>Hardware Production Solutions</Title>
        <AnimatedImage src={hardwareInsideImage} alt="Hardware Production Inside View" />

        <AboutSection>
          <SubTitle>About Infronics Systems Limited</SubTitle>
          <Paragraph>
            At Infronics Systems Limited, we excel in delivering high-quality Hardware Production solutions designed to meet the specific needs of businesses across industries. Combining precision engineering, advanced manufacturing techniques, and a commitment to excellence, we produce reliable and durable hardware that empowers your operations and drives innovation.
          </Paragraph>
          <Paragraph>
            Our approach is centered on collaboration and transparency, ensuring that every product aligns with your requirements and business goals. From concept to final production, our team works closely with you to deliver hardware solutions that meet the highest standards of performance, scalability, and quality.
          </Paragraph>
          
          <List>
            <ListItem><strong>Tailored Hardware Solutions:</strong> Custom-designed to fit your exact specifications.</ListItem>
            <ListItem><strong>Precision Manufacturing:</strong> Utilizing cutting-edge technology for accurate and efficient production.</ListItem>
            <ListItem><strong>Scalable Production:</strong> Capable of meeting both small-scale and large-scale manufacturing needs.</ListItem>
            <ListItem><strong>Robust Quality Control:</strong> Ensuring reliability and durability in every product.</ListItem>
          </List>

          <SubTitle>What's Included in Our Services?</SubTitle>
          <Paragraph>
            When you choose Infronics Systems Limited for Hardware Production, you gain access to a comprehensive process that guarantees excellence at every step:
          </Paragraph>
          
          <List>
            <ListItem><strong>Design Consultation:</strong> Collaborating to define your hardware requirements and specifications.</ListItem>
            <ListItem><strong>Prototype Development:</strong> Creating prototypes to validate functionality and design.</ListItem>
            <ListItem><strong>Manufacturing & Assembly:</strong> Leveraging state-of-the-art equipment for precise production and assembly.</ListItem>
            <ListItem><strong>Quality Assurance:</strong> Rigorous testing to ensure every product meets the highest quality standards.</ListItem>
            <ListItem><strong>Scalable Production & Delivery:</strong> Flexible production capacities to meet your timelines and volume needs.</ListItem>
          </List>

          <Paragraph>
            Partner with Infronics Systems Limited for world-class Hardware Production solutions that combine innovation, quality, and reliability to support your business's success.
          </Paragraph>
        </AboutSection>
      </ContentWrapper>
    </HardwareContainer>
  );
}

export default HardwareProduction;
