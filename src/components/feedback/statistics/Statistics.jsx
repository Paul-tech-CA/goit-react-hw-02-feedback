import React from "react";
import style from "../Feedback.module.css";
import Notification from "./notification/Notification";

const Statistics = ({ good, neutral, bad, getTotal, getPositive }) => {
  if (getTotal) {
    return (
      <div className={style.statistics}>
        <ul className={style.statisticsList}>
          <li className={style.statisticsItem}>
            Good: <span>{good}</span>
          </li>
          <li className={style.statisticsItem}>
            Neutral: <span>{neutral}</span>
          </li>
          <li className={style.statisticsItem}>
            Bad: <span>{bad}</span>
          </li>
        </ul>
        <p>Total {getTotal}</p>
        <p>Positive feedback: {getPositive}%</p>
      </div>
    );
  } else return <Notification message="No feedback given" />;
};

export default Statistics;
