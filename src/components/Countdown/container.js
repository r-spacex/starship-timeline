import React from 'react';
import Countdown from './component';

const calculateDuration = props => ({
  value: (props.value.getTime() - Math.floor(Date.now())) / 1000
});

class CountdownContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = calculateDuration(props);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(calculateDuration(this.props));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Countdown {...this.props} {...this.state}>
        {this.children}
      </Countdown>
    );
  }
}

export default CountdownContainer;
