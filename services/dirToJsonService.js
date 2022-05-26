const fs = require('fs');

const buildTree = (rootPath) => {
  if (fs.statSync(rootPath).isDirectory()) {
    const st = {
      type: "directory",
      name: rootPath.split("/")[rootPath.split("/").length - 1],
      contents: []
    }
    const children = fs.readdirSync(rootPath);
    for (const child of children) {
      if (child === 'tmp' || child === 'node_modules') continue;
      const childPath = `${rootPath}/${child}`;
      st.contents.push(buildTree(childPath));
    }
    return st;
  }
  else {
    return {
      type: "file",
      name: rootPath.split("/")[rootPath.split("/").length - 1],
      data: fs.readFileSync(rootPath, 'utf-8')
    }
  }
}

module.exports = buildTree;