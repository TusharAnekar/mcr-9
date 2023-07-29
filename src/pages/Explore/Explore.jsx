import { useContext } from "react";
import "./explore.css"
import { VideosContext } from "../../contexts/videosContext";
import { VideoListingCard } from "../../components/VideoListingCard/VideoListingCard";

export function Explore() {
  const {
    videosDispatch, searchedFilteredVideos
  } = useContext(VideosContext);

  function handleInput (e) {
    videosDispatch({ type: "INPUT_SEARCH", payload: e.target.value });
  }

  return (
    <div className="explore-container">
      <h2>Explore</h2>
      <input type="text" placeholder="Search video by title" onChange={handleInput}/>
      <div className="videos-container">
        {searchedFilteredVideos?.map((video) => (
          <VideoListingCard video={video} />
        ))}
      </div>
    </div>
  );
}
