import { useContext } from "react";
import "./watchLater.css"
import { VideosContext } from "../../contexts/videosContext";
import { VideoListingCard } from "../../components/VideoListingCard/VideoListingCard";

export function WatchLater() {
  const {
    videosState: { watchLaterVideos },
  } = useContext(VideosContext);
  return (
    <div className="watch-later-container">
        <h2>Watch Later Videos</h2>
      <div className="videos-container">
      {watchLaterVideos?.map((video) => (
        <VideoListingCard video={video} key={video._id}/>
      ))}
      </div>
    </div>
  );
}
