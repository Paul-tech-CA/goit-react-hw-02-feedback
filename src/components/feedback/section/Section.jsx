import React from 'react'
// import Statistics from '../statistics/Statistics';
// import FeedbackOptions from '../options/FeedbackOptions';
// import style from '../Feedback.module.css';

const Section = ({title, children}) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section
