import { PostObj } from "./Thread";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";

interface Props {
  post: PostObj;
  threadID: string;
  loadThread: () => void;
}

// TODO format date properly

const Post = ({ post, threadID, loadThread }: Props) => {
  // to find difference in date
  // const currentTime = new Date().getTime();

  // determines if the reply form will be rendered
  const [renderReplyForm, setRenderReplyForm] = useState<Boolean>(false);

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
        <div
          onClick={(e) => setRenderReplyForm((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          <h6 className="text-muted">
            <small>Reply</small>
          </h6>
        </div>
      </div>
      {renderReply()}
    </>
  );
};

export default Post;
