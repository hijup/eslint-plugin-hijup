/**
 * @fileoverview Tests for explicit-button-type rule.
 * @author HIJUP
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/explicit-button-type"),
    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("explicit-button-type", rule, {

  valid: [
    {
      env: { es6: true },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      code: '<button type="button">Edit</button>;'
    },
    {
      env: { es6: true },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      code: '<button type="submit">Save Changes</button>;'
    },
  ],

  invalid: [
    {
      env: { es6: true },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      code: '<button>Do something</button>;',
      errors: [{
        message: '<button> must explicitly has prop "type"'
      }]
    },
  ]
});
