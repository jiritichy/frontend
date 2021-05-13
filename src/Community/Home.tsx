import { useState, useEffect, useRef } from "react";
import AddThread from "./AddThread";
import ThreadCard from "./ThreadCard";
import { ThreadObject } from "../Thread/Thread";
import { useParams } from "react-router-dom";

import io from "socket.io-client";
const SOCKET_SERVER: any = process.env.REACT_APP_SOCKET_SERVER;
const socket = io(SOCKET_SERVER);

const Home = () => {
  const [threads, setThreads] = useState<string[]>([]);
  const server = process.env.REACT_APP_API_SERVER;
  const { communityName } = useParams<{ communityName: string }>();
  const [error, setError] = useState("");

  // stateRef.current = threads;

  useEffect(() => {
    let mounted = true;
    (async () => {
      const threads = await fetch(server + "getThreads/" + communityName);
      const jsoned = await threads.json();
      if ("error" in jsoned) {
        setError("Sorry! this page doesn't exist.");
        return;
      }
      if (!mounted) {
        return;
      }
      if (mounted) {
        setError("");
        setThreads(jsoned.threads);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [communityName]);

  // load all the posts for given thread
  useEffect(() => {
    let mounted = true;
    // temp socket io
    socket.connect();
    socket.emit("onCommunity", communityName);
    socket.on("newThread", (newThread: ThreadObject) => {
      if (mounted) {
        setThreads((current) => {
          if (!current.includes(newThread._id)) {
            return [...current, newThread._id];
          }
          return current;
        });
      }
    });

    socket.on("deletedThread", (threadID: string) => {
      if (mounted) {
        setThreads((current) => current.filter((x) => x !== threadID));
      }
    });

    // cleanup
    return () => {
      socket.disconnect();
      mounted = false;
    };
  }, [communityName, threads]);

  // error message
  function renderError() {
    if (error !== "") {
      return <h1 className="alert alert-danger">{error}</h1>;
    }
  }

  return (
    <div className="container">
      {error === "" &&
        threads.map((thread) => (
          <ThreadCard
            key={thread}
            threadID={thread}
            communityName={communityName}
          />
        ))}
      {renderError()}
      {error === "" && <AddThread communityName={communityName} />}
    </div>
  );
};

export default Home;
