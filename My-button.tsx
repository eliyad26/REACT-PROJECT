// MyButton.tsx
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2070c0;
  }
`;

const MyButton: React.FC<ButtonProps> = ({ onClick }) => (
  <StyledButton onClick={onClick}></StyledButton>
);

export default MyButton;
