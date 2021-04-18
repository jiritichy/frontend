import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import AddPost from "./AddPost";

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

  const [thread, setThread] = useState<ThreadObject>(defaultThread);
  const server = process.env.REACT_APP_API_SERVER;
  const { id } = useParams<{ id: string }>();

  async function loadThread() {
    const res = await fetch(server + "getThread/" + id);
    const jsoned = await res.json();
    setThread(jsoned);
  }

  // load all the posts for given thread
  useEffect(() => {
    loadThread();
  }, []);

  // TODO if posts are empty, say no posts
  return (
    <div className="container mt-3">
      <h1>{thread.title}</h1>
      <h6>- {thread.username}</h6>
      <p>{thread.content}</p>
      <h4 className="mt-5">Replies:</h4>

      {thread.posts.map((post) => (
        <Post post={post} />
      ))}
      <AddPost threadID={id} loadThread={loadThread} />
    </div>
  );
};

export default Thread;
