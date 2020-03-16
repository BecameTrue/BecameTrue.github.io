class Customark {
  constructor() {
    this.methods = new Map();
  }

  // Register tokenizers
  use(blockTokenizer, inlineTokenizers = null) {
    this.methods.set(blockTokenizer, inlineTokenizers);
    return this;
  }

  // Start parsing.
  parse(input) {
    // Start with default tree.
    let tree = {
      type: "root",
      children: [
        {
          type: null, // null means it is not parsed yet.
          value: input
        }
      ]
    };

    for (let [blockTokenizer, inlineTokenizers] of this.methods) {
      let blocks = tree.children;
      let resultBlocks = [];
      blocks.forEach(block => {
        if (block.type == null) {
          resultBlocks = resultBlocks.concat(
            this.parseNullBlock(block, blockTokenizer, inlineTokenizers)
          );
        } else resultBlocks.push(block);
      });
      tree.children = resultBlocks;
    }
    console.log(tree);
    return tree;
  }

  parseNullBlock(block, blockTokenizer, inlineTokenizers) {
    // returns parsed block array
    let value = block.value;
    let match = value.match(blockTokenizer.pattern);
    let splitted = [];
    while (match != null) {
      let before = {
        type: null,
        value: value.substring(0, match.index).trim()
      };
      let matched = {
        type: blockTokenizer.type
      };
      blockTokenizer.labels.forEach((label, index) => {
        matched[label] = match[index + 1].trim();
      });

      if (inlineTokenizers != null) {
        matched.children = this.parseInline(matched.value, inlineTokenizers);
      }

      if (before.value !== "") splitted.push(before);
      splitted.push(matched);
      value = value.substring(match.index + match[0].length).trim();
      match = value.match(blockTokenizer.pattern);
    }
    if (value !== "") splitted.push({ type: null, value: value });
    return splitted;
  }

  parseInline(value, inlineTokenizers) {
    let inlines = [];
    let val = value;
    while (val !== "") {
      let bestResult = null;
      inlineTokenizers.forEach(inlineTokenizer => {
        let match = val.match(inlineTokenizer.pattern);
        if (match != null) {
          match.type = inlineTokenizer.type;
          if (bestResult != null) {
            if (bestResult.index > match.index) {
              bestResult = match;
            }
          } else {
            bestResult = match;
          }
        }
      });
      if (bestResult == null) {
        inlines.push({ type: "text", value: val });
        val = "";
      } else {
        let before = {
          type: "text",
          value: val.substring(0, bestResult.index)
        };
        let matched = {
          type: bestResult.type
        };
        let tk = inlineTokenizers.find(tknzr => tknzr.type === bestResult.type);
        tk.labels.forEach((label, index) => {
          matched[label] = bestResult[index + 1];
        });
        inlines.push(before);
        inlines.push(matched);
        val = val.substring(bestResult.index + bestResult[0].length);
      }
    }
    return inlines;
  }
}

export default Customark;
