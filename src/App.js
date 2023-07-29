import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { VideoListing } from "./pages/VideoListing/VideoListing";
import { Video } from "./pages/Video/Video";
import { WatchLater } from "./pages/WatchLater/WatchLater";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:categoryName" element={<VideoListing />}></Route>
          <Route path="/:categoryName/:videoId" element={<Video />}></Route>
          <Route path="/watch-later" element={<WatchLater />}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
