import { PostObj } from "../Thread";
import prettyMS from "pretty-ms";

interface Props {
  post: PostObj;
}

const PostHeader = ({ post }: Props) => {
  // format date as how long ago
  const timeSince = new Date().getTime() - parseInt(post.date);
  return (
    <div className="row p-2 d-flex justify-content-between">
      <h6 className="text-white ml-1">{post.username}</h6>
      <h6>
        <small className="ml-3 text-muted">
          {prettyMS(timeSince, { compact: true })} ago
        </small>
      </h6>
    </div>
  );
};

export default PostHeader;
