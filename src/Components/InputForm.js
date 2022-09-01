import React, { useState } from "react";
import classes from "./InputForm.module.css";
import Button from "./Button";
import TermCondition from "./TermCondition";
import SubmitData from "./SubmitData";
import completeImg from "./images/icon-complete.svg";

const InputForm = () => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    last: "",
    email: "",
    password: "",
  });

  const [newRecords, setNewRecords] = useState([]);
  const [modal, setModal] = useState(true);
  const [continues, setContinue] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegister, id: new Date().getTime().toString() };
    setNewRecords([...newRecords, newRecord]);

    setContinue(true);
    setModal(false);
    setUserRegister({
      name: "",
      last: "",
      email: "",
      password: "",
    });
  };

  const onChangeInfo = (e) => {
    const { name, value } = e.target;

    setUserRegister({ ...userRegister, [name]: value });
  };

  const popHandler = () => {
    setContinue(false);
    setModal(true);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="name"
          required
          placeholder="First Name"
          onChange={onChangeInfo}
          value={userRegister.name}
        />

        <input
          type="text"
          name="last"
          placeholder="Last Name"
          onChange={onChangeInfo}
          value={userRegister.last}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          onChange={onChangeInfo}
          value={userRegister.email}
        />

        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          onChange={onChangeInfo}
          value={userRegister.password}
        />

        {modal && <Button />}
        <TermCondition />
      </form>
      {continues && (
        <ul>
          {newRecords.map((data) => (
            <SubmitData
              name={data.name}
              last={data.last}
              email={data.email}
              password={data.password}
              img={[completeImg]}
              key={data.id}
              handler={popHandler}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputForm;
