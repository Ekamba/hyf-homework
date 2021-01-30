import React, { useContext } from "react";

import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";
import NoResult from "../pages/NoResult";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else
    return (
      <div style={userStyle}>
        <ul>
          {users.length > 0 ? (
            users.map(user => <UserItem key={user.id} user={user} />)
          ) : (
            <span>
              <NoResult />
            </span>
          )}
        </ul>
      </div>
    );
};

export default Users;
