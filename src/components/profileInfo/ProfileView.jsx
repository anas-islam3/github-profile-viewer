import React from "react";
import "./ProfileView.css";
import UserData from "../userData/UserData";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ProfileView = () => {
  const { state } = useLocation();

  const [checkSearch, setSearch] = useState(false);
  const [checkSearcjBtn, setSearchBtn] = useState(true);
  const [inputData, setInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [apiresponse, setApiResponse] = useState();

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
    const respons = await fetch(`https://api.github.com/users/${profileName}`);
    const data = await respons.json();
    setApiResponse(respons.ok);
    setApiData(data);
    console.log("apidaa");
  };

  const apiCalling = () => {
    apiCall(inputData);
    setInput(" ");
    if (inputData.length > 1) {
      setSearch(true);
    }
    if (apiresponse == false) {
      setSearch(true);
    }
  };

  const handalNavigate = () => {
    navigate(`/${apiData.login}`, { state: apiData });
    setSearchBtn(true);
    setInput(" ");
  };

  const handalNavigater = () => {
    setSearchBtn(true);
    navigate(`/${apiData.login}`, { state: apiData });
  };

  // console.log(apiData, "apidaa");

  console.log(state);

  return (
    <>
      <nav>
        <NavLink to="/" className="navlink">
          <h1 className="he">GVP</h1>
        </NavLink>

        <article className="login-section">
          <div className="search-section" onClick={() => handalSearch()}>
            <p className="search">search</p>
          </div>
        </article>
      </nav>

      <section className="profile-info">
        <article className="moddle-profile-info">
          <article>
            <img src={state.avatar_url} alt="" className="avt" />
            <div className="user-info">
              <h1>{state.login}</h1>

              <p className="user-login">
                <a href={`https://github.com/${state.login}`} target="blank">
                  @{state.login}
                </a>
              </p>
              <p>{state.bio}</p>
              <p>{state.location}</p>
              <p>Last Update: {state.updated_at}</p>
              <p>Member Since : {state.created_at}</p>
            </div>
          </article>
          <div className="user-followers">
            <h2 className="head2">
              <a href="https://api.github.com/users/aamir-islam/followers">
                Followers {state.followers}
              </a>{" "}
            </h2>

            <h2 className="head2">
              <a href="https://api.github.com/users/aamir-islam/following{/other_user}">
                Followings {state.following}
              </a>
            </h2>
          </div>
          <p className="company"> Company : {state.company}</p>
          <p className="company">
            {" "}
            Social Link :{" "}
            <a href={state.blog} target="blank">
              {state.blog}
            </a>{" "}
          </p>
          {/* <span>{}</span>{" "} */}
        </article>
        <UserData state={state}></UserData>
      </section>

      <section
        className={checkSearcjBtn ? " api-searching-true" : "api-searching"}
      >
        <article>
          <div className="se">
            <h1>Search</h1>
            <p onClick={() => handalClose()}>close</p>
          </div>

          <div className="se1">
            <input
              type="search"
              name=""
              id=""
              onChange={(e) => setInput(e.target.value)}
            />
            <p onClick={() => apiCalling()}>search</p>
          </div>

          {checkSearch ? (
            <div className="display-data" onClick={() => handalNavigater()}>
              <img src={apiData.avatar_url} alt="" className="display-img" />
              <div>
                <h2>{apiData.login}</h2>
                <p className="api-user">{apiData.type}</p>
              </div>
            </div>
          ) : null}
        </article>
      </section>
    </>
  );
};

export default ProfileView;
