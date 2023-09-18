import React, { Component } from "react";

import { useState } from "react";

const NewsElement = (props)=>{

  
    let { title, description, imageUrl, url, author, date, source } =
      props;
    return (
      <div className={`card `} style={{ width: "18rem" }}>
        
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/30/full/1664502133-6033.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className={`card-body bg-${props.MODE}  text-${props.TEXT}`}>
          <h5 className="card-title">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" 
          style={{left : "90%" , zIndex : "0" 
          }}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              by {author ? author : "Unknown"} at {new Date(date).toUTCString()}{" "}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-sm btn-danger">
            Read More
          </a>
        </div>
      </div>
    );

}

export default NewsElement;
