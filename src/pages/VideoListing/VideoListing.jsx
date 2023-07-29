import { useContext } from "react";

import "./videoListing.css";
import { VideosContext } from "../../contexts/videosContext";
import { VideoListingCard } from "../../components/VideoListingCard/VideoListingCard";
import { CategoriesContext } from "../../contexts/categoriesContext";

export function VideoListing() {
  const { categoryFilteredVideos } = useContext(VideosContext);
  const {
    categoriesState: { selectedCategory },
  } = useContext(CategoriesContext);

  return (
    <div className="video-listing-container">
      <h2>{selectedCategory.category} Videos</h2>
      <div className="category-filtered-videos-container">
        {categoryFilteredVideos.map((video) => (
          <VideoListingCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
