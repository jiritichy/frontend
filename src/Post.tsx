import { PostObj } from "./Thread";

interface Props {
  post: PostObj;
}

// TODO format date properly

const Post = ({ post }: Props) => {
  return (
    <div className="container my-3 border border-secondary rounded bg-dark">
      <div className="row p-2">
        {<p className="text-white">{post.content}</p>}
      </div>
      <div className="row pl-2">
        {<h6 className="text-white">-{post.username}</h6>}
        {<h6 className="ml-3 text-white">{post.date}</h6>}
      </div>
    </div>
  );
};

export default Post;
