import { useEffect, useState } from "react";
import Fuzzy from "fuzzy";
import { Link } from "react-router-dom";

interface CommunityStub {
  _id: string;
  communityName: string;
  description: string;
}

const Mainpage = () => {
  const [communitites, setCommunities] = useState<CommunityStub[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [renderedCommunities, setRenderedCommunities] = useState<string[]>([]);
  const server = process.env.REACT_APP_API_SERVER;

  useEffect(() => {
    // fetch communities
    (async () => {
      const resp = await fetch(`${server}/getCommunities`);
      const jsoned = await resp.json();

      setCommunities(jsoned);
      setRenderedCommunities(
        jsoned.map((community: CommunityStub) => community.communityName)
      );
    })();
    searchCommunities("");
  }, []);

  /** Searches the communities for the given search term. */
  function searchCommunities(searchText: string) {
    setSearchValue(searchText);
    if (searchText === "") {
      setRenderedCommunities(
        communitites.map((community) => community.communityName)
      );
      setError("");
      return;
    }
    const results = Fuzzy.filter(searchText, communitites, {
      extract: (item) => item.communityName,
    });
    setRenderedCommunities(results.map((item) => item.string));

    // no matches
    if (results.length === 0) {
      setError("No matching communities could be found!");
    } else {
      setError("");
    }
  }

  /** Renders the error message */
  function renderError() {
    if (error !== "") {
      return <h3 className="alert alert-danger">{error}</h3>;
    }
  }

  return (
    <div className="container mt-5 text-center">
      <h1>this is main page</h1>
      <p>Search for a community or click on one to visit it</p>
      <div>
        <input
          type="text"
          className="w-75"
          onChange={(e) => searchCommunities(e.target.value)}
          value={searchValue}
        ></input>
      </div>
      <div className="row d-flex mt-4 flex-row text-left mx-5">
        {renderedCommunities.map((community) => (
          <Link key={community} to={"/c/" + community}>
            <div className="mx-2 ">
              <h4>{community}</h4>
            </div>
          </Link>
        ))}
      </div>
      {renderError()}
    </div>
  );
};

export default Mainpage;
