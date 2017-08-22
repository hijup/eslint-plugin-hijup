/**
 * @fileoverview Tests for no-wrap-template-string rule.
 * @author HIJUP
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-wrap-template-string"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-wrap-template-string", rule, {

  valid: [
    {
      env: { es6: true },
      code: "var something = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eros ac dui sollicitudin elementum sed nec risus.`;"
    },
    {
      env: { es6: true },
      code: "var something = wololo`\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        "Mauris nec eros ac dui sollicitudin elementum sed nec risus.`;",
      options: [{
        exceptionTags: ['wololo']
      }]
    },
    {
      env: { es6: true },
      code: "var something = cleanUp`\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        "Mauris nec eros ac dui sollicitudin elementum sed nec risus.`;",
      options: [{
        exceptionTags: ['wololo', 'cleanUp']
      }]
    }
  ],

  invalid: [
    {
      env: { es6: true },
      code: "var something = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        "Mauris nec eros ac dui sollicitudin elementum sed nec risus.`;",
      errors: [{
        message: "Don't use multi-line template string"
      }]
    },
    {
      env: { es6: true },
      code: "var something = `\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        "Mauris nec eros ac dui sollicitudin elementum sed nec risus.`;",
      errors: [{
        message: "Don't use multi-line template string"
      }]
    },
    {
      env: { es6: true },
      code: "var something = cleanUp`\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        "Mauris nec eros ac dui sollicitudin elementum sed nec risus.`;",
      options: [{
        exceptionTags: ['wololo']
      }],
      errors: [{
        message: "Don't use multi-line template string"
      }]
    }
  ]
});
