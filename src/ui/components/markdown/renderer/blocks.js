import React from "react";
import "./blocks.css";
import InlinesToComponents from "./inlinesToComponents";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

const Heading = ({ level, value }) => {
  const fontSizes = [
    { fontSize: "32px" },
    { fontSize: "28px" },
    { fontSize: "24px" },
    { fontSize: "20px" },
    { fontSize: "16px" },
    { fontSize: "12px" }
  ];
  return (
    <div className="markdown-heading-wrapper" id={value}>
      <span
        className="markdown-heading-text"
        style={fontSizes[level.length - 1]}
      >
        {value}
      </span>
    </div>
  );
};

const Code = ({ language, value }) => {
  return (
    <div className="markdown-code-block-wrapper">
      {/* <p>Language : {language} </p> */}
      <SyntaxHighlighter
        language={language}
        style={vs}
        customStyle={{
          backgroundColor: "#f8f9fa",
          border: "none",
          fontFamily: '"Roboto Mono", "Noto Sans KR", monospace !important'
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

const Divider = () => {
  return <div className="markdown-divider" />;
};

const Youtube = ({ id }) => {
  const allow =
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  return (
    <div className="markdown-youtube-wrapper">
      <iframe
        title={id}
        src={"https://www.youtube.com/embed/" + id}
        frameBorder="0"
        allow={allow}
        allowFullScreen
      />
    </div>
  );
};

const Image = ({ alt, src }) => {
  return <img className="markdown-image" alt={alt} src={src} />;
};

const Paragraph = ({ inlines }) => {
  return (
    <div className="markdown-paragraph-wrapper">
      <InlinesToComponents inlines={inlines} />
    </div>
  );
};

export default {
  Heading,
  Divider,
  Code,
  Youtube,
  Image,
  Paragraph
};
