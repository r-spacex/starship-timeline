import React from 'react';
import SEO from 'components/SEO';
import Button from 'components/Button';
import Countdown from 'components/Countdown';
import { Header, HeaderCountdown, HeaderCountdownText, HeaderTitle, HeaderActions } from 'components/Header';
import { Timeline, Item, ItemContent, ItemDate, ItemTitle } from 'components/Timeline';
import contents from 'contents';
import { scrollTo, isInViewport } from 'utils';

const MARS_LANDING_GOAL = new Date('2024-12-31');

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = contents.reduce((accumulator, content) => ({ ...accumulator, [content.title]: false }), {});
  }

  componentDidMount() {
    if (!window) {
      return;
    }
    window.addEventListener('scroll', () => {
      this.updateVisibility();
    });
    this.updateVisibility();
  }

  updateVisibility() {
    document.querySelectorAll('[data-timeline-item]').forEach(element => {
      const title = element.getAttribute('data-timeline-item');
      // eslint-disable-next-line
      if (!this.state[title] && isInViewport(element)) {
        this.setState({ [title]: true });
      }
    });
  }

  render() {
    return (
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
            <Button onClick={() => scrollTo('#timeline')}>Show me the path to the future!</Button>
          </HeaderActions>
        </Header>
        <Timeline id="timeline">
          {contents.map(({ content, date, future, title }, index) => (
            // eslint-disable-next-line
            <Item key={title} future={future} visible={this.state[title] || index === 0} data-timeline-item={title}>
              <ItemContent>
                <header>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemDate>{date}</ItemDate>
                </header>
                {content}
              </ItemContent>
            </Item>
          ))}
        </Timeline>
      </>
    );
  }
}

export default IndexPage;
