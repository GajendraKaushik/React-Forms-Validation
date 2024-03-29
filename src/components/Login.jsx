import { useState } from "react";
export default function Login() {
  //  const [enteredEmail, setEnteredEmail] = useState('')
  //  const [enteredPass, setEnteredPass] = useState('')
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [isedit, setIsEdit] = useState({
    email: false,
    password: false,
  });

  const isEntredmailValid =
    isedit.email && !enteredValue.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);
    console.log("submitted");
  }

  function handleInputBlur(identifire) {
    setIsEdit((prevState) => ({
      ...prevState,
      [identifire]: true,
    }));
  }

  // function handleEmailChange(event){
  //          setEnteredEmail(event.target.value);
  // }
  // function handlePassChange(event){
  //    setEnteredPass(event.target.value);
  // }

  function handleInputChange(identifire, value) {
    setEnteredValue((prevState) => ({
      ...prevState,
      [identifire]: value,
    }));

    setIsEdit((prevState) =>({
      ...prevState, [identifire]:false
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=>handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}
          />
          <div className="control-error">
            {isEntredmailValid && <p>Please enter correct email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
