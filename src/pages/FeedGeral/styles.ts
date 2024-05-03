import { Box, Card, Container, TextField } from "@mui/material";
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

export const ActivityCard = styled(Card)`
  margin-bottom: 20px;
`;

export const SearchField = styled(TextField)`
  margin: 20px 0;
  background: white;
  border-radius: 4px;
`;

export const FeedContainer = styled(Container)`
display: grid;
grid-template-columns: 3fr 1fr;
gap: 20px;
padding: 20px;

`
