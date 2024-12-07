import React, { useState } from 'react';
import styled from 'styled-components';
import customerImage from '../assets/customer.jpg';
import FAQ from './FAQ';

const ContactContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  display: flex;
  background-color: var(--background-color);
`;

const OfficeInfoSection = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const OfficeInfo = styled.div`
  background-color: var(--white);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  min-height: 300px;
`;

const InfoTitle = styled.h2`
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Address = styled.p`
  color: var(--secondary-color);
  line-height: 2;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  white-space: pre-line;
`;

const Email = styled.a`
  color: var(--accent-color);
  text-decoration: none;
  font-size: 1.2rem;
  display: block;
  margin-top: 1.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const FormDescription = styled.p`
  color: var(--secondary-color);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  width: fit-content;
  gap: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--accent-color);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide comprehensive post-project support. Our dedicated team ensures continuous maintenance, updates, and technical assistance to keep your solutions running smoothly."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We have extensive experience working with clients globally. Our team is equipped to handle international projects with different time zones and requirements."
    },
    {
      question: "Are your solutions mobile-friendly and responsive?",
      answer: "Yes, all our solutions are designed with a mobile-first approach. We ensure that every product we deliver is fully responsive and provides an optimal user experience across all devices."
    },
    {
      question: "How do you ensure the quality of your work?",
      answer: "We maintain strict quality standards through rigorous testing, code reviews, and adherence to industry best practices. Our QA team thoroughly tests each solution before delivery."
    },
    {
      question: "Do you provide ongoing maintenance services?",
      answer: "Yes, we offer flexible maintenance packages to ensure your systems stay up-to-date and perform optimally. This includes regular updates, security patches, and performance optimization."
    },
    {
      question: "Do you work with clients outside of your local area?",
      answer: "Yes, we work with clients worldwide. Our robust project management system and communication tools enable us to collaborate effectively regardless of location."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <ContactContainer>
        <OfficeInfoSection>
          <ContactTitle>Contact Us</ContactTitle>
          <OfficeInfo>
            <InfoTitle>Registered Office:</InfoTitle>
            <Address>
              Plot No: 30, 31, Brigade Towers, West Wing, First Floor,
              Nanakramguda, Financial District, Hyderabad,
              Rangareddi Telangana - 500032 India
            </Address>
            <Email href="mailto:info@infronics.com">
              E-mail: info@infronics.com
            </Email>
          </OfficeInfo>
        </OfficeInfoSection>
        <RightSection>
          <FormTitle>Let's Connect</FormTitle>
          <FormDescription>
            Whether you have a project in mind, need more information about our services, or want to discuss
            how we can help your business grow, feel free to reach out.
          </FormDescription>
          <FormContainer onSubmit={handleSubmit}>
            <InputGroup>
              <InputWrapper>
                <Label>First name*</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Last name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label>Email address*</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Phone number</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </InputWrapper>
            </InputGroup>
            <InputWrapper>
              <Label>Write your message here *</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </InputWrapper>
            <SubmitButton type="submit">
              Submit Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth={2} stroke="currentColor"/>
              </svg>
            </SubmitButton>
          </FormContainer>
        </RightSection>
      </ContactContainer>
      <FAQ />
    </>
  );
}

export default Contact;
