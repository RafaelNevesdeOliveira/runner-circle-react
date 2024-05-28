import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const Layout = styled(Box)`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const StyledButton = styled(Button)`
  padding: 10px 20px;
  font-size: 1rem;
  text-transform: none;
  border-radius: 25px;
  &.MuiButton-containedPrimary {
    background-color: ${(props) => props.theme["verde-medio"]};
    color: ${(props) => props.theme["gray-900"]};
    &:hover {
      background-color: ${(props) => props.theme["verde-limao"]};
    }
  }
  &.MuiButton-outlinedSecondary {
    border-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-600"]};
    margin-left: 20px;
    &:hover {
      border-color: ${(props) => props.theme["gray-500"]};
      color: ${(props) => props.theme["gray-500"]};
    }
  }
`;
