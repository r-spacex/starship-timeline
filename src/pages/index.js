import React from 'react';
import format from 'date-fns/format';
import SEO from 'components/SEO';
import Button from 'components/Button';
import Countdown from 'components/Countdown';
import { Header, HeaderCountdown, HeaderCountdownText, HeaderTitle, HeaderActions } from 'components/Header';
import Image from 'components/Image';
import Link from 'components/Link';
import { Timeline, Item, ItemDate, ItemTitle } from 'components/Timeline';
import Video from 'components/Video';

const scrollToTimeline = () => {
  const timeline = document.querySelector('#timeline');
  timeline.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

const MARS_LANDING_GOAL = new Date('2024-12-31');
const DATE_FORMAT = 'dd MMM yyyy';
const formatDate = dateString => format(new Date(dateString), DATE_FORMAT);

const IndexPage = () => (
  <>
    <SEO />
    <Header background Tag="header" filename="starship-bfr-separation-orbit">
      <HeaderTitle>SpaceX Starship Timeline</HeaderTitle>
      <HeaderCountdown>
        <HeaderCountdownText>Countdown to Mars landing goal</HeaderCountdownText>
        <Countdown value={MARS_LANDING_GOAL} />
      </HeaderCountdown>
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
          <ItemTitle>Humans on Mars</ItemTitle>
          <ItemDate dateTime="2024-12-31">2024</ItemDate>
        </header>
        {`SpaceX's goal is to land two cargo and two crewed Starships on Mars in 2024.`}
      </Item>

      <Item future>
        <header>
          <ItemTitle>#dearMoon</ItemTitle>
          <ItemDate dateTime="2023-12-31">2023</ItemDate>
        </header>
        Yasuka Maezawa, a Japanese billionaire, has already bought the first Starship crewed flight{' '}
        <Link href="https://dearmoon.earth/" target="_blank" rel="noopener noreferer">
          to go around the Moon with artists
        </Link>
        .
      </Item>

      <Item future>
        <header>
          <ItemTitle>Cargo landing on Mars</ItemTitle>
          <ItemDate dateTime="2022-12-31">2022</ItemDate>
        </header>
        Two cargo Starships will be launched towards Mars to prove that Earth landing technologies also work on Mars.
      </Item>

      <Item future>
        <header>
          <ItemTitle>First customer launch</ItemTitle>
          <ItemDate dateTime="2021-12-31">2021</ItemDate>
        </header>
        SpaceX is already in talks with three potential customers for a commercial satellite launch in 2021.
      </Item>

      <Item future>
        <header>
          <ItemTitle>First orbital launch</ItemTitle>
          <ItemDate dateTime="2020-12-31">2020</ItemDate>
        </header>
        {`SpaceX will test Starship in Earth's upper atmosphere, to validate a heat shielding technology and to prove that second stages
        can also be safely landed and reused.`}
      </Item>

      <Item>
        <header>
          <ItemTitle>Starhopper 150m hop</ItemTitle>
          <ItemDate dateTime="2019-08-27">{formatDate('2019-08-27')}</ItemDate>
        </header>
        The Starhopper prototype made a 150 meters hop, allowing SpaceX to validate the engine control and landing
        algorithms.
        <Video youtubeId="bYb3bfA6_sQ" />
      </Item>

      <Item>
        <header>
          <ItemTitle>Starhsip orbital prototypes construction starts</ItemTitle>
          <ItemDate dateTime="2019-05-14">{formatDate('2019-05-14')}</ItemDate>
        </header>
        SpaceX is currently building two high fidelity Starship prototypes: one in Florida, one in Texas. The first team
        to reach orbit and come back on land is the winner.
        <Image filename="florby.jpg" />
      </Item>

      <Item>
        <header>
          <ItemTitle>Starhopper construction starts</ItemTitle>
          <ItemDate dateTime="2018-12-20">{formatDate('2018-12-20')}</ItemDate>
        </header>
        SpaceX contracted a water tower company to rapidly assemble a working Starship prototype to test its Raptor
        engine in real flight conditions.
        <Image filename="starhopper.jpg" />
      </Item>

      <Item>
        <header>
          <ItemTitle>TODO</ItemTitle>
          <ItemDate dateTime="2016-06-10">2012</ItemDate>
        </header>
        Fill with more content :)
      </Item>
    </Timeline>
  </>
);

export default IndexPage;
