// React imports.
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Firebase imports.
import { addDoc, collection } from "firebase/firestore/lite";
import { db, auth } from "../../services/firebase";

// Theme UI imports.
import { Box, Label, Input, Textarea, Button, Heading } from "theme-ui";

function CreatePost(isAuth) {
  // States to keep track of the title and post inputs.
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  // Listen to the click event and submit values to Firebase.
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <Box as="form" onSubmit={(e) => e.preventDefault()}>
      <Heading
        as="h1"
        sx={{
          mb: "2.5%",
        }}
      >
        Create a post
      </Heading>
      <Label htmlFor="title">Title</Label>
      <Input
        name="title"
        id="title"
        placeholder="Enter the blog post title..."
        mb={3}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Label htmlFor="post">Post</Label>
      <Textarea
        name="post"
        id="post"
        rows={6}
        mb={3}
        placeholder="Enter some text..."
        onChange={(event) => {
          setPostText(event.target.value);
        }}
      />
      <Button variant="secondary" onClick={createPost}>
        Submit
      </Button>
    </Box>
  );
}

export default CreatePost;
