import { FC } from "react";
import {BrowserRouter as Router, Route, RouterProps, Routes } from "react-router-dom";
import Demo from "./components/demo/Demo";
import Register from "./views/auth/register/Register";
import VerifyNumber from "./views/auth/verifynumber/VerifyNumber";
import ChatScreen from "./views/chatscreen/ChatScreen";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/verify/number" element={<VerifyNumber/>} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App
