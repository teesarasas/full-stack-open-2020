import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import UserContext from "../UserContext";

const Blog = ({ blog, handleLike }) => {
  const [showDetails, setShowDetails] = useState(false);
  // const user = useContext(UserContext);

  // const belongsToUser = blog.user.username === user.username;

  const toggleShowDetails = event => {
    const isBlogLink = event.target.classList.contains("js-blogLink");
    const isLikeButton = event.target.classList.contains("js-likeButton");
    if (!isBlogLink && !isLikeButton) {
      setShowDetails(!showDetails);
    }
  };

  const displayBlog = () => {
    if (!showDetails) {
      return <span className="c-blog__title">{blog.title}</span>;
    }

    return (
      <>
        <span className="c-blog__title">{blog.title}</span>
        <span className="c-blog__author"> — {blog.author}</span>
        <a
          className="c-blog__link js-blogLink"
          href={blog.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit Blog
        </a>
        <div className="c-blog__likes">
          <span className="c-blog__likes-txt">
            {blog.likes} {blog.likes !== 1 ? "Likes" : "Like"}
          </span>
          <div className="c-blog__like-button">
            <button
              onClick={event => handleLike(event, blog.id)}
              className="c-btn c-btn--info js-likeButton"
            >
              Like
            </button>
          </div>
        </div>
        <span className="c-blog__user">
          Added by:
          <FontAwesomeIcon className="c-blog__usericon" icon={faUser} />
          {blog.user.name}
        </span>
      </>
    );
  };

  return (
    <div onClick={event => toggleShowDetails(event)} className="c-blog">
      {displayBlog()}
    </div>
  );
};

export default Blog;
