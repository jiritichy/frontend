import { useHistory, Link } from "react-router-dom";
import { ThreadObject } from "../Thread/Thread";
import { useState, useEffect } from "react";

interface Props {
  threadID: string;
  communityName: string;
}

const CONTENT_MAX_LEN = 500;

const ThreadCard = ({ threadID, communityName }: Props) => {
  const history = useHistory();
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const server = process.env.REACT_APP_API_SERVER;

  /** Truncates text if necessary */
  function truncatedText() {
    if (content.length > CONTENT_MAX_LEN) {
      return content.substring(1, 500) + "...";
    }

    return content;
  }

  useEffect(() => {
    let mounted = true;
    (async () => {
      const resp = await fetch(server + "/getThread/" + threadID);
      const jsoned = await resp.json();
      if (mounted) {
        setContent(jsoned.content);
        setTitle(jsoned.title);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // TODO limit post length, client side and server side
  return (
    <Link to={`/c/${communityName}/${threadID}`}>
      <div className="border border-primary rounded my-2 p-2">
        <h4>{title}</h4>
        <p style={{ wordWrap: "break-word" }}>{truncatedText()}</p>
      </div>
    </Link>
  );
};

export default ThreadCard;
