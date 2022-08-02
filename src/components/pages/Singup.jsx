import logo from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={logo} alt="Signup" />
        <Form className={classes.signup} action="#">
          <TextInput type="text" placeholder="Enter Your Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter Your email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="Enter Your password"
            icon="lock"
          />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock"
          />

          <Checkbox text="I agree to the Terms & Conditions" />

          <Button>Submit now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
