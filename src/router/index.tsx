import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ToDos from "../pages/ToDos";

const Main = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="todos" element={<ToDos />} />
    </Routes>
  )
}
export default Main;