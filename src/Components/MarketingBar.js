import React from "react";
import classes from "./InputForm.module.css";
import InputForm from "./InputForm";

const MarketingBar = () => {
  return (
    <main className={classes.main}>
      <div className={classes["marketing-bar"]}>
        <p>
          Try it free 7 days <span>then $20/mo thereafter</span>{" "}
        </p>
      </div>
      <InputForm />
    </main>
  );
};

export default MarketingBar;
