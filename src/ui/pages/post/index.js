import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import "./index.css";
import meta from "../../../meta/meta.json";
import CustomarkRenderer from "../../components/markdown/renderer";
import TableOfContents from "../../components/TableOfContents";
import moment from "moment";

const Post = () => {
  const history = useHistory();
  const { postTitle } = useParams();
  const [metaData, setMetaData] = useState(null);
  const [content, setContent] = useState(null);
  const [seriesPosts, setSeriesPosts] = useState(null);
  const [TOC, setTOC] = useState(null);

  // get this post's meta data from "metaData".
  useEffect(() => {
    let foundData = meta.posts.find(post => postTitle === post.title);
    if (foundData) setMetaData(foundData);
    else {
      alert("존재하지 않는 파일입니다.");
      history.goBack();
    }
  }, [history, postTitle]);

  // after metaData is loaded, get other series of this post.
  // after metaData is loaded, get full content of this post.
  useEffect(() => {
    if (metaData != null) {
      if (metaData.series != null) {
        setSeriesPosts(
          meta.posts.filter(post => post.series === metaData.series)
        );
      }
      let path = require("../../../docs/" + metaData.file);
      fetch(path)
        .then(val => val.text())
        .then(text => setContent(extractContent(text)));
    }
  }, [metaData]);

  return (
    <div className="post-toc-wrapper">
      <div className="post-wrapper">
        <div className="post-title-wrapper">
          <span className="post-title">{postTitle}</span>
        </div>
        <div className="post-meta-data-wrapper">
          {metaData && <PostMetaData data={metaData} />}
          {seriesPosts && (
            <OtherSeriesPosts series={seriesPosts} currentPost={postTitle} />
          )}
        </div>
        <div className="renderer-wrapper">
          <CustomarkRenderer input={content} setTOC={setTOC} />
        </div>
      </div>
      {TOC != null && TOC.length > 0 && (
        <div className="toc-layout">
          <TableOfContents list={TOC} />
        </div>
      )}
    </div>
  );
};

const PostMetaData = ({ data }) => {
  return (
    <div className="post-meta-data">
      <span className="post-writer">CSH</span>
      <span className="post-email">csh_do@naver.com</span>
      <span className="post-date">{data.date}</span>
    </div>
  );
};

const OtherSeriesPosts = ({ series, currentPost }) => {
  const history = useHistory();
  let sortedList = series
    .map(post => {
      return {
        title: post.title,
        date: post.date
      };
    })
    .sort((first, second) => {
      return moment(first.date) - moment(second.date);
    })
    .map((post, key) => {
      return (
        <span
          key={key}
          className={
            post.title === currentPost
              ? "other-series-item-current"
              : "other-series-item"
          }
          onClick={() => {
            if (post.title !== currentPost) history.push("/post/" + post.title);
          }}
        >
          ({(key + 1).toString()}) {post.title}
        </span>
      );
    });
  return (
    <div className="other-series-wrapper">
      <span className="other-series-title">SERIES ▼</span>
      {sortedList}
    </div>
  );
};

const extractContent = text => {
  let indexOfDivider = text.indexOf("---");
  let endOfDivider = text.indexOf("\n", indexOfDivider);
  let content = text.substring(endOfDivider);
  return content.trim();
};

export default Post;
