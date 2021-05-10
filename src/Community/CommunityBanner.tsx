import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";

interface CommunityBannerObj {
  _id: string;
  communityName: string;
  description: string;
  date: string;
  admins: [];
  creatorUsername: string;
}

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
  const location = useLocation();
  const params: { communityName: string; id: string } = useParams();

  const server = process.env.REACT_APP_API_SERVER;
  useEffect(() => {
    (async () => {
      const resp = fetch(server + "getCommunity/" + params.communityName);
    })();
    setCommunityName(params.communityName);
  }, []);

  return (
    <div className="container-fluid bg-info mb-3">
      <h1>{communityName}</h1>
    </div>
  );
};

export default CommunityBanner;
