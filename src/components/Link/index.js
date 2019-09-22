import styled from 'styled-components';
import { darken } from 'polished';
import { colorPalette } from 'stylesheet';

const Link = styled.a`
  cursor: pointer;
  transition: color ease-in-out 0.3s 0s;
  color: ${colorPalette.primary};

  &:hover,
  &:active {
    color: ${darken(0.1, colorPalette.primary)};
  }
`;

export default Link;
