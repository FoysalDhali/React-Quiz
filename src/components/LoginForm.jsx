import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { Login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await Login(email, password);
      navigate("/");
    } catch (e) {
      setLoading(false);
      console.log(e);
      if (e.code === "auth/invalid-email" || e.code === "auth/wrong-password") {
        return setError("invalid info");
      }
      setError("Internal Server Error");
    }
  }

  return (
    <Form
      className={classes.login}
      style={{ height: "330px" }}
      onSubmit={handleSubmit}
    >
      <TextInput
        type="email"
        placeholder="Enter your email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        value={password}
        type="password"
        placeholder="Enter your password"
        icon="lock"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <span className={"error"}>{error}</span>}
      <Button disabled={loading}>Login</Button>
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
