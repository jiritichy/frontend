import { PostObj } from "../Thread";
import prettyMS from "pretty-ms";
import { useState, useEffect } from "react";
interface Props {
  post: PostObj;
}

const PostHeader = ({ post }: Props) => {
  const [timeSince, setTimeSince] = useState<number>(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setTimeSince(new Date().getTime() - parseInt(post.date));
    }, 1000);

    // cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // continuously update how long ago the post was made

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
