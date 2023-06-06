import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Hire from "./pages/Hire";
import Resume from "./pages/Resume";
import Result from "./pages/Result";
import Register from "./pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/result" element={<Result />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
