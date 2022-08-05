import logo from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignUpFrom from "../SignUpFrom";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={logo} alt="Signup" />
        <SignUpFrom />
      </div>
    </>
  );
}
