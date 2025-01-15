import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
