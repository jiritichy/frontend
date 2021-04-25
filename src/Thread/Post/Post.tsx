import { PostObj } from "../Thread";
import AddPost from "../AddPost";
import { useState, useEffect } from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostBody from "./PostBody";

interface Props {
  post: PostObj;
  threadID: string;
  loadThread: () => void;
  getPost: (postID: string) => PostObj | null;
  indentLevel: number;
}

// TODO format date properly

const Post = ({ post, threadID, loadThread, getPost, indentLevel }: Props) => {
  // to find difference in date
  // const currentTime = new Date().getTime();

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
          parentPostID={post.id}
          setRenderReplyForm={setRenderReplyForm}
        />
      );
    }
  }

  return (
    // card
    <>
      <div style={{ marginLeft: padding, width: "auto" }}>
        <div className="container my-3 border border-secondary rounded bg-dark">
          <PostHeader post={post} />
          <PostBody post={post} />
          <PostFooter
            post={post}
            renderChildren={renderChildren}
            setRenderReplyForm={setRenderReplyForm}
            setRenderChildren={setRenderChildren}
          />
        </div>
        {renderReply()}
      </div>
      {renderChildren &&
        post.childrenIDs.map((id) => {
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
