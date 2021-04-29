import { PostObj } from "../Thread";
import AddPost from "../AddPost";
import { useState, useEffect, useContext } from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostBody from "./PostBody";
import PostVotes from "./PostVotes";
import { UserContext } from "../../Home/UserContext";

interface Props {
  post: PostObj;
  threadID: string;
  loadThread: () => void;
  getPost: (postID: string) => PostObj | null;
  indentLevel: number;
}

const server = process.env.REACT_APP_API_SERVER;

const Post = ({ post, threadID, loadThread, getPost, indentLevel }: Props) => {
  const username = useContext(UserContext).username;

  // TODO fix later
  const [postNotProp, setPostNotProp] = useState(post);

  // determines if the reply form will be rendered
  const [renderReplyForm, setRenderReplyForm] = useState<boolean>(false);

  // determines if children are rendered
  const [renderChildren, setRenderChildren] = useState<boolean>(true);

  // how many pixels each indent level is
  const padding = indentLevel * 20;

  /** toggles the reply form when reply clicked */
  function renderReply() {
    if (renderReplyForm) {
      return (
        <AddPost
          threadID={threadID}
          loadThread={loadThread}
          noRenderButton={true}
          parentPostID={postNotProp.id}
          setRenderReplyForm={setRenderReplyForm}
        />
      );
    }
  }

  /** Gets post */
  async function retrievePost() {
    const payload = { threadID: threadID, postID: postNotProp.id };

    try {
      const result = await fetch(server + "getPost", {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const response = await result.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  /** Deletes a post from the server */
  async function deletePost() {
    const payload = { threadID: threadID, postID: postNotProp.id };

    try {
      const result = await fetch(server + "deletePost", {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const response: Object = await result.json();
      if (response.hasOwnProperty("status")) {
        const updatedpost = await retrievePost();
        setPostNotProp(updatedpost);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // card
    <>
      <div style={{ marginLeft: padding, width: "auto" }}>
        <div className="my-3 d-flex border border-secondary rounded bg-dark">
          <PostVotes postID={post.id} username={username} />
          <div className="container" style={{ paddingLeft: "0" }}>
            <PostHeader post={postNotProp} />
            <PostBody post={postNotProp} />
            <PostFooter
              post={postNotProp}
              renderChildren={renderChildren}
              setRenderReplyForm={setRenderReplyForm}
              setRenderChildren={setRenderChildren}
              deletePost={deletePost}
            />
          </div>
        </div>
        {renderReply()}
      </div>
      {/* Recursively render children */}
      {renderChildren &&
        postNotProp.childrenIDs.map((id) => {
          const childPost = getPost(id);
          if (childPost !== null) {
            return (
              <Post
                key={id}
                loadThread={loadThread}
                post={childPost}
                getPost={getPost}
                threadID={threadID}
                indentLevel={indentLevel + 1}
              />
            );
          }
          return null;
        })}
    </>
  );
};

export default Post;
