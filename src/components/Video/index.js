import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Grid } from 'stylesheet';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  /* 16/9 ratio */
  padding-top: 56.25%;
  margin: ${Grid(2)} 0;

  & > div {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

const Video = ({ youtubeId }) => (
  <VideoWrapper>
    <ReactPlayer url={`https://www.youtube.com/embed/${youtubeId}?autoplay=0`} controls height="100%" width="100%" />
  </VideoWrapper>
);

export default Video;
