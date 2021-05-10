import { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

interface CommunityBannerObj {
  _id: string;
  communityName: string;
  description: string;
  date: string;
  admins: [];
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
  const [community, setCommunity] = useState<CommunityBannerObj>(
    defaultCommunity
  );

  const params: { communityName: string; id: string } = useParams();

  useEffect(() => {
    let mounted = true;
    (async () => {
      const resp = await fetch(SERVER + "getCommunity/" + params.communityName);
      const jsoned: CommunityBannerObj = await resp.json();
      if ("error" in jsoned) {
        setCommunity(defaultCommunity);
        setCommunityName("Error.");
        return;
      }
      if (mounted) {
        setCommunity(jsoned);
      }
    })();
    if (mounted) {
      setCommunityName(params.communityName);
    }

    return () => {
      mounted = false;
    };
  }, [params.communityName]);

  return (
    <div className="container-fluid bg-info mb-3">
      <div className="container py-3">
        <Link to={`/c/${communityName}`}>
          <h3>{communityName}</h3>
          <h6>{community.description}</h6>
        </Link>
      </div>
    </div>
  );
};

export default CommunityBanner;
