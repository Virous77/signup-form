import React from "react";
import classes from "./SubmitData.module.css";

const SubmitData = ({ name, last, email, password, img, handler }) => {
  return (
    <li className={classes.list}>
      <div className={classes.img}>
        <img src={img} alt="" />
      </div>
      <div className={classes.name}>
        NAME:- {name} {last}
      </div>
      <div className={classes.email}>EMAIL:- {email}</div>
      <div className={classes.password}>PASSWORD:- {password}</div>
      <button className={classes.continue} onClick={handler}>
        Continue
      </button>
    </li>
  );
};

export default SubmitData;
