import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Final } from "./screens/Final/Final";
import { Privacy } from "./screens/Privacy/Privacy";
import { Terms } from "./screens/Terms/Terms";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Final />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};