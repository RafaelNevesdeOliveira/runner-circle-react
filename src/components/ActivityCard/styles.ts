import styled from 'styled-components';
import { Card } from '@mui/material';

export const ActivityCardContainer = styled(Card)`
  margin-bottom: 20px;
  width: 100%;
  height: 500px;
`;

export const ActivityImage = styled.img`
  width: 100%;
  height: 50%; 
  object-fit: cover;
`;

export const ActivityDescription = styled.div`
  background-color: ${(props) => props.theme['azul-baby']};
  border-radius: 50px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

export const InfoItem = styled.div`
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) => props.theme['verde-medio']};
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;