import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";

const App = () => (
  <Router>
    <Routes>
      {/* Redirige "/" a "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />
    </Routes>
  </Router>
);

export default App;
