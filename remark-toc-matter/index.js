import {toc} from 'mdast-util-toc'

export default function transformer(options = {}) {
  /**
   * @param {object}    ast   MDAST
   * @param {vFile}     vFile
   * @param {function}  next
   * @return {object}
   */
  return function(ast, vFile, next) {
    const index = toc(ast);

    if(vFile.data.fm) {
    vFile.data.fm["toc"] = index;
    } else {
      vFile.data.fm = {"toc": index};

    }

    if (typeof next === 'function') {
      return next(null, ast, vFile);
    }


    return ast;
  };
}

