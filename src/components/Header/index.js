import styled from 'styled-components';
import { colorPalette, fonts, Grid } from 'stylesheet';
import Button from 'components/Button';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${Grid(150)};
  background-color: ${colorPalette.secondary};
  color: ${colorPalette.secondaryText};
`;

export const HeaderTitle = styled.h1`
  ${fonts.h1};
  margin-bottom: ${Grid(10)};
`;

export const HeaderActions = styled.nav`
  display: flex;
  ${Button}:not(:last-child) {
    margin-right: ${Grid(4)};
  }
`;
