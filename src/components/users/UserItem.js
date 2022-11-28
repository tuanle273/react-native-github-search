import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const {avatar_url, login, html_url, id, total_count} = props.user;
 
  return (
   
    <div className="card text-center">
     
      <h4>{id}</h4>
      <img
        src={avatar_url}
        className="round-img"
        alt="avatar"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <Link className="btn btn-info" to={`/user/${login}`}>More Info</Link>
    </div>
  );
};

export default UserItem;