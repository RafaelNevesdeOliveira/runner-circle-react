import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Typography } from '@mui/material';
import { Layout, Sidebar, StyledNavLink, CriarRegistro, SideNavLinksPublicar, SideNavLinksLogout } from './styles';
import Logo from '../../assets/loginForm/Logo.svg';
import { ClipboardText, SignOut } from 'phosphor-react';

export function Menu() {
  return (
    <Layout>
      <CssBaseline />
      <Sidebar>
        <Typography variant="h6">
          <img src={Logo} alt="Logo" />
        </Typography>
        <StyledNavLink to="/criar">
          <CriarRegistro>
            <SideNavLinksPublicar>Publicar</SideNavLinksPublicar>
          </CriarRegistro>
        </StyledNavLink>
        <StyledNavLink to="/feed">
          <SideNavLinksLogout>Feed</SideNavLinksLogout>
          <ClipboardText size={24} weight="bold" />
        </StyledNavLink>
        <StyledNavLink to="/">
          <SideNavLinksLogout>Logout</SideNavLinksLogout>
          <SignOut size={24} weight="bold" />
        </StyledNavLink>
      </Sidebar>
      <Box flex="1" padding="20px">
        <Outlet />
      </Box>
    </Layout>
  );
}
