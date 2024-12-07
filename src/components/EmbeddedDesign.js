import React from 'react';
import styled from 'styled-components';
import embeddedImage from '../assets/embedded.jpg';
import embeddedInsideImage from '../assets/embedded inside.jpg';
import AnimatedImage from './AnimatedImage';

const EmbeddedContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  background-color: var(--background-color);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

function EmbeddedDesign() {
  return (
    <EmbeddedContainer>
      <ContentWrapper>
        <Title>Embedded Design Solutions</Title>
        <AnimatedImage src={embeddedInsideImage} alt="Embedded Design Inside View" />
        
        <AboutSection>
          <SubTitle>About Infronics Systems Limited</SubTitle>
          <Paragraph>
            At Infronics Systems Limited, we specialize in delivering innovative and reliable Embedded Design solutions tailored to meet the unique needs of our clients. By combining deep technical expertise with creative problem-solving, we craft cutting-edge embedded systems that drive efficiency, precision, and performance across various industries. Our team works closely with you to understand your specific requirements and develop solutions that seamlessly integrate into your existing processes.
          </Paragraph>
          <Paragraph>
            With a focus on collaboration, transparency, and excellence, we ensure that every project we undertake is aligned with your goals. From initial design to final implementation, we are committed to delivering robust, scalable, and future-ready embedded systems that give your business a competitive edge.
          </Paragraph>
          
          <List>
            <ListItem><strong>Customized Embedded Solutions:</strong> Designed to fit your exact requirements.</ListItem>
            <ListItem><strong>Innovative Technology:</strong> Leveraging the latest advancements in embedded systems.</ListItem>
            <ListItem><strong>Seamless Integration:</strong> Solutions designed to work effortlessly with your existing setup.</ListItem>
            <ListItem><strong>Scalable & Reliable:</strong> Systems built for long-term performance and adaptability.</ListItem>
          </List>

          <SubTitle>What's Included in Our Services?</SubTitle>
          <Paragraph>
            When you partner with Infronics Systems Limited for Embedded Design, you receive end-to-end support for every stage of your project:
          </Paragraph>
          
          <List>
            <ListItem><strong>Requirement Analysis:</strong> Understanding your needs to create a roadmap for the perfect embedded solution.</ListItem>
            <ListItem><strong>Hardware & Software Design:</strong> Developing customized, efficient, and high-performance embedded systems.</ListItem>
            <ListItem><strong>Prototyping & Testing:</strong> Ensuring every design meets the highest standards of quality and reliability.</ListItem>
            <ListItem><strong>Integration Services:</strong> Seamlessly embedding the solutions into your existing hardware and software ecosystem.</ListItem>
            <ListItem><strong>Deployment & Maintenance:</strong> Ensuring smooth implementation and providing ongoing support to keep your systems optimized.</ListItem>
          </List>

          <Paragraph>
            Choose Infronics Systems Limited to harness the power of Embedded Design, empowering your business with robust, efficient, and future-proof solutions tailored to your needs.
          </Paragraph>
        </AboutSection>
      </ContentWrapper>
    </EmbeddedContainer>
  );
}

export default EmbeddedDesign;
