import { useState, useContext, useEffect } from "react";
import { UserContext } from "../Home/UserContext";

interface Props {
  // the current thread's ID
  threadID: string;
  loadThread: () => void;

  // if false, then don't render the add post button
  noRenderButton?: boolean;
}

interface Post {
  username: string;
  content: string;
  date: string;
  threadID: string;
}

const AddPost = ({ threadID, loadThread, noRenderButton }: Props) => {
  const [addPostOn, setAddPostOn] = useState<boolean>(false);
  const server = process.env.REACT_APP_API_SERVER;
  const [content, setContent] = useState<string>("");
  const { username } = useContext(UserContext);

  useEffect(() => {
    if (noRenderButton === undefined) {
      setAddPostOn(false);
    } else {
      setAddPostOn(true);
    }
  }, []);

  /** Makes a post to the server */
  async function makePost() {
    const post: Post = {
      username: username, // username temp
      content: content,
      date: new Date().toLocaleString(),
      threadID: threadID,
    };

    try {
      const result = await fetch(server + "makePost", {
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const response = await result.json();
      loadThread();
      setAddPostOn((current) => !current);
    } catch (error) {
      // TODO error handling
    }
  }

  /** Renders the add post form. */
  function renderForm() {
    return (
      <div className="form-group mt-4 mb-5">
        <label className="">Content</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          className="form-control border border-secondary"
        />
        <div className="d-flex flex-row justify-content-between">
          <button onClick={makePost} className="btn btn-primary mt-2">
            Submit
          </button>
          <button
            onClick={(e) => setAddPostOn(false)}
            className="btn btn-primary mt-2"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  /** Renders the add post button. */
  function renderButton() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => setAddPostOn((current) => !current)}
        >
          Add Reply
        </button>
      </div>
    );
  }

  return (
    <>
      {addPostOn && renderForm()}
      {!addPostOn && !noRenderButton && renderButton()}
    </>
  );
};

export default AddPost;
