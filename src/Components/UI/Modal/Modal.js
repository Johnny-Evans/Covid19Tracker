import React from "react";
import classes from "./Modal.module.css";

function ErrorModal(props){
    return(
        <div  className={classes.modal}>
            <div className={classes.modalContent}>
                {`${props.message} - Coudn't load data `}
            </div>
        </div>
    );
}

export default ErrorModal;