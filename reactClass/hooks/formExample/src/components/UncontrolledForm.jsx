import React, { useRef } from "react";

const UncontrolledForm = () => {
  let usernameRef = useRef("");
  let passwordRef = useRef();
  let otpRef = useRef();

  function handleForm(e) {
    e.preventDefault();
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    let otp = otpRef.current.value;

    if (!username || !password || !otp) {
      alert("All fields are mandatory ");
      return;
    }
    if (username.length <= 3) {
      alert("Username must be more than 3 characters");
      return;
    }

    if (otp.length !== 4) {
      alert("OTP must be exactly 4 characters");
      return;
    }

    console.log("~~~~~~~~~");
    console.log(username);
    console.log(password);
    console.log(otp);
    console.log("~~~~~~~~~");
  }
  return (
    <form action="" onSubmit={handleForm}>
      <input type="text" placeholder="Username" ref={usernameRef} />
      <input type="text" placeholder="Password" ref={passwordRef} />
      <input type="text" placeholder="OTP" ref={otpRef} />
      <button>Send</button>
    </form>
  );
};

export default UncontrolledForm;
