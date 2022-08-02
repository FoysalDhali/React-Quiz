import logo from "../../assets/images/login.svg";
import classes from "../../styles/Login.module.css";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import Button from "../Button";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={logo} alt="Login" />
        <Form className={classes.login} action="#">
          <TextInput type='email' placeholder='Enter your email' icon='alternate_email' />
          <TextInput type='password' placeholder='Enter your password' icon='lock' />
          <Button>Login</Button>
          <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
        </Form>
      </div>
    </>
  );
}
