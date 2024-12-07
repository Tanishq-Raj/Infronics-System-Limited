import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-color);
`;

const RegisterWrapper = styled.div`
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

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt with:', formData);
  };

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <Title>Create new account</Title>
        
        <TabContainer>
          <Tab to="/login">Log in</Tab>
          <Tab to="/register" $active={true}>Create new account</Tab>
          <Tab to="/reset-password">Reset your password</Tab>
        </TabContainer>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>
              Username <span className="required">*</span>
            </Label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <HelpText>Choose a username for your Infronics Systems Limited account.</HelpText>
          </FormGroup>

          <FormGroup>
            <Label>
              Email <span className="required">*</span>
            </Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <HelpText>Enter your email address.</HelpText>
          </FormGroup>

          <FormGroup>
            <Label>
              Password <span className="required">*</span>
            </Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <HelpText>Create a strong password for your account.</HelpText>
          </FormGroup>

          <FormGroup>
            <Label>
              Confirm Password <span className="required">*</span>
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <HelpText>Re-enter your password to confirm.</HelpText>
          </FormGroup>

          <SubmitButton type="submit">Create new account</SubmitButton>
        </Form>
      </RegisterWrapper>
    </RegisterContainer>
  );
}

export default Register;
