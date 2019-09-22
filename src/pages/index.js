import React from 'react';
import SEO from 'components/SEO';
import Button from 'components/Button';
import { Header, HeaderTitle, HeaderActions } from 'components/Header';
import { Timeline, Item, ItemDate, ItemTitle } from 'components/Timeline';

const scrollToTimeline = () => {
  const timeline = document.querySelector('#timeline');
  timeline.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

const IndexPage = () => (
  <>
    <SEO />
    <Header Tag="header" filename="starship-bfr-separation-orbit">
      <HeaderTitle>SpaceX Starship Timeline</HeaderTitle>
      <HeaderActions>
        <Button
          as="a"
          href="https://alberic.trancart.net/2019/08/spacex-starship-the-rocket-that-will-make-history-explained-in-5-minutes"
          title="Starship / BFR, the SpaceX rocket that will make history"
          target="_blank"
          rel="noopener noreferer"
        >
          What is Starship?
        </Button>
        <Button onClick={scrollToTimeline}>Show me the path to the future!</Button>
      </HeaderActions>
    </Header>
    <Timeline id="timeline">
      <Item future>
        <header>
          <ItemTitle>Landing on Mars</ItemTitle>
          <ItemDate dateTime="2024-01-01">2024</ItemDate>
        </header>
        Hopefully this works out.
      </Item>

      <Item>
        <header>
          <ItemTitle>Starhopper 150m hop</ItemTitle>
          <ItemDate dateTime="2019-08-27">August 27</ItemDate>
        </header>
        Starhopper has made its second hop! This was utterly awesome. Checkout this UFO.
      </Item>

      <Item>
        <header>
          <ItemTitle>Starhopper 20m hop</ItemTitle>
          <ItemDate dateTime="2019-06-10">June 10</ItemDate>
        </header>
        Starhopper has made its first hop! This was utterly awesome. Checkout this UFO.
      </Item>

      <Item>
        <header>
          <ItemTitle>Raptor engine test</ItemTitle>
          <ItemDate dateTime="2016-06-10">2016</ItemDate>
        </header>
        The Raptor engine was first tested at McGregor, Texas.
      </Item>
    </Timeline>
  </>
);

export default IndexPage;
