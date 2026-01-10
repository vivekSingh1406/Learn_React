import Calculator from "./components/Calculator";

import { useState } from "react";
import Login from "./login/Login";
import Register from "./login/Register";
import ForgotPassword from "./login/ForgotPassword";

function App() {
  // return (
  //   <div className="app">
  //     <Calculator />
  //   </div>
  // )

  /* Conditional Login Page Example */

  const companyName = "AwesomeTech Inc.";

  const [page, setPage] = useState("login");

  const renderPage = () => {
    switch (page) {
      case "login":
        return <Login setPage={setPage} companyName={companyName} />;
      case "register":
        return <Register setPage={setPage} companyName={companyName} />;
      case "forgot":
        return <ForgotPassword setPage={setPage} companyName={companyName} />;
      default:
        return <Login setPage={setPage} companyName={companyName} />;
    }
  };

  return <div className="auth-wrapper">{renderPage()}</div>;
}

export default App;
