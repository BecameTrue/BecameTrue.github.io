import React, { useState, useEffect } from "react";
import CustomarkEngine from "./customarkEngine";
import BlocksToComponents from "./blocksToComponents";

const CustomarkRenderer = ({ input, setTOC }) => {
  const [parsed, setParsed] = useState(null);

  useEffect(() => {
    if (input != null) {
      const customark = CustomarkEngine();
      const parsedTree = customark.parse(input);
      setTOC(parsedTree.children.filter(child => child.type === "heading"));
      setParsed(parsedTree);
    }
  }, [input, setTOC]);

  return <RenderTree tree={parsed} />;
};

const RenderTree = ({ tree }) => {
  return tree != null ? (
    <BlocksToComponents tree={tree} />
  ) : (
    <NothingToDisplay />
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

export default CustomarkRenderer;
