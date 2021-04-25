import { useState, useContext, useEffect } from "react";
import { UserContext } from "../Home/UserContext";

interface Props {
  // the current thread's ID
  threadID: string;
  loadThread: () => void;

  // if false, then don't render the add post button
  noRenderButton?: boolean;

  // when in reply mode
  parentPostID?: string;

  // so we can remove the reply form component when post submitted
  setRenderReplyForm?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PostRequest {
  username: string;
  content: string;
  date: string;
  threadID: string;
  childrenIDs: string[]; // TODO maybe make server side
  parentID?: string;
  imageURL: string;
}

const AddPost = ({
  threadID,
  loadThread,
  noRenderButton,
  parentPostID,
  setRenderReplyForm,
}: Props) => {
  const [addPostOn, setAddPostOn] = useState<boolean>(false);
  const server = process.env.REACT_APP_API_SERVER;
  const [content, setContent] = useState<string>("");
  const { username } = useContext(UserContext);
  const [imageURL, setImageURL] = useState<string>("");

  useEffect(() => {
    if (noRenderButton === undefined) {
      setAddPostOn(false);
    } else {
      setAddPostOn(true);
    }
  }, []);

  /** Makes a post to the server */
  async function makePost() {
    const post: PostRequest = {
      username: username, // username temp
      content: content,
      date: new Date().toLocaleString(),
      threadID: threadID,
      childrenIDs: [],
      parentID: parentPostID, // TODO if not reply, then parentID is ''
      imageURL: imageURL,
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
      return;
    }

    cancelHandler();
  }

  /** Closes the form. */
  function cancelHandler() {
    setAddPostOn(false);
    if (setRenderReplyForm) {
      setRenderReplyForm(false);
    }
  }

  /** Renders the add post form. */
  function renderForm() {
    return (
      <div className="form-group mt-4 mb-5">
        <label className="">Content</label>
        <textarea
          placeholder="What are your thoughts?"
          onChange={(e) => setContent(e.target.value)}
          className="form-control border border-secondary"
          rows={6}
        />
        <div className="mt-3">
          <label>Image url</label>
          <input
            type="text"
            onChange={(e) => setImageURL(e.target.value)}
            className="form-control border border-secondary"
          />
        </div>
        <div className="d-flex flex-row justify-content-end">
          <button
            onClick={(e) => cancelHandler()}
            className="btn btn-primary mt-2"
          >
            Cancel
          </button>
          <button
            onClick={makePost}
            className="btn btn-primary mt-2 ml-3 bg-secondary text-dark border border-secondary"
          >
            Submit
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
