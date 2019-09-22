import styled from 'styled-components';
import { darken } from 'polished';
import { colorPalette } from 'stylesheet';
import { OutboundLink } from 'react-ga';

const Link = styled(OutboundLink)`
  cursor: pointer;
  transition: color ease-in-out 0.3s 0s;
  color: ${colorPalette.primary};

  &:hover,
  &:active {
    color: ${darken(0.1, colorPalette.primary)};
  }
`;

export default Link;
