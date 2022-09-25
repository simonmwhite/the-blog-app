// React imports.
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Component and page imports.
import Home from "./pages/Home";
import CreatePost from "./components/CreatePost/CreatePost";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Theme UI imports.
import { Container, ThemeProvider, NavLink, Flex } from "theme-ui";
import { theme } from "./theme/theme.js";

// Firebase imports.
import { auth } from "./services/firebase";
import { signOut } from "firebase/auth";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        p={4}
        sx={{
          maxWidth: "1200px",
        }}
      >
        <Header />

        <Flex
          as="nav"
          sx={{
            justifyContent: "center",
            mb: "2.5%",
          }}
        >
          <NavLink href="/home" p={2}>
            Home
          </NavLink>
          {!isAuth ? (
            <NavLink href="/login" p={2}>
              {" "}
              Login
            </NavLink>
          ) : (
            <>
              <NavLink href="/createpost" p={2}>
                Create post
              </NavLink>
              <NavLink href="/" p={2} onClick={signUserOut}>
                Log out
              </NavLink>
            </>
          )}
        </Flex>

        <Router>
          <Routes>
            <Route
              index
              path="/home"
              element={<Home isAuth={isAuth} />}
            ></Route>
            <Route
              path="/createpost"
              element={<CreatePost isAuth={isAuth} />}
            ></Route>
            <Route
              path="/login"
              element={<Login setIsAuth={setIsAuth} />}
            ></Route>
          </Routes>
        </Router>

        <Footer />
      </Container>
    </ThemeProvider>
  );
};

// Create a root.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render app to root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
