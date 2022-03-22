import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import VideoList from "./Components/VideoList";
import VideoPlayer from "./Components/VideoPlayer";
import axios from "axios";

const baseURL =
  "https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube?class=10th&subject=Maths";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="app">
      <NavBar siteTitle="React App" />
      <div className="container">
        <Routes>
          <Route path="/" element={<VideoList videos={post} />}></Route>
          <Route path="/video" element={<VideoPlayer />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;