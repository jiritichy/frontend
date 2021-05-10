import { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import OverlayComponent from "../GenericComponents/OverlayComponent";

export interface NewCommunity {
  /** The user who created the community. */
  creatorUsername: string;

  /** The community's description. */
  description: string;

  /** The date the community was created. */
  date: string;

  /** The community's name. */
  communityName: string;

  /** Admin users who can moderate the community. */
  admins: string[];
}

export interface Community extends NewCommunity {
  _id: string;
}

const MAX_THREAD_TITLE_LENGTH = 150;
const MAX_THREAD_CONTENT_LENGTH = 5000;

interface Props {
  addCommunity: (community: Community) => void;
}

const AddCommunity = ({ addCommunity }: Props) => {
  const server = process.env.REACT_APP_API_SERVER;

  const [addCommunityOn, setAddCommunityOn] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [communityName, setCommunityName] = useState<string>("");
  const { username } = useContext(UserContext);

  // the error message if needed
  const [status, setStatus] = useState<string>("");

  // /** Checks if the thread is valid. */
  // function checkThreadValidity() {
  //   if (content.length > MAX_THREAD_CONTENT_LENGTH) {
  //     setStatus("Exceeded content length!");
  //     return false;
  //   }

  //   if (title.length > MAX_THREAD_TITLE_LENGTH) {
  //     setStatus("Exceeded title length!");
  //     return false;
  //   }

  //   setStatus("");
  //   return true;
  // }

  /** Makes a post to the server */
  async function makeCommunity() {
    // error checking
    // if (!checkThreadValidity()) return;
    const newCommunity: NewCommunity = {
      admins: [],
      communityName: communityName,
      creatorUsername: username,
      date: new Date().getTime().toString(),
      description: description,
    };
    try {
      const result = await fetch(server + "addCommunity", {
        body: JSON.stringify(newCommunity),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const jsoned = await result.json();
      if (!("_id" in jsoned)) {
        // it failed
        setStatus(
          "Sorry the community name as already been taken. Please try again!"
        );
        console.log("failed");
        setAddCommunityOn((current) => !current);
        return;
      }
      setStatus("");
      addCommunity(jsoned);
      setAddCommunityOn((current) => !current);
    } catch (error) {
      // TODO error handling
    }
  }

  /** The error message to be displayed. */
  function errorMessage() {
    if (status.length === 0) return;

    return <h5 className="alert alert-danger mt-2">{status}</h5>;
  }

  /** Renders the input form if needed */
  function inputForm() {
    if (addCommunityOn) {
      return (
        <OverlayComponent>
          <h3>Create a community</h3>
          <label className="text-left mt-2">Community Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCommunityName(e.target.value)}
          />
          <label className="mt-4 text-left">Description</label>
          <textarea
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            rows={8}
          />
          <div className="d-flex justify-content-end mt-3">
            <button
              onClick={() => setAddCommunityOn((current) => !current)}
              className="btn btn-primary mt-2 mr-2"
            >
              Cancel
            </button>
            <button
              onClick={makeCommunity}
              className="btn btn-outline-primary mt-2"
            >
              Submit
            </button>
          </div>
        </OverlayComponent>
      );
    }

    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => setAddCommunityOn((current) => !current)}
        >
          Add New Community
        </button>
        {errorMessage()}
      </div>
    );
  }

  return <div className="mb-5">{inputForm()}</div>;
};

export default AddCommunity;
