import { PostObj } from "./Thread";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";

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
  const [renderReplyForm, setRenderReplyForm] = useState<Boolean>(false);

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

  /** Hides replies from the post which was clicked */
  function toggleReplies() {
    // console.log(window.scrollY);
    setRenderChildren((current) => !current);
    return;
  }

  /** Renders the image if necessary */
  function renderImage(): JSX.Element | void {
    if (post.imageURL !== "") {
      return (
        <img
          className="mb-2"
          style={{ maxWidth: "400px", width: "100%", height: "auto" }}
          src={post.imageURL}
          alt=""
        />
      );
    }

    return;
  }

  return (
    // card
    <>
      <div style={{ marginLeft: padding, width: "auto" }}>
        <div className="container my-3 border border-secondary rounded bg-dark">
          <div className="row p-2 d-flex justify-content-between">
            <h6 className="text-white ml-1">{post.username}</h6>
            <h6>
              <small className="ml-3 text-muted">{post.date}</small>
            </h6>
          </div>
          <div className="row pl-2">
            {<p className="text-white ml-1">{post.content}</p>}
          </div>
          {renderImage()}
          <div className="row">
            <div className="col d-flex">
              <div>
                <h6 className="text-muted">
                  <small
                    style={{ cursor: "pointer" }}
                    onClick={(e) => setRenderReplyForm((prev) => !prev)}
                  >
                    Reply
                  </small>
                </h6>
              </div>
              <div className={"ml-3"}>
                <h6 className="text-muted">
                  <small
                    style={{ cursor: "pointer" }}
                    onClick={(e) => toggleReplies()}
                  >
                    {!renderChildren &&
                      post.childrenIDs.length > 0 &&
                      "Show Replies"}
                    {renderChildren &&
                      post.childrenIDs.length > 0 &&
                      "Hide Replies"}
                  </small>
                </h6>
              </div>
            </div>
          </div>
        </div>
        {renderReply()}
      </div>
      {renderChildren &&
        post.childrenIDs.map(
          (id) => {
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
          }
          // <Post key={id} loadThread={loadThread} post={} />
        )}
    </>
  );
};

export default Post;
