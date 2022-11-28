import React, { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = (props) => {

  const { loginId } = useParams();
      useEffect(()=> {
          props.getUser(loginId);
      }, []);
    
     const {
    name,
    login,
    company,
    location,
    email,
    public_repos,
    followers,
    following,
    avatar_url,
    html_url,
    bio,
    blog,
    webiste,
         public_gists,
    id
    } = props.user;
    
  return (
      <div>
          <Fragment>
              <Link to={'/'} className="btn btn-danger">
                  Back To Home
              </Link>
              <div className="card">
                  <div className="card-body">
                      <img src={avatar_url} className="round-img" alt="avatar"
                          style={{ width: "100px" }} />
                      <h1>User name: {login}</h1>
                      <p>Id: {id}</p>
                      <p>{location}</p>
         <ul>
    
          <li>{company && <Fragment>Company: {company}</Fragment>}</li>
          <li>{webiste && <Fragment>Website: {webiste}</Fragment>}</li>
          <li>{name && <Fragment>Full Name: {name}</Fragment>}</li>
          <li>{email && <Fragment>Email: {email}</Fragment>}</li>
          <li>{blog && <Fragment>Blog: {blog}</Fragment>}</li>
        </ul>              
        <div className="card card-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-dark">Public repos: {public_repos}</div>
        <div className="badge badge-light">Public gists: {public_gists}</div>
                      </div>
             <Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>
    
        <a href={html_url} className="btn btn-outline-primary">
          Visit Github Profile
        </a>
                  </div>
                  </div>
      
     
       
      </Fragment>
    
    </div>
  );
};

export default User;