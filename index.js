import React, { Component } from "react";

class Timer extends Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("✅ Component Mounted! Timer started.");
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`🔄 Updated: ${prevState.count} → ${this.state.count}`);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("⏹ Component Unmounted! Timer stopped.");
  }

  render() {
    return (
      <div>
        <h1>⏳ Timer: {this.state.count}s</h1>
        <button onClick={() => this.setState({ count: 0 })}>Reset ⏪</button>
      </div>
    );
  }
}

export default Timer;
