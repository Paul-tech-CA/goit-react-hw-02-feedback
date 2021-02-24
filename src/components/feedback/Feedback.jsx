import React, { Component } from 'react'
import style from './Feedback.module.css'

class FeedbacksCounter extends Component {
    render() {
        return (
            <div className={style.feedbacksCounter}>
                <h1 className={style.title}>Please leave feedback</h1>
                <div className={style.feedbacksChoice}>
                    <button type='button' className="button">Good</button>
                    <button type='button' className="button">Neutral</button>
                    <button type='button' className="button">Bad</button>
                </div>
                <div className={style.statistics}>
                    <h2 className={style.statisticsTitle}>Statistics</h2>
                    <ul className={style.statisticsList}>
                        <li className={style.statisticsItem}>Good: </li>
                        <li className={style.statisticsItem}>Neutral: </li>
                        <li className={style.statisticsItem}>Bad: </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FeedbacksCounter;
