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
  const [userVote, setUserVote] = useState<number>(0);
  let upColor = "";
  let downColor = "";

  useEffect(() => {
    getVotes();
  }, []);

  // should ensure vote colours are loaded
  useEffect(() => {
    getVotes();
  }, [username]);

  async function getVotes() {
    if (username === "") return;

    const resp = await fetch(server + "getPostVotes", {
      body: JSON.stringify({ postID: postID }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const jsoned = await resp.json();
    setVotes(parseInt(jsoned.votes));

    // set colour and upvote
    const usersVote = await fetch(server + "getUsersVotes", {
      body: JSON.stringify({ postID: postID, username: username }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const jsonedvote = await usersVote.json();
    // console.log(`set user vote to ${jsonedvote.vote}`);
    setUserVote(jsonedvote.vote);
  }

  /** Upvotes or downvotes post */
  async function vote(vote: string) {
    // TODO reload post after vote

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
        {userVote === 1 && (
          <IoIosArrowUp
            style={{ cursor: "pointer", color: "orange" }}
            onClick={(e) => vote("1")}
          />
        )}
        {userVote !== 1 && (
          <IoIosArrowUp
            style={{ cursor: "pointer" }}
            onClick={(e) => vote("1")}
          />
        )}

        <h5 className="text-white text-center" style={{ marginBottom: "0" }}>
          {votes}
        </h5>
        {userVote === -1 && (
          <IoIosArrowDown
            style={{ cursor: "pointer", color: "blue" }}
            onClick={(e) => vote("-1")}
          />
        )}
        {userVote !== -1 && (
          <IoIosArrowDown
            style={{ cursor: "pointer" }}
            onClick={(e) => vote("-1")}
          />
        )}
      </IconContext.Provider>
    </div>
  );
};

export default PostVotes;
