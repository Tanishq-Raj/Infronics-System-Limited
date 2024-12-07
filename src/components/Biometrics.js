import React from 'react';
import styled from 'styled-components';
import biometricsImage from '../assets/biometrics.jpg';
import biometricsInsideImage from '../assets/biometrics inside.jpg';
import AnimatedImage from './AnimatedImage';

const BiometricsContainer = styled.div`
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

const BiometricsImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Biometrics() {
  return (
    <BiometricsContainer>
      <ContentWrapper>
        <Title>Biometric Solutions</Title>

        <AnimatedImage src={biometricsInsideImage} alt="Biometrics Inside View" />

        <AboutSection>
          <SubTitle>About Infronics Systems Limited</SubTitle>
          <Paragraph>
            At Infronics Systems Limited, we are committed to delivering cutting-edge biometric solutions designed to meet the diverse and evolving needs of our clients. Our team of specialists blends innovation, technical expertise, and strategic foresight to provide results that enhance efficiency, security, and reliability. We recognize that every client has unique requirements, which is why we focus on understanding your specific needs and tailoring our services to achieve your objectives.
          </Paragraph>
          <Paragraph>
            Our approach is collaborative, transparent, and goal-oriented, ensuring that every solution we create is not only effective but also sustainable in the long term. From the initial consultation to implementation, we work closely with you, offering unparalleled support at every stage. Our commitment to excellence and adaptability ensures that we stay ahead of advancements in biometric technology to provide you with the most innovative and reliable solutions.
          </Paragraph>
          
          <List>
            <ListItem><strong>Tailored Biometric Solutions:</strong> Customized to suit your business requirements.</ListItem>
            <ListItem><strong>Cutting-Edge Technology:</strong> Stay ahead with solutions that leverage the latest advancements in biometrics.</ListItem>
            <ListItem><strong>Comprehensive Support:</strong> From consultation to deployment, we ensure seamless execution.</ListItem>
            <ListItem><strong>Sustainability:</strong> Delivering long-lasting and efficient solutions to future-proof your business operations.</ListItem>
          </List>

          <SubTitle>What's Included in Our Services?</SubTitle>
          <Paragraph>
            When you choose Infronics Systems Limited for your biometric needs, you receive end-to-end support that covers every aspect of your project:
          </Paragraph>
          
          <List>
            <ListItem><strong>Expert Consultation:</strong> Understanding your goals and challenges to craft tailored solutions.</ListItem>
            <ListItem><strong>Strategic Planning:</strong> Detailed planning to address every component of your biometric requirements.</ListItem>
            <ListItem><strong>Innovative Development:</strong> Leveraging the latest biometric technologies to create secure and efficient systems.</ListItem>
            <ListItem><strong>Implementation & Integration:</strong> Seamlessly integrating biometric solutions into your existing infrastructure.</ListItem>
            <ListItem><strong>Ongoing Support & Maintenance:</strong> Ensuring your systems remain up-to-date and operate flawlessly.</ListItem>
          </List>

          <Paragraph>
            Partner with Infronics Systems Limited to enhance security, optimize operations, and embrace the future of biometric technology.
          </Paragraph>
        </AboutSection>
      </ContentWrapper>
    </BiometricsContainer>
  );
}

export default Biometrics;
