import styled from 'styled-components';
import { darken } from 'polished';
import { colorPalette, Grid } from 'stylesheet';

const Button = styled.button`
  display: block;
  padding: ${Grid(2)};
  background-color: ${colorPalette.primary};
  color: ${colorPalette.primaryText};
  cursor: pointer;
  border-radius: ${Grid(1)};

  &:hover {
    background-color: ${darken(0.1, colorPalette.primary)};
  }
`;

export default Button;
