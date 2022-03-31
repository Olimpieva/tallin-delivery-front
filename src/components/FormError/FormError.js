import React from "react";

import './FormError.css'

function FormError({ message }) {

    return (
        <span className={`form-error ${message && 'form-error_active'}`}>{message}</span>
    );
};

export default FormError;