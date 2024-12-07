import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResetContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-color);
`;

const ResetWrapper = styled.div`
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
`;

const Tab = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${props => props.$active ? 'var(--accent-color)' : 'var(--secondary-color)'};
  border-bottom: 2px solid ${props => props.$active ? 'var(--accent-color)' : 'transparent'};
  font-weight: ${props => props.$active ? '600' : '400'};
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span.required {
    color: #e53e3e;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const HelpText = styled.div`
  font-size: 0.875rem;
  color: var(--secondary-color);
`;

const SubmitButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a67d8;
  }
`;

const InfoText = styled.p`
  color: var(--secondary-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
  };

  return (
    <ResetContainer>
      <ResetWrapper>
        <Title>Reset your password</Title>
        
        <TabContainer>
          <Tab to="/login">Log in</Tab>
          <Tab to="/register">Create new account</Tab>
          <Tab to="/reset-password" $active={true}>Reset your password</Tab>
        </TabContainer>

        <InfoText>
          Enter your email address below and we'll send you instructions to reset your password.
        </InfoText>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>
              Email <span className="required">*</span>
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <HelpText>Enter the email address associated with your account.</HelpText>
          </FormGroup>

          <SubmitButton type="submit">Send reset instructions</SubmitButton>
        </Form>
      </ResetWrapper>
    </ResetContainer>
  );
}

export default ResetPassword;
