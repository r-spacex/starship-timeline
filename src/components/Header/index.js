import styled from 'styled-components';
import { colorPalette, fonts, Grid, thresholds } from 'stylesheet';
import Button from 'components/Button';
import BackgroundImage from 'components/BackgroundImage';

export const Header = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: ${Grid(2)};
  background-color: ${colorPalette.secondary};
  color: ${colorPalette.secondaryText};
  text-align: center;

  &::before {
    background-blend-mode: overlay;
  }
`;

export const HeaderTitle = styled.h1`
  ${fonts.h1};
  margin-bottom: ${Grid(10)};
`;

export const HeaderActions = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${Button}:not(:last-child) {
    @media screen and (min-width: ${thresholds.large}) {
      margin-right: ${Grid(4)};
    }

    @media screen and (max-width: calc(${thresholds.large} - 1px)) {
      width: 100%;
      margin-bottom: ${Grid(2)};
    }
  }
`;
