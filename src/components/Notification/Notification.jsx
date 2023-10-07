import React from "react";
import PropTypes from "prop-types";
import css from "./notification.module.css"

export const Notification = ({ message }) => {
    return (
        <p className={css.message}>{message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
}