import React from "react";
import moment from "moment";
import "moment-timezone";
import "./index.css";
import { useHistory } from "react-router-dom";

moment.tz("Asia/Seoul");

const PostList = ({ posts }) => {
  const history = useHistory();
  const onClickItem = title => {
    history.push("/post/" + title);
  };

  return (
    <div className="post-list-wrapper">
      <div className="post-list-title-wrapper">
        <span className="post-list-title">POSTS ({posts.length})</span>
      </div>
      <PostItems posts={posts} onClick={onClickItem} />
    </div>
  );
};

const PostItems = ({ posts, onClick }) => {
  let sorted = posts.sort((first, second) => {
    return moment(second.date) - moment(first.date);
  });
  return sorted.map((post, index) => (
    <PostItem
      thumbnail={post.thumbnail}
      title={post.title}
      summary={post.summary}
      date={post.date}
      onClick={onClick}
      key={index}
    />
  ));
};

const PostItem = ({ thumbnail, title, summary, date, onClick }) => {
  return (
    <div className="post-item-wrapper">
      {thumbnail && (
        <img
          className="post-item-thumbnail"
          src={thumbnail}
          alt="thumbnail"
          onClick={() => onClick(title)}
        />
      )}
      <div className="post-item-title" onClick={() => onClick(title)}>
        <span>{title}</span>
      </div>
      <div className="post-item-summary" onClick={() => onClick(title)}>
        <span>{summary}</span>
      </div>
      <div className="post-item-details">
        <span className="post-item-writer">CSH</span>
        <div className="post-item-divider" />
        <span className="post-item-date">
          {moment(date).format("YYYY-MM-DD")}
        </span>
      </div>
    </div>
  );
};

export default PostList;
