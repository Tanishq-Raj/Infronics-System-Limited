import React from 'react';
import styled from 'styled-components';
import rfidImage from '../assets/RFID Solutions.jpg';
import rfidInsideImage from '../assets/RFID Solutions inside.jpg';
import AnimatedImage from './AnimatedImage';

const RFIDContainer = styled.div`
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

function RFIDSolutions() {
  return (
    <RFIDContainer>
      <ContentWrapper>
        <Title>RFID Solutions</Title>
        
        <AnimatedImage src={rfidInsideImage} alt="RFID Solutions Inside View" />
        
        <AboutSection>
          <SubTitle>About Infronics Systems Limited</SubTitle>
          <Paragraph>
            At Infronics Systems Limited, we deliver innovative RFID solutions designed to optimize processes, improve efficiency, and enhance security across a wide range of industries. By combining advanced technology with expert insights, we create systems that are precise, scalable, and customized to your business needs. Our dedicated team works closely with you to ensure that every solution aligns with your objectives, providing seamless integration and measurable results.
          </Paragraph>
          <Paragraph>
            Our approach is rooted in collaboration, transparency, and innovation. From the initial consultation to full deployment, we focus on delivering robust and future-ready RFID systems that drive business success. With our commitment to excellence, we stay ahead of emerging technologies to provide reliable and cutting-edge solutions.
          </Paragraph>
          
          <List>
            <ListItem><strong>Tailored RFID Solutions:</strong> Designed to address the unique needs of your business.</ListItem>
            <ListItem><strong>Innovative Technology:</strong> Harnessing the latest advancements in RFID to improve operational efficiency.</ListItem>
            <ListItem><strong>End-to-End Support:</strong> From planning to deployment and beyond, we are with you at every step.</ListItem>
            <ListItem><strong>Scalable & Secure:</strong> Future-proof systems designed to grow with your business.</ListItem>
          </List>

          <SubTitle>What's Included in Our Services?</SubTitle>
          <Paragraph>
            When you partner with Infronics Systems Limited for RFID solutions, you benefit from a comprehensive process that ensures seamless implementation and long-term reliability:
          </Paragraph>
          
          <List>
            <ListItem><strong>Expert Consultation:</strong> Understanding your operational challenges and recommending the best-fit RFID solutions.</ListItem>
            <ListItem><strong>Custom Design & Development:</strong> Developing systems that align with your specific needs, ensuring precision and reliability.</ListItem>
            <ListItem><strong>Integration Services:</strong> Seamlessly incorporating RFID technology into your existing infrastructure.</ListItem>
            <ListItem><strong>Deployment & Implementation:</strong> Ensuring smooth and efficient setup with minimal downtime.</ListItem>
            <ListItem><strong>Ongoing Support & Maintenance:</strong> Keeping your RFID systems secure, up-to-date, and functioning optimally.</ListItem>
          </List>

          <Paragraph>
            Choose Infronics Systems Limited to unlock the potential of RFID technology, streamline your operations, and enhance productivity with solutions built for the future.
          </Paragraph>
        </AboutSection>
      </ContentWrapper>
    </RFIDContainer>
  );
}

export default RFIDSolutions;
