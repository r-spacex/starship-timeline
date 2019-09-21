import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import StyleReset from 'components/StyleReset';

const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const { title, description, author, siteUrl } = site.siteMetadata;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/oglogo.jpg`} />
        <meta property="og:locale" content="en" />
        <meta name="author" content={author} />

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Noto+Sans" />
      </Helmet>
      <StyleReset />
    </>
  );
};

export default SEO;
