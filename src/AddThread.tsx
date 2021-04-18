import { useState } from "react";

interface Props {
  threadID: string;
  loadThreads: () => void;
}

interface NewThread {
  username: string;
  content: string;
  title: string;
}

const AddThread = ({ threadID, loadThreads }: Props) => {
  const [addThreadOn, setAddThreadOn] = useState<boolean>(false);
  const server = process.env.REACT_APP_API_SERVER;
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  /** Makes a post to the server */
  async function makeThread() {
    const thread: NewThread = {
      username: "kiel", // username temp
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
