import { PostObj } from "../Thread";

interface Props {
  post: PostObj;
}

const PostHeader = ({ post }: Props) => {
  return (
    <div className="row p-2 d-flex justify-content-between">
      <h6 className="text-white ml-1">{post.username}</h6>
      <h6>
        <small className="ml-3 text-muted">{post.date}</small>
      </h6>
    </div>
  );
};

export default PostHeader;
