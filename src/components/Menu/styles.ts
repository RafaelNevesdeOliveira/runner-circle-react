// src/styles/styles.ts
import { Box, Container, TextField, Card } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled(Box)`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled(Box)`
  width: 240px;
  background-color: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const ActivityCardContainer = styled(Card)`
  margin-bottom: 20px;
`;

export const SearchField = styled(TextField)`
  margin: 20px 0;
  background: white;
  border-radius: 4px;
`;

export const FeedContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

export const CriarRegistro = styled.div`
  background-color: ${(props) => props.theme["verde-medio"]};
  border-radius: 50px;
  width: 200px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  margin-top: 50px;
`;


export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 8px; 
  color: ${(props) => props.theme["gray-600"]};
  cursor: pointer;

  &&:hover{
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const SideNavLinksPublicar = styled.span`
  color: ${(props) => props.theme["gray-900"]};
  font-size:1.5rem;
`
export const SideNavLinksLogout = styled.span`
  font-size:1.5rem;
  color: ${(props) => props.theme["gray-600"]};

  &&:hover{
    color: ${(props) => props.theme["gray-500"]};
  }
`