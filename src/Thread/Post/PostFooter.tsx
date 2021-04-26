import { PostObj } from "../Thread";

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
  /** Hides replies from the post which was clicked */
  function toggleReplies() {
    // console.log(window.scrollY);
    setRenderChildren((current) => !current);
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
