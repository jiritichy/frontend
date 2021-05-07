import { useState, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { ImCross } from "react-icons/im";
import { Link, useParams, useHistory } from "react-router-dom";
import Post from "./Post/Post";
import AddPost from "./AddPost";
import { UserContext } from "../Home/UserContext";

import io from "socket.io-client";
import { PostContext } from "../Home/PostContext";
const SOCKET_SERVER: any = process.env.REACT_APP_SOCKET_SERVER;
const socket = io(SOCKET_SERVER);
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
  error?: string;
  id?: string;
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
  const { communityName, id } = useParams<{
    communityName: string;
    id: string;
  }>();
  const hist = useHistory();
  const [topLevelPosts, setTopLevelPosts] = useState<PostObj[]>([]);
  const [newPostObj, setNewPostObj] = useState<PostObj | null>(null);
  const [postToReload, setPostToReload] = useContext(PostContext).voteReload;
  const [deletedPost, setDeletedPost] = useContext(PostContext).deleteReload;

  /** Loads the thread. */
  async function loadThread() {
    const res = await fetch(`${server}getThread/${id}`);
    const jsoned: ThreadObject = await res.json();

    // thread doesn't exist or error in retrieving it
    if (jsoned.hasOwnProperty("error")) {
      // redirect to home
      hist.push("/home");
      return;
    }

    if (JSON.stringify(jsoned) !== JSON.stringify(thread)) {
      setThread(jsoned);
      // // get top level posts
      setTopLevelPosts([]);
      for (const post of jsoned.posts) {
        if (post.parentID === null) {
          setTopLevelPosts((current) => [...current, post]);
        }
      }
    }
  }

  /** Deletes the thread. */
  async function deleteThread() {
    // TODO are u sure
    const res = await fetch(`${server}deleteThread/${communityName}/${id}`);
    // console.log(res.json());

    // redirect to home
    hist.push(`/c/${communityName}`);
  }

  /** Renders possible actions for owner of a thread. */
  function renderOwnerActions() {
    if (thread.username === username) {
      return (
        <IconContext.Provider value={{ size: "1em" }}>
          <ImCross
            onClick={deleteThread}
            style={{ cursor: "pointer", minWidth: "15px" }}
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

  // load all the posts for given thread
  useEffect(() => {
    loadThread();
    // temp socket io
    socket.connect();
    socket.emit("onThread", id);
    socket.on("newPost", (newPost: PostObj) => {
      // store new post somewhere

      // is top level
      if (newPost.parentID === null) {
        console.log("new top level post");
        setTopLevelPosts((current) => [...current, newPost]);
        // TODO https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm
      } else {
        setNewPostObj(newPost);
      }
    });
    // post had its votes changed, reload
    socket.on("upvotePost", (postID) => {
      setPostToReload(postID);
    });
    // post deletion
    socket.on("postDeleted", (postID) => {
      setDeletedPost(postID);
    });

    // cleanup
    return () => {
      socket.disconnect();
    };
  }, []);

  // TODO if posts are empty, say no posts
  return (
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="col d-inline-flex align-items-center">
          <h1 className="mb-0">{thread.title}</h1>
          {renderOwnerActions()}
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
            postID={post.id}
            threadID={id}
            loadThread={loadThread}
            getPost={getPostByID}
            indentLevel={0}
            newPost={newPostObj}
          />
        ))}
      </div>
    </div>
  );
};

export default Thread;
