import React from "react";

const UserItem = props => {
  const { avatar_url, login, html_url } = props
 
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt="avatar"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <a className="btn btn-primary btn-sm" href={html_url}>
        More info
      </a>
    </div>
  );
};


export default UserItem;