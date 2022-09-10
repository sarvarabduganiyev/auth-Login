import { useContext, useRef } from "react";
import { TokenContext } from "../../context/tokenContext";
import { https } from "../../services/http";

function Login() {
  const loginInput = useRef(null);
  const passInput = useRef(null);
  const { setAuthToken } = useContext(TokenContext);
  const LoginFunction = (event) => {
    event.preventDefault();
    https
      .post("/login", {
        email: loginInput.current.value,
        password: passInput.current.value,
      })
      .then((res) => {
        setAuthToken(res.data.token);
        // setToken(res.data.token);
        localStorage.setItem("authToken", JSON.stringify(res.data.token));
      });
  };

  return (
    <form onSubmit={LoginFunction}>
      <input
        ref={loginInput}
        type="email"
        style={{ margin: "10px" }}
        placeholder="Email"
      />
      <br />
      <input
        ref={passInput}
        style={{ margin: "10px" }}
        type="password"
        placeholder="Password"
      />
      <br />
      <button style={{ margin: "10px" }} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Login;
