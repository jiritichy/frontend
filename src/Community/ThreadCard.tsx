import { useHistory, Link } from "react-router-dom";
import { ThreadObject, defaultThread } from "../Thread/Thread";
import { useState, useEffect } from "react";
import prettyMS from "pretty-ms";
interface Props {
  threadID: string;
  communityName: string;
}

const CONTENT_MAX_LEN = 500;

const ThreadCard = ({ threadID, communityName }: Props) => {
  const history = useHistory();
  // const [content, setContent] = useState<string>("");
  // const [title, setTitle] = useState<string>("");
  const [thread, setThread] = useState<ThreadObject>(defaultThread);
  const server = process.env.REACT_APP_API_SERVER;

  /** Truncates text if necessary */
  function truncatedText() {
    if (thread.content.length > CONTENT_MAX_LEN) {
      return thread.content.substring(1, 500) + "...";
    }

    return thread.content;
  }

  useEffect(() => {
    let mounted = true;
    (async () => {
      const resp = await fetch(server + "/getThread/" + threadID);
      const jsoned = await resp.json();
      // console.log(jsoned);
      if (mounted) {
        setThread(jsoned);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  function getTime() {
    if (!thread.date) {
      return;
    }
    const timeSince = new Date().getTime() - parseInt(thread.date);

    return prettyMS(timeSince, { compact: true, verbose: true }) + " ago";
  }

  // TODO limit post length, client side and server side
  return (
    <Link to={`/c/${communityName}/${threadID}`}>
      <div className="border border-primary rounded my-2 p-2">
        <div className="ml-2">
          <small className="">
            Posted by: {thread.username} {getTime()}
          </small>
          <h4>{thread.title}</h4>
          <p style={{ wordWrap: "break-word" }}>{truncatedText()}</p>
        </div>
      </div>
    </Link>
  );
};

export default ThreadCard;
