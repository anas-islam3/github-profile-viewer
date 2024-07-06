import React, { useEffect, useState } from "react";
import "./UserData.css";

const UserData = ({ state }) => {
  const [reposData, setReposData] = useState([]);
  const [languageCount, setLanguageCount] = useState([]);
  const [pgCount1, setPgCount1] = useState(0);
  const [pgCount2, setPgCount2] = useState(6);
  const [count, setCount] = useState(1);

  const apiRepos = async () => {
    const respons = await fetch(
      `https://api.github.com/users/${state.login}/repos`
    );
    const data = await respons.json();
    setReposData(data);
  };

  // const repos = () => {
  //   const count = reposData.map((item) => item.name);
  //   setRepoCount(count);
  // };

  // repos();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the indices of the items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reposData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(reposData.length / itemsPerPage);

  // Handlers for changing pages
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Create an array of page numbers for navigation
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // hello

  // const handalPgCount1 = () => {
  //   if (pgCount1 == 0) {
  //     setPgCount1(0);
  //     setPgCount2(6);
  //     setCount(1);
  //   }
  //   if (pgCount1 > 0) {
  //     setPgCount2(pgCount2 - 6);
  //     setCount(count - 1);
  //     setPgCount1(pgCount1 - 6);
  //   }
  // };
  // const handalPgCount2 = () => {
  //   if (pgCount2 - reposData.length >= 5) {
  //     setPgCount1(pgCount1 + 6);
  //     setPgCount2(pgCount2 + 6);
  //     setCount(count + 1);
  //   }
  //   if (pgCount2 - reposData.length >= 6) {
  //     setCount(count);
  //     setPgCount1(pgCount1);
  //     setPgCount2(pgCount2);
  //   }
  // };

  const languageData = () => {
    const data = reposData.slice(2).map((item) => item.language);
    setLanguageCount(data);
  };

  useEffect(() => {
    apiRepos();
    languageData();
  }, [state]);

  // https://api.github.com/users/aamir-islam/repos

  return (
    <>
      <section className="user-data">
        <h1 className="same-color">Profile Statistics</h1>

        <table className="user-data-table">
          <tbody>
            <tr>
              <td>Total Repositories</td>
              <td>{state.public_repos}</td>
            </tr>
            <tr>
              <td>Total Gists</td>
              <td>{state.public_gists}</td>
            </tr>
            <tr>
              <td>Total Stars</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Total Forks</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total Topics</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        {/* {languageCount.map((item) => (
          <article className="user-repo" key={item.id}>
            <h1>{item}</h1>
            <h1>hello</h1>
          </article>
        ))} */}

        <section className="display-repos">
          <h1 className="same-color">Most Starred Repository</h1>

          {currentItems.map((item) => (
            <article className="user-repo" key={item.id}>
              <h2>
                <a href={item.html_url} target="blank" className="anchor-same">
                  {item.name}
                </a>
              </h2>
              <p className="same-color">
                Language : <span className="mid"> {item.language} </span>
              </p>
              <p className="same-color"> Created at : {item.created_at}</p>
              <p className="same-color">Last update :{item.updated_at}</p>
            </article>
          ))}
        </section>

        <section className="pagination">
          <p className="pg-same" onClick={() => goToPreviousPage()}>
            {" "}
            &#60;
          </p>
          <p className="pg-number">{currentPage}</p>
          <p className="pg-same" onClick={() => goToNextPage()}>
            &#62;
          </p>
        </section>
      </section>
    </>
  );
};

export default UserData;
