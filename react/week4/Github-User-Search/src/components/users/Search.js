import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { searchUsers } = githubContext;
  const keyUphandler = e => {
    searchUsers(e.target.value);
  };
  return (
    <div>
      <input
        type="search"
        name="search"
        placeholder="Search for user"
        className="form-control my-5"
        onKeyUp={keyUphandler}
      />
    </div>
  );
};

export default Search;
