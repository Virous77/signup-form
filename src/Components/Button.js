import React from "react";
import classes from "./InputForm.module.css";

const Button = (props) => {
  return (
    <button type="submit" className={classes.button}>
      CLAIM YOUR FREE TRAIL
    </button>
  );
};

export default Button;
