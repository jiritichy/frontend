import { useState, useContext } from "react";
import { UserContext } from "./UserContext";
interface Props {
  threadID: string;
  loadThread: () => void;
}

interface Post {
  username: string;
  content: string;
  date: string;
  threadID: string;
}

const AddPost = ({ threadID, loadThread }: Props) => {
  const [addPostOn, setAddPostOn] = useState<boolean>(false);
  const server = process.env.REACT_APP_API_SERVER;
  const [content, setContent] = useState<string>("");
  const { username } = useContext(UserContext);

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

  /** Renders the input form if needed */
  function inputForm() {
    if (addPostOn) {
      return (
        <div className="form-group mt-4">
          <label className="">Content</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="form-control border border-secondary"
          />
          <button onClick={makePost} className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      );
    }

    return (
      <button
        className="btn btn-primary"
        onClick={() => setAddPostOn((current) => !current)}
      >
        Add Post
      </button>
    );
  }

  return <div className="mb-5">{inputForm()}</div>;
};

export default AddPost;
