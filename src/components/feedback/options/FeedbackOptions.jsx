import React from 'react';
import style from '../Feedback.module.css';

export default function FeedbackOptions({handleIncrement}) {
    return (
        <div>
            <button name='good' type='button' className={style.button} onClick={handleIncrement}>Good </button>
            <button name='neutral' type='button' className={style.button} onClick={handleIncrement}>Neutral</button>
            <button name='bad' type='button' className={style.button} onClick={handleIncrement}>Bad</button>
        </div>
    )
}
