import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./video.css";
import { VideosContext } from "../../contexts/videosContext";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import NotesIcon from "@mui/icons-material/Notes";

export function Video() {
  const { videoId } = useParams();
  const {
    videosState: { videos },
    addVideoToWatchLater,
  } = useContext(VideosContext);

  const video = videos?.find(({ _id }) => _id === Number(videoId));

  const { _id, title, views, chips, thumbnail, src, category, creator } = video;

  function handleWatchLater() {
    addVideoToWatchLater(video);
  }

  return (
    <div className="video-container">
      <iframe src={src} title={title}></iframe>

      <div className="video-details-container">
        <div className="img-title-container">
          <img src={thumbnail} alt={title} />

          <strong>{title}</strong>
        </div>
        <div className="icons">
          <WatchLaterIcon className="icon" onClick={handleWatchLater} />
          <PlaylistAddIcon className="icon" />
          <NotesIcon className="icon" />
        </div>
      </div>

      <div>
        <h3>My Notes</h3>
      </div>
    </div>
  );
}
