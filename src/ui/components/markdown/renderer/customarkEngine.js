import Customark from "../parser";

const CustomarkEngine = () => {
  return new Customark()
    .use(code)
    .use(divider)
    .use(image)
    .use(youtube)
    .use(heading)
    .use(paragraph, [InlineBold, InlineLink, InlineCode, InlineDescription]);
};

const image = {
  type: "image",
  labels: ["value", "src"],
  pattern: /!\[([\s\S]+?)\]\(([\s\S]+?)\)/
};
const youtube = {
  type: "youtube",
  labels: ["value"],
  pattern: /y\[([\s\S]+?)\]/
};
const heading = {
  type: "heading",
  labels: ["level", "value"],
  pattern: /(#{1,6}) (.+)/
};
const code = {
  type: "code",
  labels: ["language", "value"],
  pattern: /```(.*)([\s\S]*?)\n```/
};
const paragraph = {
  type: "paragraph",
  labels: ["value"],
  pattern: /([^\r\n]+([\r|\n|\r\n][^\r\n]+)*)/
};
const divider = {
  type: "divider",
  labels: ["value"],
  pattern: /(-{3,})/
};
const InlineBold = {
  type: "bold",
  labels: ["value"],
  pattern: /\*\*([\s\S]+?)\*\*/
};
const InlineLink = {
  type: "link",
  labels: ["value", "url"],
  pattern: /\[([\s\S]+?)\]\(([\s\S]+?)\)/
};
const InlineCode = {
  type: "inline code",
  labels: ["value"],
  pattern: /`([\s\S]+?)`/
};
const InlineDescription = {
  type: "inline description",
  labels: ["value", "description"],
  pattern: /\[([\s\S]+?)\/\/([\s\S]+?)\]/
};
export default CustomarkEngine;
