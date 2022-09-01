import React from "react";
import classes from "./InputForm.module.css";

const TermCondition = () => {
  return (
    <p className={classes.term}>
      By clicking the button you are agreeing to our
      <span>Terms and Services</span>
    </p>
  );
};

export default TermCondition;
