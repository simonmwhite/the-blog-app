// React imports.
import React from "react";
import { useNavigate } from "react-router-dom";

// Firebase imports.
import { auth, provider } from "../../services/firebase";
import { signInWithPopup } from "firebase/auth";

// Theme UI imports.
import { Box, Paragraph, Button } from "theme-ui";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/home");
    });
  };
  return (
    <Box
      sx={{
        maxWidth: "600px",
        mx: "auto",
        my: "0",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <Paragraph
        sx={{
          my: "2.5%",
        }}
      >
        Welcome to The Blog App. You will need to sign in with Google to make a
        post.
      </Paragraph>
      <Button variant="secondary" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </Box>
  );
}

export default Login;
