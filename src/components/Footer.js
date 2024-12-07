import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 4rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CompanySection = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #90EE90;
  }

  p {
    color: #cccccc;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #90EE90;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #ffffff;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #90EE90;
    }
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.8rem;
  }
`;

const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: #90EE90;
  }
`;

const ContactInfo = styled.div`
  color: #cccccc;
  font-size: 0.95rem;
  
  p {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    line-height: 1.4;

    svg {
      margin-top: 0.2rem;
      min-width: 16px;
      color: #90EE90;
    }
  }

  .address {
    margin-bottom: 1.2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    
    svg {
      margin-top: 0;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #cccccc;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanySection>
          <h3>Infronics Systems</h3>
          <p>
            Leading provider of innovative technology solutions, specializing in Biometrics,
            Smart Cards, RFID Solutions, Enterprise Mobility, Embedded Design, and Hardware Production.
          </p>
          <SocialIcons>
            <a href="https://facebook.com/infronics" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/infronics" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/infronics-systems-ltd./?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/infronics" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </SocialIcons>
        </CompanySection>

        <FooterSection>
          <h4>Solutions</h4>
          <FooterList>
            <li><FooterLink to="/biometrics">Biometrics</FooterLink></li>
            <li><FooterLink to="/smartcards">Smart Cards</FooterLink></li>
            <li><FooterLink to="/rfid-solutions">RFID Solutions</FooterLink></li>
            <li><FooterLink to="/enterprise-mobility">Enterprise Mobility</FooterLink></li>
            <li><FooterLink to="/embedded-design">Embedded Design</FooterLink></li>
            <li><FooterLink to="/hardware-production">Hardware Production</FooterLink></li>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <h4>Quick Links</h4>
          <FooterList>
            <li><FooterLink to="/about">About Us</FooterLink></li>
            <li><FooterLink to="/contact">Contact Us</FooterLink></li>
            <li><FooterLink to="/contact#faq">FAQ</FooterLink></li>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <h4>Contact Info</h4>
          <ContactInfo>
            <p className="address">
              <FaMapMarkerAlt />
              <span>
                Plot No: 30, 31, Brigade Towers, West Wing, First Floor, 
                Nanakramguda, Financial District, Hyderabad, Rangareddi, 
                Telangana - 500032 India
              </span>
            </p>
            <p className="contact-item">
              <FaPhone />
              <span>+91 40 4241 4241</span>
            </p>
            <p className="contact-item">
              <FaEnvelope />
              <span>info@infronics.com</span>
            </p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Infronics Systems. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
