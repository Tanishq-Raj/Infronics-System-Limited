import React, { useState } from 'react';
import styled from 'styled-components';
import customerImage from '../assets/customer.jpg';

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--background-color);
`;

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FAQHeader = styled.div`
  margin-bottom: 3rem;
`;

const FAQTag = styled.span`
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: block;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const FAQDescription = styled.p`
  color: var(--secondary-color);
  font-size: 1.1rem;
  max-width: 600px;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FAQImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #eee;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem 0;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 500;

  &:hover {
    color: var(--accent-color);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s;
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }
`;

const FAQAnswer = styled.div`
  padding-bottom: ${props => props.isOpen ? '1rem' : '0'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  color: var(--secondary-color);
  line-height: 1.6;
`;

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

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      <FAQContainer>
        <FAQHeader>
          <FAQTag>FAQ's</FAQTag>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          <FAQDescription>
            We address some of the most common questions about our services.
          </FAQDescription>
        </FAQHeader>

        <FAQGrid>
          <FAQImageContainer>
            <img src={customerImage} alt="Customer Support Representative" />
          </FAQImageContainer>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion
                  onClick={() => toggleFAQ(index)}
                  isOpen={openFAQ === index}
                >
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </FAQQuestion>
                <FAQAnswer isOpen={openFAQ === index}>
                  {faq.answer}
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </FAQGrid>
      </FAQContainer>
    </FAQSection>
  );
}

export default FAQ;
