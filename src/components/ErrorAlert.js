/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";


const ErrorAlerts = ({ error }) => {
    useEffect(() => {
        toastError(error);
    }, []);

    const toastError = (error) =>
        toast.error(error, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });

    return (
        <>
            <ToastContainer />
        </>
    );
};
export default ErrorAlerts;
