import { useContext } from "react";
import { TokenContext } from "../../context/tokenContext";

function Home() {
  const { setAuthToken, authToken } = useContext(TokenContext);

  const logOut = () => {
    localStorage.removeItem("authToken");
    // setToken(null);
    setAuthToken(null);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h1>{authToken}</h1>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Home;
