import React from "react";
import classes from "./Maininfo.module.css";

const MainInfo = () => {
  return (
    <section className={classes.section}>
      <h1>
        Learn o code by <br /> watching others
      </h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </section>
  );
};

export default MainInfo;
