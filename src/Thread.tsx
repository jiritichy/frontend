import { useState, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { ImCross } from "react-icons/im";
import { Link, useParams, useHistory } from "react-router-dom";
import Post from "./Post";
import AddPost from "./AddPost";
import { UserContext } from "./UserContext";

export interface PostObj {
  username: string;
  content: string;
  date: string; // TODO change
}

export interface ThreadObject {
  title: string;
  username: string;
  content: string;
  _id: string;
  posts: PostObj[];
}

// TODO on making thread, if no username, then anonymous
// TODO logged in username displayed
// TODO make new threads
// TODO make new posts on thread
// TODO if your own post / thread, you can delete
const Thread = () => {
  const [posts, setPosts] = useState([]);
  const defaultThread: ThreadObject = {
    title: "",
    content: "",
    username: "",
    _id: "",
    posts: [],
  };

  const { username, setUsername } = useContext(UserContext);
  const [thread, setThread] = useState<ThreadObject>(defaultThread);
  const server = process.env.REACT_APP_API_SERVER;
  const { id } = useParams<{ id: string }>();
  const hist = useHistory();

  async function loadThread() {
    const res = await fetch(server + "getThread/" + id);
    const jsoned = await res.json();
    setThread(jsoned);
  }

  async function deleteThread() {
    // TODO are u sure
    const res = await fetch(server + "deleteThread/" + id);
    console.log(res.json());

    // redirect to home
    hist.push("/home");
  }

  /** Renders possible actions for owner of a thread. */
  function renderOwnerActions() {
    if (thread.username === username) {
      return (
        <IconContext.Provider value={{ size: "1em" }}>
          <ImCross
            onClick={deleteThread}
            style={{ cursor: "pointer" }}
            className="ml-2"
          />
        </IconContext.Provider>
      );
    }
  }

  // load all the posts for given thread
  useEffect(() => {
    loadThread();
  }, []);

  // TODO if posts are empty, say no posts
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col d-inline-flex align-items-center">
          <h1 className="mb-0">{thread.title}</h1>
          {renderOwnerActions()}
        </div>
      </div>
      <h6>- {thread.username}</h6>
      <p>{thread.content}</p>
      <h4 className="mt-5">Replies:</h4>

      {thread.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <AddPost threadID={id} loadThread={loadThread} />
    </div>
  );
};

export default Thread;
