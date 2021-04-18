import { useState, useEffect } from "react";
import AddThread from "./AddThread";
import ThreadCard from "./ThreadCard";

const Home = () => {
  const [threads, setThreads] = useState([]);
  const server = process.env.REACT_APP_API_SERVER;

  async function loadThreads() {
    // console.log(process.env);
    const res = await fetch(server + "getThreads");
    const jsoned = await res.json();
    setThreads(jsoned);
  }

  // TODO search for posts
  useEffect(() => {
    loadThreads();
  }, []);

  return (
    <div className="container">
      <h1 className="font-weight-bold my-3">Home page</h1>
      {threads.map((thread) => (
        <ThreadCard key={thread._id} thread={thread} />
      ))}
      <AddThread loadThreads={loadThreads} />
    </div>
  );
};

export default Home;
