import { useState, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { PostContext } from "../../Home/PostContext";

interface Props {
  postID: string;
  username: string;
}

const PostVotes = ({ postID, username }: Props) => {
  const [votes, setVotes] = useState<number>(0);
  const server = process.env.REACT_APP_API_SERVER;
  const [userVote, setUserVote] = useState<number>(0);
  const voteReload = useContext(PostContext).voteReload;
  const [postToReload, setPostToReload] = voteReload;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (postToReload === postID) {
        // reload post
        getVotes();
        setPostToReload(null);
      }
    }

    return () => {
      mounted = false;
    };
  }, [postToReload]);

  // get all votes on startup
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
    setUserVote(jsonedvote.vote);
  }

  /** Upvotes or downvotes post */
  async function vote(vote: string) {
    const payload = {
      postID: postID,
      vote: vote,
      username: username,
    };

    fetch(server + "upvotePost", {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
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
