import { h as createElement, Component, options } from "preact";
import PropTypes from "proptypes";

let old = options.vnode;
options.vnode = vnode => {
  if (vnode.children && !vnode.children.length) delete vnode.children;
  if (old) old(vnode);
};

const Children = { only: c => c[0], count: c => c.length };

export { createElement, Children, PropTypes, Component };
export default { createElement, Children, PropTypes, Component };
