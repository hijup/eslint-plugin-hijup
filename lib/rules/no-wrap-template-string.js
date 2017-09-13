/**
 * @fileoverview Definition of no-wrap-template-string
 * @author Zhang Visper, HIJUP
 * @modified from https://github.com/coolzjy/eslint-plugin-nowrap-in-template-string
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Disallow wrapping long template string into multiple lines.",
      category: "Whitespace",
      recommended: true
    },
    fixable: null,
    schema: [
      {
        type: "object",
        properties: {
          exceptionTags: {
            type: "array",
            items: {
              type: "string"
            }
          }
        },
        additionalProperties: false
      }
    ]
  },

  create: function(context) {
    var options = context.options[0];
    var exceptionTags;
    if (typeof options === 'object') {
      exceptionTags = options.exceptionTags
    }

    return {

      TemplateLiteral(node) {
        if (
          node.parent.type === 'TaggedTemplateExpression' &&
          exceptionTags.indexOf(node.parent.tag.name) !== -1
        ) {
          // This node is tagged template literal and its tag is on exception list which means this
          // template literal is exempted from this rule.
          return;
        }

        if (node.loc.start.line !== node.loc.end.line) {
          context.report({
            node: node,
            message: 'Don\'t use multi-line template string'
          });
        }
      }

    };
  }
};
