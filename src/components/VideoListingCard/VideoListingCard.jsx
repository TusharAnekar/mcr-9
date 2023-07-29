import { useContext } from "react";
import "./videoListing.css";
import { VideosContext } from "../../contexts/videosContext";
import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categoriesContext";

export function VideoListingCard({ video }) {
  const { _id, title, views, thumbnail, src, category, creator } = video;

  const navigate = useNavigate();
  const { addVideoToWatchLater, checkVideoInWatchLater } =
    useContext(VideosContext);
  const {
    categoriesState: { selectedCategory },
  } = useContext(CategoriesContext);
  const isVideoInWatchLater = checkVideoInWatchLater(video);

  function handleWatchLater() {
    addVideoToWatchLater(video);
  }

  return (
    <div className="video-listing-card-container">
      <iframe src={src} title={title}></iframe>

      <div className="video-details-container">
        <img src={thumbnail} alt={title} />
        <div>
          <p
            className="video-title"
            onClick={() =>
              navigate(`/${selectedCategory.category.toLowerCase()}/${_id}`)
            }
          >
            <strong>{title}</strong>
          </p>
          <p>{category}</p>
          <p>
            <span>{views} views | </span>
            <span>{creator}</span>
          </p>
        </div>
      </div>
      <button onClick={handleWatchLater}>
        {isVideoInWatchLater ? "Remove from watch later" : "Watch Later"}
      </button>
    </div>
  );
}
