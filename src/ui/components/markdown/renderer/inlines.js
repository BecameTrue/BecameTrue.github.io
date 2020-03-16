import React from "react";
import ReactTooltip from "react-tooltip";
import "./inlines.css";

const Text = ({ value }) => {
  return <span className="inline-text">{value}</span>;
};

const Bold = ({ value }) => {
  return <span className="inline-bold">{value}</span>;
};

const Link = ({ value, url }) => {
  return (
    <a className="inline-link" href={url}>
      {value}
    </a>
  );
};

const Code = ({ value }) => {
  return <span className="inline-code">{value}</span>;
};

const Description = ({ value, description }) => {
  return (
    <span className="inline-description" data-tip={description}>
      {value}
      <ReactTooltip place="right" className="inline-tooltip" />
    </span>
  );
};

export default {
  Text,
  Bold,
  Link,
  Code,
  Description
};
