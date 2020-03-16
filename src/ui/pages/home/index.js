import React, { useState, useEffect } from "react";
import CategorySelector from "../../components/categorySelector";
import PostList from "../../components/PostList";
import "./index.css";
import meta from "../../../meta/meta.json";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const query = useQuery();
  const [posts, setPosts] = useState(meta.posts);
  const [search, setSearch] = useState(query.get("search"));
  const [categories, setCategories] = useState(
    new Map(
      meta.categories.map(c => {
        return [c, false];
      })
    )
  );

  useEffect(() => {
    if (search !== query.get("search")) setSearch(query.get("search"));
  }, [query, search]);

  useEffect(() => {
    let found = meta.posts;
    let activeCategories = [];
    categories.forEach((isActive, name) => {
      if (isActive) activeCategories.push(name);
    });
    if (search != null) {
      found = found.filter(
        post => post.title.includes(search) || post.summary.includes(search)
      );
    }
    if (activeCategories.length > 0) {
      found = found.filter(post => {
        return activeCategories.includes(post.category);
      });
    }
    setPosts(found);
  }, [categories, search]);

  return (
    <div className="home-wrapper">
      <CategorySelector categories={categories} setCategories={setCategories} />
      {posts != null && posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <NothingToDisplay />
      )}
    </div>
  );
};

const NothingToDisplay = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        padding: "64px 0"
      }}
    >
      <span>Nothing to display</span>
    </div>
  );
};

export default Home;
