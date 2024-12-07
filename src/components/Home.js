import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rfidImage from '../assets/RFID Solutions.jpg';
import biometricsImage from '../assets/biometrics.jpg';
import smartcardsImage from '../assets/smartcards.jpg';
import mobilityImage from '../assets/mobility.jpg';
import embeddedImage from '../assets/embedded.jpg';
import hardwareImage from '../assets/hardware.jpg';

const HomeContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  background-color: var(--background-color);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--secondary-color);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #edf2f7;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  color: var(--secondary-color);
  font-size: 1rem;
  line-height: 1.6;
`;

function Home() {
  const services = [
    {
      title: 'RFID Solutions',
      description: 'Advanced RFID technology for seamless tracking and identification.',
      image: rfidImage,
      path: '/rfid'
    },
    {
      title: 'Biometrics',
      description: 'Cutting-edge biometric security and authentication systems.',
      image: biometricsImage,
      path: '/biometrics'
    },
    {
      title: 'Smartcards',
      description: 'Secure and versatile smartcard solutions for various applications.',
      image: smartcardsImage,
      path: '/smartcards'
    },
    {
      title: 'Enterprise Mobility',
      description: 'Comprehensive mobility solutions for modern businesses.',
      image: mobilityImage,
      path: '/enterprise-mobility'
    },
    {
      title: 'Embedded Design',
      description: 'Custom embedded systems design and development.',
      image: embeddedImage,
      path: '/embedded-design'
    },
    {
      title: 'Hardware Production',
      description: 'High-quality hardware manufacturing and production services.',
      image: hardwareImage,
      path: '/hardware-production'
    }
  ];

  return (
    <HomeContainer>
      <ContentWrapper>
        <HeroSection>
          <Title>Empowering Innovation with Smart, Reliable IT Solutions</Title>
          <Subtitle>
            At Infronics Systems Limited, we deliver cutting-edge technology solutions 
            that drive business growth and operational excellence.
          </Subtitle>
        </HeroSection>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard to={service.path} key={index}>
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ContentWrapper>
    </HomeContainer>
  );
}

export default Home;
