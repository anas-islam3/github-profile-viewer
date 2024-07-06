import { useEffect, useState } from "react";

import "./Home.css";
import { useNavigate } from "react-router-dom";

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
    // console.log(data);
  };

  useEffect(() => {
    dataCheck();
  }, []);

  // console.log(demoData.map((item) => item.login));
  console.log(apiData);

  const apiCalling = () => {
    apiCall(inputData);
    setInput(" ");
    // const data = apiData.filter((item) => {
    //   if (item.login.toLowerCase().includes(inputData.toLocaleLowerCase())) {
    //     return item;
    //   }
    // });
    // console.log(data, "data");
    // console.log("hellloooo");
    if (inputData.length > 1) {
      setSearch(true);
    }
    if (apiData.status == 404) {
      setSearch(false);
    }
  };

  console.log(apiresponse);
  console.log(checkSearch);

  return (
    <>
      <nav>
        <h1>GVP</h1>
        <article className="login-section">
          <div className="search-section" onClick={() => handalSearch()}>
            <p className="search">search</p>
          </div>
        </article>
      </nav>

      <section className="github-profile-view">
        <article>
          <h1>Github Profile Viewer</h1>
          <p>
            Explore GitHub and Gist profiles effortlessly, utilizing the GitHub
            REST API to retrieve comprehensive <br /> information.
          </p>
        </article>
      </section>

      <h1 className="feature">Features</h1>

      <section className="feature-section">
        <article>
          <h1>Effortless Navigation</h1>
          <p>
            Github Profile Viewer ensures effortless navigation through GitHub
            profiles. Whether you're a seasoned open-source enthusiast or a
            curious observer, the user-friendly interface simplifies the
            exploration process.
          </p>
        </article>
        <article>
          <h1>Effortless Navigation</h1>
          <p>
            Github Profile Viewer ensures effortless navigation through GitHub
            profiles. Whether you're a seasoned open-source enthusiast or a
            curious observer, the user-friendly interface simplifies the
            exploration process.
          </p>
        </article>
        <article>
          <h1>Effortless Navigation</h1>
          <p>
            Github Profile Viewer ensures effortless navigation through GitHub
            profiles. Whether you're a seasoned open-source enthusiast or a
            curious observer, the user-friendly interface simplifies the
            exploration process.
          </p>
        </article>
        <article>
          <h1>Effortless Navigation</h1>
          <p>
            Github Profile Viewer ensures effortless navigation through GitHub
            profiles. Whether you're a seasoned open-source enthusiast or a
            curious observer, the user-friendly interface simplifies the
            exploration process.
          </p>
        </article>
        <article>
          <h1>Effortless Navigation</h1>
          <p>
            Github Profile Viewer ensures effortless navigation through GitHub
            profiles. Whether you're a seasoned open-source enthusiast or a
            curious observer, the user-friendly interface simplifies the
            exploration process.
          </p>
        </article>
        <article>
          <h1>Effortless Navigation</h1>
          <p>
            Github Profile Viewer ensures effortless navigation through GitHub
            profiles. Whether you're a seasoned open-source enthusiast or a
            curious observer, the user-friendly interface simplifies the
            exploration process.
          </p>
        </article>
      </section>

      <section className="github-profile-info">
        <h2>Read more about GPV</h2>
        <article>
          <h1>GitHub User Statistics: Unveiling the Numbers Behind the Code</h1>
          <p className="date">March 17, 2024</p>
          <p>
            Dive into the fascinating world of GitHub statistics and discover
            the numerical insights that tell the story of developers'
            contributions, popular languages, and much more. This blog post
            explores the power of data in understanding the GitHub ecosystem.
          </p>
        </article>
        <article>
          <h1>GNow You Can Use GPV With Your Acces Token</h1>
          <p className="date">March 11, 2024</p>
          <p>
            Use your access token with gpv. Just create account and use your
            access token.
          </p>
        </article>
        <article>
          <h1>Github Profile Viewer with Progressive Web App(PWA)</h1>
          <p className="date">March 3, 2024</p>
          <p>How to use Github Profile Viewer with Progressive Web App.</p>
        </article>
        <article>
          <h1>GitHub Profile Viewer Chrome Extension</h1>
          <p className="date">March 3, 2024</p>
          <p>
            This Chrome extension allows you to easily open a GitHub Profile on
            Github Profile Viewer Website.
          </p>
        </article>
        <article>
          <h1>Maximizing Github Profile Viewer: A User-Friendly Guide</h1>
          <p className="date">January 31, 2024</p>
          <p>
            Welcome to the ultimate guide on maximizing your experience with
            Github Profile Viewer. This platform, driven by Next.js and Radix
            UI, offers a user-friendly interface to explore GitHub and Gist
            profiles effortlessly. Let's dive into how you can make the most out
            of this powerful tool.
          </p>
        </article>
        <article>
          <h1>GitHub Profile Viewer: Unveiling Universal User Statistics</h1>
          <p className="date">January 31, 2024</p>
          <p>
            GitHub Profile Viewer stands out as a revolutionary platform
            dedicated to providing a comprehensive exploration of user
            statistics, transcending the limitations of individual readme files.
            Our mission is to empower users with the ability to delve into the
            coding journeys, contributions, and statistical insights of all
            GitHub users. Here's an in-depth look at how GitHub Profile Viewer
            achieves this...
          </p>
        </article>
        <article>
          <h1>GitHub Profile Viewer: A Game-Changer in Employee Recruitment</h1>
          <p className="date">January 31, 2024</p>
          <p>
            In the realm of employee recruitment, gaining valuable insights into
            the coding skills, contributions, and open-source involvement of job
            applicants is crucial. Github Profile Viewer emerges as a
            game-changer for companies looking to streamline their hiring
            process and make informed decisions.
          </p>
        </article>
        <article>
          <h1>Effortless GitHub Exploration with Github Profile Viewer</h1>
          <p className="date">January 31, 2024</p>
          <p>
            GitHub Profile Viewer redefines the exploration of developers'
            GitHub profiles, providing a seamless and user-friendly interface.
            This platform, powered by the dynamic duo of Next.js and Radix UI,
            transforms the way you navigate the realm of open-source
            contributions.
          </p>
        </article>
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
            <div
              className="display-data"
              onClick={() => navigate(`/${apiData.login}`, { state: apiData })}
            >
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

export default Home;
