import { PostObj } from "../Thread";

interface Props {
  post: PostObj;
  renderChildren: boolean;
  setRenderReplyForm: React.Dispatch<React.SetStateAction<boolean>>;
  setRenderChildren: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostFooter = ({
  post,
  renderChildren,
  setRenderReplyForm,
  setRenderChildren,
}: Props) => {
  /** Hides replies from the post which was clicked */
  function toggleReplies() {
    // console.log(window.scrollY);
    setRenderChildren((current) => !current);
    return;
  }

  return (
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
              {!renderChildren && post.childrenIDs.length > 0 && "Show Replies"}
              {renderChildren && post.childrenIDs.length > 0 && "Hide Replies"}
            </small>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
