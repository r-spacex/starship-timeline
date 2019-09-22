import styled from 'styled-components';
import { colorPalette, fonts, Grid, thresholds } from 'stylesheet';
import Button from 'components/Button';
import Image from 'components/Image';

export const Header = styled(Image)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: ${Grid(4)} ${Grid(2)};
  background-color: ${colorPalette.secondary};
  color: ${colorPalette.secondaryText};
  text-align: center;

  &::before {
    background-blend-mode: overlay;
  }
`;

export const HeaderTitle = styled.h1`
  ${fonts.h1};
  margin-bottom: ${Grid(8)};
`;

export const HeaderCountdown = styled.div`
  margin-bottom: ${Grid(8)};
`;

export const HeaderCountdownText = styled.div`
  margin-bottom: ${Grid(2)};
`;

export const HeaderActions = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${Button} {
    &:not(:last-child) {
      @media screen and (min-width: ${thresholds.large}) {
        margin-right: ${Grid(4)};
      }
      @media screen and (max-width: calc(${thresholds.large} - 1px)) {
        margin-bottom: ${Grid(2)};
      }
    }

    @media screen and (max-width: calc(${thresholds.large} - 1px)) {
      width: 100%;
    }
  }
`;
