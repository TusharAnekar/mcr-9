import { createContext, useContext, useEffect, useReducer } from "react";
import { initialVideosState, videosReducer } from "../reducers/videosReducer";
import { videos } from "../db/videosData";
import { CategoriesContext } from "./categoriesContext";

export const VideosContext = createContext();

export function VideosProvider({ children }) {
  const [videosState, videosDispatch] = useReducer(
    videosReducer,
    initialVideosState
  );

  const { categoriesState } = useContext(CategoriesContext);

  function getVideos() {
    videosDispatch({ type: "SET_VIDEOS", payload: videos });
  }

  useEffect(() => {
    getVideos();
  }, []);

  function addVideoToWatchLater(video) {
    videosDispatch({ type: "ADD_VIDEO_TO_WATCH_LATER", payload: video });
  }

  function addNotes (note) {
    videosDispatch({ type: "SET_NOTES", payload: note });
  }

  function deleteNote (note) {
    videosDispatch({ type: "DELETE_NOTE", payload: note });
  }

  const categoryFilteredVideos = videosState?.videos?.filter(
    ({ category }) => category === categoriesState?.selectedCategory?.category
  );

  const searchedFilteredVideos = videosState?.inputSearch.length ? videosState?.videos?.filter(({title}) => title.toLowerCase().includes(videosState?.inputSearch.toLowerCase())) : videosState?.videos

  const checkVideoInWatchLater = (video) => videosState?.watchLaterVideos?.some(({_id}) => _id === video._id)

  return (
    <VideosContext.Provider
      value={{
        videosState,
        videosDispatch,
        categoryFilteredVideos,
        addVideoToWatchLater,
        searchedFilteredVideos,
        checkVideoInWatchLater,
        addNotes,
        deleteNote
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}
