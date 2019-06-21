import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    setInterval(this.tick, 1000);
  }

  tick () {
    this.setState({time: new Date()});
  }

  render () {
    return(
      <div className="clock">
        <h1>Clock</h1>
        <div className="time">
          <h2>{String(this.state.time)}</h2>
        </div>
      </div>
    )
  }
}

export default Clock;