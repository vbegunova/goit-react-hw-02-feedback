import { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    addGoodFeedback = () => {
        this.setState((prevState) => (
            {
                good: prevState.good + 1,
            }
        ))
    }

    addNeutralFeedback = () => {
        this.setState((prevState) => (
            {
                neutral: prevState.neutral + 1,
            }
        ))
    }

    addBadFeedback = () => {
        this.setState((prevState) => (
            {
                bad: prevState.bad + 1,
            }
        ))
    }

    countTotalFeedback = () => (
        this.state.good + this.state.neutral + this.state.bad
    )

    countPositiveFeedbackPercentage = () => {
        let percentage =  this.state.good * 100 / this.countTotalFeedback();
        return percentage ? Math.round(percentage) : 0;
    }

    render() {
        return(
            <>
                <h1>Please leave feedback</h1>
                <button onClick={this.addGoodFeedback}>Good</button>
                <button onClick={this.addNeutralFeedback}>Neutral</button>
                <button onClick={this.addBadFeedback}>Bad</button>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
            </>
        )
    }
}