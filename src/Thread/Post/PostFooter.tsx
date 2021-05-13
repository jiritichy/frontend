import { PostObj } from "../Thread";
import { UserContext } from "../../Home/UserContext";
import { useContext } from "react";

import { CommunityContext } from "../CommunityContext";
import { CommunityBannerObj } from "../../Community/CommunityBanner";
interface Props {
  post: PostObj;
  renderChildren: boolean;
  setRenderReplyForm: React.Dispatch<React.SetStateAction<boolean>>;
  setRenderChildren: React.Dispatch<React.SetStateAction<boolean>>;
  deletePost: () => void;
}

const PostFooter = ({
  post,
  renderChildren,
  setRenderReplyForm,
  setRenderChildren,
  deletePost,
}: Props) => {
  const username = useContext(UserContext).username;
  const server = process.env.REACT_APP_API_SERVER;
  const community: CommunityBannerObj = useContext(CommunityContext);

  /** Hides the post for the user. */
  async function hidePostServerSide() {
    const resp = await fetch(server + "hidePost", {
      body: JSON.stringify({
        username: username,
        postID: post.id,
        hidden: renderChildren,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const jsoned = await resp.json();
    // console.log(jsoned);
  }

  /** Hides replies from the post which was clicked */
  function toggleReplies() {
    setRenderChildren((current) => !current);
    hidePostServerSide();
    // console.log(username);
    return;
  }

  /** the reply button */
  function replyButton() {
    return (
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
    );
  }

  /** the show / hide reply button */
  function showHideReplyButton() {
    // dont render if no children
    if (post.childrenIDs.length === 0) {
      return null;
    }

    return (
      <div className={"ml-3"}>
        <h6 className="text-muted">
          <small style={{ cursor: "pointer" }} onClick={(e) => toggleReplies()}>
            {!renderChildren && "Show Replies"}
            {renderChildren && "Hide Replies"}
          </small>
        </h6>
      </div>
    );
  }

  /** the delete post button */
  function deletePostButton() {
    // only render if post isn't already deleted
    if (post.deleted) {
      return;
    }

    // only delete your own posts // TODO fix server side
    if (post.username !== username && !community.admins.includes(username)) {
      return;
    }

    return (
      <div className={"ml-3"}>
        <h6 className="text-muted">
          <small style={{ cursor: "pointer" }} onClick={(e) => deletePost()}>
            Delete Post
          </small>
        </h6>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col d-flex">
        {replyButton()}
        {showHideReplyButton()}
        {deletePostButton()}
      </div>
    </div>
  );
};

export default PostFooter;
