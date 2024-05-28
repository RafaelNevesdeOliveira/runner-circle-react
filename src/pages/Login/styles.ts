import styled from 'styled-components';
import { Box } from '@mui/material';
import '../../styles/global'

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
  background-color: black;
  position: relative;
  border-radius:0 20px 20px 0;
`;

export const ButtonLogin = styled.button`
  background-color: ${(props) => props.theme['verde-medio']};
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 0.375em;
  cursor: pointer;
  transition: background-color 0.3s;
  width:100%;

  &:hover {
    background-color: ${(props) => props.theme['verde-limao']};
  }
`;
