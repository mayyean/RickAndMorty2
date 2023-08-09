import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CharacterList from "./components/CharacterList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/characters" element={<CharacterList />} />
    </Routes>
  );
};

export default MainRoutes;
