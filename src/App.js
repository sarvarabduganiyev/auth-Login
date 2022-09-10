import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import { TokenContext } from "./context/tokenContext";
function App() {
  const { authToken } = useContext(TokenContext);
  // const [token, setToken] = useState(window.localStorage.getItem("authToken"));
  return (
    <Router>
      <Routes>
        {authToken ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
