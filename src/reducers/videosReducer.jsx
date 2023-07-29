export const initialVideosState = {
  videos: [],
  watchLaterVideos: [],
  inputSearch: "",
  notes: []
};

export const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VIDEOS":
      return { ...state, videos: payload };
    case "ADD_VIDEO_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.includes(payload)
          ? state.watchLaterVideos.filter(({_id}) => _id !== payload._id)
          : [...state.watchLaterVideos, payload],
      };
    case "INPUT_SEARCH": return {
      ...state, inputSearch: payload
    }
    case "SET_NOTES" : return {
      ...state, notes: [...state.notes, payload]
    }
    case "DELETE_NOTE": return {
      ...state, notes: state.notes.filter((note) => note !== payload)}
    default:
      return state;
  }
};
