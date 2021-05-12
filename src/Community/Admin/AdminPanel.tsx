import { useState } from "react";
import OverlayComponent from "../../GenericComponents/OverlayComponent";
import { Community } from "../../Home/AddCommunity";
import { BsPlusSquare } from "react-icons/bs";
import { useEffect } from "react";

interface Props {
  community: Community;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

const SERVER = process.env.REACT_APP_API_SERVER;

const AdminPanel = ({ community, setReload }: Props) => {
  const [renderEditCommunity, setRenderEditCommunity] = useState<boolean>(
    false
  );
  const [newAdmins, setNewAdmins] = useState<string[]>([]);
  const [newDescription, setNewDescription] = useState<string>(
    community.description
  );
  const [newAdminsString, setNewAdminsString] = useState<string>("");

  useEffect(() => {
    setNewAdmins(community.admins);
    setNewDescription(community.description);
  }, [community]);

  async function submit() {
    const payload = {
      description: newDescription,
      communityName: community.communityName,
      admins: newAdmins,
    };
    const result = await fetch(SERVER + "updateCommunity", {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setRenderEditCommunity(false);
    setReload((current) => !current);
  }

  // renders the save and cancel buttons in the overlay form
  function renderCancelSaveButtons() {
    return (
      <div className="d-flex justify-content-end mt-3">
        <button
          onClick={() => setRenderEditCommunity((current) => !current)}
          className="btn btn-primary mt-2 mr-2"
        >
          Cancel
        </button>
        <button
          onClick={submit}
          // todo error checking
          // onClick={makeCommunity}
          className="btn btn-outline-primary mt-2"
        >
          Save
        </button>
      </div>
    );
  }

  // adds new admin locally
  function addNewAdmin() {
    const newAdmin = newAdminsString;
    if (newAdmin === "") {
      return;
    }
    setNewAdmins((current) => {
      if (!current.includes(newAdmin)) return [...current, newAdmin];
      return current;
    });
    setNewAdminsString("");
  }

  // removes the clicked on admin
  function removeAdmin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const adminToBeRemoved = e.currentTarget.innerText;
    setNewAdmins((current) => {
      if (!current.includes(adminToBeRemoved)) return current;
      let copy = [...current];
      const index = copy.indexOf(adminToBeRemoved);
      copy.splice(index, 1);
      return copy;
    });
  }

  function renderEditAdminsForm() {
    return (
      <div>
        <label className="mt-3 text-left">Admins</label>
        <div className="container">
          <div className="border border-secondary p-3 d-flex row">
            {newAdmins.map((admin) => (
              <button
                className="rounded mx-1 btn-outline-danger"
                key={admin}
                onClick={(e) => removeAdmin(e)}
              >
                {admin}
              </button>
            ))}
          </div>
        </div>
        <label className="mt-3 text-left">Add new admin</label>
        <div className="d-flex">
          <input
            className="form-control w-50"
            style={{ minWidth: "200px" }}
            onChange={(e) => setNewAdminsString(e.target.value)}
            value={newAdminsString}
          />
          <BsPlusSquare
            onClick={addNewAdmin}
            className="ml-2 "
            style={{ cursor: "pointer" }}
            size={47}
          />
        </div>
      </div>
    );
  }
  function editCommunity() {
    if (!renderEditCommunity) return;
    return (
      <OverlayComponent>
        <h3>Edit Community</h3>
        <div>
          <label className="mt-3 text-left">Description</label>
          <textarea
            className="form-control"
            onChange={(e) => setNewDescription(e.target.value)}
            rows={8}
            value={newDescription}
          />
        </div>
        {renderEditAdminsForm()}
        {renderCancelSaveButtons()}
      </OverlayComponent>
    );
  }

  return (
    <div className="d-flex flex-column">
      <h4>Admin panel</h4>
      <button
        className="btn btn-primary p-1 mb-2"
        onClick={() => setRenderEditCommunity((current) => !current)}
      >
        Edit community
      </button>
      {editCommunity()}
    </div>
  );
};

export default AdminPanel;
