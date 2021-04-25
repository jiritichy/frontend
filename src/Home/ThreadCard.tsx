import { useHistory, Link } from "react-router-dom";
import { ThreadObject } from "../Thread/Thread";

interface Props {
  thread: ThreadObject;
}

const CONTENT_MAX_LEN = 500;

const ThreadCard = ({ thread }: Props) => {
  const id = thread._id;
  const title = thread.title;
  const content = thread.content;
  const history = useHistory();

  /** Truncates text if necessary */
  function truncatedText() {
    if (content.length > CONTENT_MAX_LEN) {
      return content.substring(1, 500) + "...";
    }

    return content;
  }

  // TODO limit post length
  return (
    <Link to={`/thread/${id}`}>
      <div className="border border-primary rounded my-2 p-2">
        <h4>{title}</h4>
        <p style={{ wordWrap: "break-word" }}>{truncatedText()}</p>
      </div>
    </Link>
  );
};

export default ThreadCard;
