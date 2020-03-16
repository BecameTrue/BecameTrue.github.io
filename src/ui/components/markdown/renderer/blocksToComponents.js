import React from "react";
import Block from "./blocks";

const BlocksToComponents = ({ tree }) => {
  let children = tree.children;
  return children.map((child, key) => {
    return blockToComponent(child, key);
  });
};

const blockToComponent = (block, key) => {
  let type = block.type;
  switch (type) {
    case "heading":
      return (
        <Block.Heading level={block.level} value={block.value} key={key} />
      );
    case "code":
      return (
        <Block.Code language={block.language} value={block.value} key={key} />
      );
    case "divider":
      return <Block.Divider key={key} />;
    case "youtube":
      return <Block.Youtube id={block.value} key={key} />;
    case "image":
      return <Block.Image alt={block.value} src={block.src} key={key} />;
    case "paragraph":
      return <Block.Paragraph inlines={block.children} key={key} />;
    default:
      break;
  }
};

export default BlocksToComponents;
