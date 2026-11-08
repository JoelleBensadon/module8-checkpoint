import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

function App() {

  return (
    <>
      <Navigation />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/users/:id"
          element={<UserDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
}

export default App;