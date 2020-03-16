var fs = require("fs");
const docsDirectory = "./src/docs/";
const metaPath = "./src/meta/meta.json";
var metaData = {
  categories: new Set(),
  posts: []
};

var convertToGoodJSON = str => {
  return (
    str
      // Replace ":" with "@colon@" if it's between double-quotes
      .replace(/:\s*"([^"]*)"/g, function(match, p1) {
        return ': "' + p1.replace(/:/g, "@colon@") + '"';
      })

      // Replace ":" with "@colon@" if it's between single-quotes
      .replace(/:\s*'([^']*)'/g, function(match, p1) {
        return ': "' + p1.replace(/:/g, "@colon@") + '"';
      })

      // Add double-quotes around any tokens before the remaining ":"
      .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?\s*:/g, '"$2": ')

      // Turn "@colon@" back into ":"
      .replace(/@colon@/g, ":")
  );
};

// console.log(process.cwd());

try {
  var files = fs.readdirSync(docsDirectory);
  files.forEach(file => {
    // show that currently processing on file..
    process.stdout.write("processing ... " + file + "\r");
    // console.log("processing ... " + file);

    var data = fs.readFileSync(docsDirectory + file, "utf8");
    var metaDividerPosition = data.indexOf("---");
    var meta = "{\n" + data.substring(0, metaDividerPosition).trim() + "\n}";
    meta = JSON.parse(convertToGoodJSON(meta));

    meta.file = file;
    if (meta.title == null) throw Error("Title must be specified => " + file);
    if (meta.summary == null)
      throw Error("Summary must be specified => " + file);
    if (meta.date == null) throw Error("Date must be specified => " + file);
    if (meta.category == null) meta.category = "etc";
    if (meta.series == null) meta.series = null;
    if (meta.thumbnail == null) meta.thumbnail = null;

    metaData.categories.add(meta.category);

    // insert this post to metaData
    metaData.posts.push(meta);
  });

  metaData.categories = Array.from(metaData.categories);

  fs.writeFileSync(metaPath, JSON.stringify(metaData));
} catch (e) {
  console.log(e);
}

console.log("Successfully saved data on >> ", metaPath);
