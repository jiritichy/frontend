import { PostObj } from "../Thread";

interface Props {
  post: PostObj;
}

const PostBody = ({ post }: Props) => {
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
    <>
      <div className="row pl-2">
        <div className="text-white ml-1">
          {post.deleted ? (
            <h6 className="text-danger">[Deleted]</h6>
          ) : (
            <p style={{ wordBreak: "break-word" }}>{post.content}</p>
          )}
        </div>
      </div>
      {renderImage()}
    </>
  );
};

export default PostBody;
