import React from "react";
import AddPost from "./components/AddPost";
import CarouselPosts from "./components/CarouselPosts";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <CarouselPosts />
      <AddPost />
    </Container>
  );
}

export default App;
