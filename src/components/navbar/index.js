import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const StyledNavbarLink = styled(NavLink)(({ bold, fontSize }) => ({
  textDecoration: 'none',
  color: 'black',
  fontSize: fontSize ?? '16px',
  fontWeight: bold ? '600' : 'normal',
}));

const StyledSpan = styled('span')(() => ({
  color: 'gray',
}));
const Navbar = () => {
  return (
    <Box
      bgcolor={'white'}
      width="100%"
      position="fixed"
      display={'flex'}
      justifyContent="center"
    >
      <Box
        width="80%"
        p="20px"
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Box>
          <StyledNavbarLink bold fontSize={'18px'} to="/">
            M<StyledSpan>u</StyledSpan>h<StyledSpan>a</StyledSpan>m
            <StyledSpan>m</StyledSpan>a<StyledSpan>d</StyledSpan>
          </StyledNavbarLink>
        </Box>
        <Box display={'flex'} gap="10px">
          <StyledNavbarLink to="/">Portfolio</StyledNavbarLink>
          <StyledNavbarLink to="/">Experience</StyledNavbarLink>
          <StyledNavbarLink to="/">About</StyledNavbarLink>
          <StyledNavbarLink to="/">Contact</StyledNavbarLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
