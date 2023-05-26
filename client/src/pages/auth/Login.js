import React from "react";
import InputType from "../../components/shared/Form/InputType";

const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8 login-pic-div">
          <img src="./assets/images/login-pic.jpg" alt="login-pic" />
        </div>
        <div className="col-md-4 form-comtainer">
          <form>
            <InputType labelText={"Role"} inputType={"text"} labelFore={"forText"} name={"name"} />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    </>
  );
};

export default Login;
