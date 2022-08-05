import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignUpFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const { Signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password Not Match !");
    }

    try {
      setError("");
      setLoading(true);
      await Signup(email, password, name);
      navigate("/");
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("aumthing is worng");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={name}
        placeholder="Enter Your Name"
        icon="person"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        type="text"
        value={email}
        placeholder="Enter Your email"
        icon="alternate_email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter Your password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        value={confirmPassword}
        placeholder="Confirm password"
        required
        icon="lock"
        onChange={(e) => [setConfirmPassword(e.target.value), setError("")]}
      />

      <Checkbox
        text="I agree to the Terms & Conditions"
        checked={agree}
        required
        onChange={(e) => setAgree(e.target.checked)}
      />

      {error && <p className={"error"}>{error}</p>}

      <Button disabled={loading} type="submit">Submit now</Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
