import React from "react";
import Inline from "./inlines";

const InlinesToComponents = ({ inlines }) => {
  return inlines.map((inline, key) => {
    return inlineToComponent(inline, key);
  });
};

const inlineToComponent = (inline, key) => {
  let type = inline.type;
  switch (type) {
    case "text":
      return <Inline.Text value={inline.value} key={key} />;
    case "link":
      return <Inline.Link value={inline.value} url={inline.url} key={key} />;
    case "inline code":
      return <Inline.Code value={inline.value} key={key} />;
    case "inline description":
      return (
        <Inline.Description
          value={inline.value}
          description={inline.description}
          key={key}
        />
      );
    case "bold":
      return <Inline.Bold value={inline.value} key={key} />;
    default:
      break;
  }
};

export default InlinesToComponents;
