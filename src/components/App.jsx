import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = evt => {
    const arg = evt.target.innerHTML.toLowerCase();
    this.setState(prevState => { return { [arg]: prevState[arg] + 1 } });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round(good * 100 / (good + neutral + bad));
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleClick}></FeedbackOptions>

        <h2>Statistics</h2>
        {this.countTotalFeedback() === 0 && (
          <p>There is no feedback</p>
        )}
        {this.countTotalFeedback() !== 0 && (
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>
        )}
      </div>
    );
  };
}; 