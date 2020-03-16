import React from "react";
import "./index.css";

const TableOfContents = ({ list }) => {
  let Items = [];
  Items = list.map((item, key) => {
    return <TableOfContentsItem value={item.value} key={key} />;
  });

  return <div className="toc-wrapper">{Items}</div>;
};

const TableOfContentsItem = ({ value }) => {
  return (
    <a href={"#" + value} className="toc-item">
      {value}
    </a>
  );
};

export default TableOfContents;
