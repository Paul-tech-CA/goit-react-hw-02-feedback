import React, { Component } from 'react'
import style from './Feedback.module.css'

class FeedbacksCounter extends Component {
    render() {
        return (
            <div className={style.feedbacksCounter}>
                <h1 className={style.title}>Please leave feedback</h1>
                <div className={style.feedbacksChoice}>
                    <button type='button' className="button"></button>
                    <button type='button' className="button"></button>
                    <button type='button' className="button"></button>
                </div>
            </div>
        )
    }
}