import { useState } from "react";
export default function Login() {
  //  const [enteredEmail, setEnteredEmail] = useState('')
  //  const [enteredPass, setEnteredPass] = useState('')
    const [enteredValue, setEnteredValue] = useState({
      email:'',
      password:''
    });

  function handleSubmit(event){
    event.preventDefault();
    console.log(enteredValue)
    console.log("submitted")
  }

  // function handleEmailChange(event){
  //          setEnteredEmail(event.target.value);
  // }
  // function handlePassChange(event){
  //    setEnteredPass(event.target.value);
  // }

  function handleInputChange(identifire, value){
    setEnteredValue((prevState) =>({
      ...prevState, [identifire]:value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>handleInputChange('email', event.target.value)} value={enteredValue.email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>handleInputChange('password', event.target.value)} value={enteredValue.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
