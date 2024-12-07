import React from 'react';
import styled from 'styled-components';
import mobilityInsideImage from '../assets/mobility inside.jpg';
import AnimatedImage from './AnimatedImage';

const MobilityContainer = styled.div`
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

const MobilityImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function EnterpriseMobility() {
  return (
    <MobilityContainer>
      <ContentWrapper>
        <Title>Enterprise Mobility Solutions</Title>
        <AnimatedImage src={mobilityInsideImage} alt="Enterprise Mobility Inside View" />

        <AboutSection>
          <SubTitle>About Infronics Systems Limited</SubTitle>
          <Paragraph>
            At Infronics Systems Limited, we empower businesses with cutting-edge Enterprise Mobility solutions that enhance productivity, streamline operations, and enable seamless collaboration. By leveraging advanced technologies and industry insights, we provide tailored mobility solutions that adapt to your unique business needs, driving growth and agility in an ever-evolving digital landscape.
          </Paragraph>
          <Paragraph>
            Our approach focuses on understanding your challenges and creating solutions that align with your goals. From conceptualization to deployment, our team works closely with you to deliver secure, scalable, and user-friendly enterprise mobility solutions that optimize workflows and empower your workforce to stay connected and productive anytime, anywhere.
          </Paragraph>
          
          <List>
            <ListItem><strong>Customized Mobility Solutions:</strong> Tailored to your organization’s specific needs and objectives.</ListItem>
            <ListItem><strong>Seamless Integration:</strong> Ensuring compatibility with your existing systems and workflows.</ListItem>
            <ListItem><strong>Future-Ready Design:</strong> Scalable solutions built to grow and evolve with your business.</ListItem>
            <ListItem><strong>Enhanced Security:</strong> Safeguarding your data and operations with robust security measures.</ListItem>
          </List>

          <SubTitle>What's Included in Our Services?</SubTitle>
          <Paragraph>
            When you choose Infronics Systems Limited for your Enterprise Mobility needs, you gain access to a comprehensive suite of services designed to maximize efficiency and connectivity:
          </Paragraph>
          
          <List>
            <ListItem><strong>Strategic Consultation:</strong> Analyzing your business requirements and mobility challenges to craft tailored solutions.</ListItem>
            <ListItem><strong>Solution Development:</strong> Designing and developing secure and user-friendly enterprise mobility applications and systems.</ListItem>
            <ListItem><strong>Integration Services:</strong> Seamlessly incorporating mobility solutions into your existing IT infrastructure.</ListItem>
            <ListItem><strong>Deployment & Implementation:</strong> Ensuring smooth rollout with minimal disruption to your operations.</ListItem>
            <ListItem><strong>Ongoing Support & Optimization:</strong> Providing continuous support, updates, and enhancements to keep your systems efficient and effective.</ListItem>
          </List>

          <Paragraph>
            Partner with Infronics Systems Limited to transform your business operations with robust Enterprise Mobility solutions that enhance connectivity, improve efficiency, and empower your workforce to achieve more.
          </Paragraph>
        </AboutSection>
      </ContentWrapper>
    </MobilityContainer>
  );
}

export default EnterpriseMobility;
