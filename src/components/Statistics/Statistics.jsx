import React from "react";
import PropTypes from "prop-types";
import css from "./statistics.module.css";

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <div className={css.statistics}>
            <h2 className={css.header}>Statistics</h2>
            <ul>
                <li>Good: <span className={css.number}> {good}</span></li>
                <li>Neutral: <span className={css.number}> {neutral}</span></li>
                <li>Bad: <span className={css.number}> {bad}</span></li>
                <li>Total: <span className={css.number}> {total}</span></li>
                <li>Positve feedback: <span className={css.number}> {positivePercentage}%</span></li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}