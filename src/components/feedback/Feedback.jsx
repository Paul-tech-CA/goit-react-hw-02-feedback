import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Feedback.module.css";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./options/FeedbackOptions";
import Section from "./section/Section";

class FeedbacksCounter extends Component {
  static defaultProps = {
    valueGood: 5,
    valueNeutral: 5,
    valueBad: 5,
  };

  static propTypes = {
    valueGood: PropTypes.number.isRequired,
    valueNeutral: PropTypes.number.isRequired,
    valueBad: PropTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (event) => {
    const { name } = event.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  getTotal = () => this.state.good + this.state.neutral + this.state.bad;

  getPositive = () => {
    if (this.getTotal()) {
      return ((this.state.good / this.getTotal()) * 100).toFixed();
    } else return 0;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className={style.feedbacksCounter}>
        <Section title="Please leave feedback">
          <div className={style.feedbacksChoice}>
            <FeedbackOptions handleIncrement={this.handleIncrement} />
          </div>
          <h2 className={style.statisticsTitle}>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            getTotal={this.getTotal()}
            getPositive={this.getPositive()}
          />
        </Section>
      </div>
    );
  }
}

export default FeedbacksCounter;
