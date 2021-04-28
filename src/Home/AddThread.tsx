import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

interface Props {
  loadThreads: () => void;
}

interface NewThread {
  username: string;
  content: string;
  title: string;
}

const MAX_THREAD_TITLE_LENGTH = 150;
const MAX_THREAD_CONTENT_LENGTH = 5000;

const AddThread = ({ loadThreads }: Props) => {
  const [addThreadOn, setAddThreadOn] = useState<boolean>(false);
  const server = process.env.REACT_APP_API_SERVER;
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const { username } = useContext(UserContext);

  // the error message if needed
  const [status, setStatus] = useState<string>("");

  /** Checks if the thread is valid. */
  function checkThreadValidity() {
    if (content.length > MAX_THREAD_CONTENT_LENGTH) {
      setStatus("Exceeded content length!");
      return false;
    }

    if (title.length > MAX_THREAD_TITLE_LENGTH) {
      setStatus("Exceeded title length!");
      return false;
    }

    setStatus("");
    return true;
  }

  /** Makes a post to the server */
  async function makeThread() {
    // error checking
    if (!checkThreadValidity()) return;

    const thread: NewThread = {
      username: username,
      content: content,
      title: title,
    };

    try {
      const result = await fetch(server + "newThread", {
        body: JSON.stringify(thread),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const response = await result.json();
      loadThreads();
      setAddThreadOn((current) => !current);
    } catch (error) {
      // TODO error handling
    }
  }

  /** The error message to be displayed. */
  function errorMessage() {
    if (status.length === 0) return;

    return <h5 className="alert alert-danger mt-2">{status}</h5>;
  }

  /** Renders the input form if needed */
  function inputForm() {
    if (addThreadOn) {
      return (
        <div className="form-group mt-4">
          <label className="">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="">Content</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="form-control border border-secondary"
          />
          <button onClick={makeThread} className="btn btn-primary mt-2">
            Submit
          </button>
          {errorMessage()}
        </div>
      );
    }

    return (
      <button
        className="btn btn-primary"
        onClick={() => setAddThreadOn((current) => !current)}
      >
        Add Thread
      </button>
    );
  }

  return <div className="mb-5">{inputForm()}</div>;
};

export default AddThread;
