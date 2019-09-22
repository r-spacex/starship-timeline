import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';
import { Grid } from 'stylesheet';

const StyledImage = styled(Image)`
  margin: ${Grid(2)} 0;
`;

const Img = ({ background, filename, children, tag, ...rest }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2560) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      if (background) {
        return (
          <BackgroundImage Tag={tag} fluid={image.node.childImageSharp.fluid} {...rest}>
            {children}
          </BackgroundImage>
        );
      }

      return <StyledImage fluid={image.node.childImageSharp.fluid} {...rest} />;
    }}
  />
);

export default Img;
