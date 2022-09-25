// React imports.
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore/lite";

// Firebase imports.
import { db, auth } from "../services/firebase";

// Theme UI imports.
import { Box, Heading, Button, Card } from "theme-ui";

function Home({ isAuth }) {
  const [postLists, setBlogPostList] = useState([]);

  const getBlogPosts = async () => {
    const postsCollectionRef = collection(db, "posts");
    const data = await getDocs(postsCollectionRef);
    setBlogPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  const deleteBlogPosts = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <Box>
      {postLists.map((post, index) => {
        return (
          <Card key={index} variant="primary">
            <Box>
              <Box>
                <Heading
                  as="h1"
                  sx={{
                    pb: "2.5%",
                  }}
                >
                  {post.title}
                </Heading>
              </Box>

              <Box>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <Button
                    onClick={() => {
                      deleteBlogPosts(post.id);
                    }}
                    sx={{
                      position: "absolute",
                      right: "3",
                      bottom: "3",
                    }}
                    title="Delete post"
                  >
                    Delete
                  </Button>
                )}
              </Box>

              <Box>{post.postText}</Box>
              <Box
                sx={{
                  pt: "2.5%",
                  color: "primary",
                }}
              >
                @{post.author.name}
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}

export default Home;
