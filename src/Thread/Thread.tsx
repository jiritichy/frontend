import { useState, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { ImCross } from "react-icons/im";
import { Link, useParams, useHistory } from "react-router-dom";
import Post from "./Post/Post";
import AddPost from "./AddPost";
import { UserContext } from "../Home/UserContext";

export interface PostObj {
  username: string;
  content: string;
  date: string; // TODO change

  // post id
  id: string;

  // array of all the ids for children posts
  childrenIDs: string[];

  // the id of the parent post
  parentID: string;

  imageURL: string;

  // if the post has been deleted
  deleted?: boolean;
}

export interface ThreadObject {
  title: string;
  username: string;
  content: string;
  _id: string;
  posts: PostObj[];
}

// TODO if your own post / thread, you can delete
const Thread = () => {
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
  const [topLevelPosts, setTopLevelPosts] = useState<PostObj[]>([]);

  /** Loads the thread. */
  async function loadThread() {
    const res = await fetch(server + "getThread/" + id);
    const jsoned = await res.json();
    setThread(jsoned);

    // // get top level posts
    setTopLevelPosts([]);
    for (const post of jsoned.posts) {
      if (post.parentID === null) {
        setTopLevelPosts((current) => [...current, post]);
      }
    }
  }

  /** Deletes the thread. */
  async function deleteThread() {
    // TODO are u sure
    const res = await fetch(server + "deleteThread/" + id);
    // console.log(res.json());

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

  /** Gets a post by it's id */
  function getPostByID(postID: string): PostObj | null {
    // console.log(postID);
    for (const post of thread.posts) {
      if (post.id === postID) {
        // console.log(post);
        return post;
      }
    }
    return null;
  }

  // TODO remove
  // function temp() {
  //   // getPostByID("3b51c4c3-0b88-4dac-aded-72a4d5c0d1c1");
  //   return;
  // }

  // load all the posts for given thread
  useEffect(() => {
    loadThread();
    // temp();
  }, []);

  // TODO if posts are empty, say no posts
  return (
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="col d-inline-flex align-items-center">
          <h1 className="mb-0">{thread.title}</h1>
          {renderOwnerActions()}
          {/* <button onClick={() => temp()}>adminbutton temp</button> */}
        </div>
      </div>
      <h6>- {thread.username}</h6>
      <p style={{ wordWrap: "break-word" }}>{thread.content}</p>
      <AddPost threadID={id} loadThread={loadThread} />
      <h4 className="mt-5">Replies:</h4>
      <div className="container ">
        {topLevelPosts.map((post, index) => (
          <Post
            key={index}
            post={post}
            threadID={id}
            loadThread={loadThread}
            getPost={getPostByID}
            indentLevel={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Thread;
