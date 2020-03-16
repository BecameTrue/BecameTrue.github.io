import React from "react";
import "./index.css";

const CategorySelector = ({ categories, setCategories }) => {
  const onClickCategory = name => {
    categories.set(name, !categories.get(name));
    setCategories(new Map(categories));
  };

  return (
    <div className="category-selector-wrapper">
      <div className="category-selector-title-wrapper">
        <span className="category-selector-title">CATEGORY FILTER</span>
      </div>
      <div className="category-items-wrapper">
        <CategoryItems
          categories={categories}
          onClickCategory={onClickCategory}
        />
      </div>
    </div>
  );
};

const CategoryItems = ({ categories, onClickCategory }) => {
  let items = [];
  categories.forEach((isActive, name) => {
    items.push(
      <CategoryItem
        value={name}
        key={name}
        isActive={isActive}
        onClick={onClickCategory}
      />
    );
  });
  return items;
};

const CategoryItem = ({ value, isActive = false, onClick }) => {
  return (
    <div
      className={isActive ? "category-item-active" : "category-item"}
      onClick={() => onClick(value)}
    >
      <span>{value}</span>
    </div>
  );
};

export default CategorySelector;
