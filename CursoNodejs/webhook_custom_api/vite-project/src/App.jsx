import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Flow from "./Components/Flow";
import BotComponent from "./Components/Chat/Chat";
import IntentForm from "./Components/Intents/Intent";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/flow" element={<Flow />} />
        <Route path="/bot" element={<BotComponent />} />
        <Route path="/intent" element={<IntentForm />} />
      </Routes>
    </Router>
  );
}
