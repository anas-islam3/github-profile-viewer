import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const Home = () => {
  const [checkSearch, setSearch] = useState(false);
  const [checkSearcjBtn, setSearchBtn] = useState(true);
  const [inputData, setInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [apiresponse, setApiResponse] = useState();
  const [demoData, setDemoData] = useState([]);

  const navigate = useNavigate();

  const handalSearch = () => {
    setSearch(false);
    setSearchBtn(false);
    setInput(" ");
  };

  const handalClose = () => {
    setSearchBtn(true);
    setInput(" ");
  };

  const apiCall = async (profileName) => {
    if (profileName !== "") {
      const respons = await fetch(
        `https://api.github.com/users/${profileName}`
      );
      setApiResponse(respons.ok);
      const data = await respons.json();
      setApiData(data);
    }
  };

  const dataCheck = async () => {
    const respons = await fetch(`https://api.github.com/users`);
    const data = await respons.json();
    setDemoData(data);
  };

  useEffect(() => {
    dataCheck();
  }, []);

  const apiCalling = () => {
    apiCall(inputData);
    // setInput(" ");
    if (inputData.length > 1) {
      setSearch(true);
    }
    if (apiData.status == 404) {
      setSearch(false);
    }
  };

  return (
    <div className="container">
      <section className="heading-container">
        <article>
          <h1>Github Profile Viewer</h1>
          <p>
            Explore GitHub and Gits profiles effortlessly, utilizing the GitHub
            REST API to retrieve comprehensive <br /> information.
          </p>
        </article>

        <article className="search">
          <div className="search-bar">
            <p className="search-icon">
              <GoSearch onClick={() => apiCalling()}></GoSearch>
            </p>
            <input
              className="input-box"
              type="search"
              value={inputData}
              id=""
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          {/* <button onClick={() => apiCalling()}>search</button> */}

          {checkSearch ? (
            <div
              className="display-data"
              onClick={() => navigate(`/${apiData.login}`, { state: apiData })}
            >
              <img src={apiData.avatar_url} alt="" className="img" />
              <p>{apiData.login}</p>
            </div>
          ) : null}
        </article>
      </section>
    </div>
  );
};

export default Home;
