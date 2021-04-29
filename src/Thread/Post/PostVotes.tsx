import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface Props {
  postID: string;
  username: string;
}

const PostVotes = ({ postID, username }: Props) => {
  const [votes, setVotes] = useState<number>(0);
  const server = process.env.REACT_APP_API_SERVER;

  useEffect(() => {
    getVotes();
  }, []);

  async function getVotes() {
    const resp = await fetch(server + "getPostVotes", {
      body: JSON.stringify({ postID: postID }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const jsoned = await resp.json();
    setVotes(parseInt(jsoned.votes));
  }

  /** Upvotes or downvotes post */
  async function vote(vote: string) {
    // TODO reload post after vote
    console.log(username);
    console.log("vote was " + vote);

    const payload = {
      postID: postID,
      vote: vote,
      username: username,
    };

    const resp = await fetch(server + "upvotePost", {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    getVotes();
  }

  // TODO change hardcoded votes
  return (
    <div className="d-flex flex-column mx-2">
      <IconContext.Provider value={{ size: "2em" }}>
        <IoIosArrowUp
          style={{ cursor: "pointer" }}
          onClick={(e) => vote("1")}
        />
        <h5 className="text-white text-center" style={{ marginBottom: "0" }}>
          {votes}
        </h5>
        <IoIosArrowDown
          style={{ cursor: "pointer" }}
          onClick={(e) => vote("-1")}
        />
      </IconContext.Provider>
    </div>
  );
};

export default PostVotes;
