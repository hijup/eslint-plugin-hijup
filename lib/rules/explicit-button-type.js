/**
 * @fileoverview Definition of explicit-button-type
 * @author HIJUP
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "`<button>` must explicitly has prop `type`",
      category: "React",
      recommended: true
    },
    fixable: null,
    schema: []
  },

  create: function(context) {
    const hasProp = require('jsx-ast-utils/hasProp');

    return {

      JSXOpeningElement(node) {
        if (!hasProp(node.attributes, 'type')) {
          context.report({
            node: node,
            message: '<button> must explicitly has prop "type"',
          })
        }
      }

    };
  }
};
