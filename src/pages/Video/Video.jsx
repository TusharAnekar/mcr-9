import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./video.css";
import { VideosContext } from "../../contexts/videosContext";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import NotesIcon from "@mui/icons-material/Notes";

export function Video() {
  const { videoId } = useParams();
  const {
    videosState: { videos, notes },
    addVideoToWatchLater,
    addNotes,
    deleteNote,
  } = useContext(VideosContext);

  const [showNoteModal, setShowNoteModal] = useState(false);
  const [inputNote, setInputNote] = useState("");

  const video = videos?.find(({ _id }) => _id === Number(videoId));

  const { title, thumbnail, src } = video;

  function handleWatchLater() {
    addVideoToWatchLater(video);
  }

  function handleNotes() {
    setShowNoteModal(true);
  }

  function handleAddNote() {
    if (inputNote.length) {
      addNotes(inputNote);
      setInputNote("");
    }
  }

  function handleDelete(note) {
    deleteNote(note);
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
          <NotesIcon className="icon" onClick={handleNotes} />
        </div>
      </div>

      {showNoteModal && (
        <div>
          <input
            type="text"
            value={inputNote}
            onChange={(e) => setInputNote(e.target.value)}
          />
          <button onClick={handleAddNote}>Add Note</button>
        </div>
      )}

      <div>
        <h3>My Notes</h3>
        <div>
          {notes?.map((note, index) => (
            <div>
              <p key={index}>{note}</p>
              <button onClick={() => handleDelete(note)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
