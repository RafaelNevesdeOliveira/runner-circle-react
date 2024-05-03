import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import '../../global.css'

export const LoginCard = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const LoginContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 31.25rem;
  height: 600px;
  padding: 40px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  border-radius:20px 0 0 20px;
`;

export const LoginContainerImage = styled(Box)`
  width: 31.25rem;
  height: 600px;
  padding: 40px;
  background-color: var(--gray-700);
  position: relative;
  border-radius:0 20px 20px 0;
`;

export const ButtonLogin = styled(Button)`
  background-color: var(--green) !important;
  color: black !important;
  font-weight: bold !important;

  &:hover {
    background-color: var(--strong-green) !important;
  }
`;
