import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Home/UserContext";
import { useLocation, useParams, Link } from "react-router-dom";
import AdminPanel from "./Admin/AdminPanel";
// import EditCommunity from "./Admin/EditCommunity";

interface CommunityBannerObj {
  _id: string;
  communityName: string;
  description: string;
  date: string;
  admins: string[];
  creatorUsername: string;
}

const SERVER = process.env.REACT_APP_API_SERVER;

const CommunityBanner = () => {
  const defaultCommunity: CommunityBannerObj = {
    _id: "",
    admins: [],
    description: "",
    date: "",
    communityName: "",
    creatorUsername: "",
  };
  const [communityName, setCommunityName] = useState("");
  const { username }: { username: string } = useContext(UserContext);
  const [community, setCommunity] = useState<CommunityBannerObj>(
    defaultCommunity
  );
  // changes when community is edited by admin
  const [reload, setReload] = useState(false);

  const params: { communityName: string; id: string } = useParams();

  useEffect(() => {
    let mounted = true;
    (async () => {
      const resp = await fetch(SERVER + "getCommunity/" + params.communityName);
      const jsoned: CommunityBannerObj = await resp.json();
      if (!mounted) return;
      if ("error" in jsoned) {
        setCommunity(defaultCommunity);
        setCommunityName("Error.");
        return;
      }

      setCommunity(jsoned);
    })();
    if (mounted) {
      setCommunityName(params.communityName);
    }

    return () => {
      mounted = false;
    };
  }, [params.communityName, reload]);

  // renders the admin panel
  function renderAdminPanel() {
    if (community.admins.includes(username))
      return <AdminPanel community={community} setReload={setReload} />;
  }

  // returns the date to human readable format
  function msToDate() {
    const dateMS = parseInt(community.date);
    const date = new Date(dateMS).toLocaleDateString("en-AU").toString();

    return date;
  }

  return (
    <div className="container-fluid bg-info mb-3 d-flex">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-10 d-flex justify-content-between">
            <Link to={`/c/${communityName}`}>
              <h3>{communityName}</h3>
              <h6>{community.description}</h6>
            </Link>

            <h6>created {msToDate()}</h6>
          </div>
          <div className="col-lg-2">{renderAdminPanel()}</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBanner;
