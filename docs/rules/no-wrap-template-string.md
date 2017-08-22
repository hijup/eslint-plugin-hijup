# Disallow wrapping long template string into multiple lines (no-wrap-template-string)

Template string wrapped into multiple lines can cause unexpected whitespace; especially to most developers that are not familiar with template string's whitespace behavior.


## Rule Details

This rule aims to prevent unexpected whitespace by tell developers they should not write multi-line template strings.

Examples of **incorrect** code for this rule:

```js
/* eslint hijup/no-wrap-template-string: "error" */

var somethingLong = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eros
  ac dui sollicitudin elementum sed nec risus.`;
```

```js
/* eslint hijup/no-wrap-template-string: "error" */

var somethingLong = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eros ac dui sollicitudin elementum sed nec risus.`;
```


Examples of **correct** code for this rule:

```js
/* eslint hijup/no-wrap-template-string: "error" */

var somethingLong = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eros ac dui sollicitudin elementum sed nec risus.`;
```


### Options

#### exceptionTags

A list of tags (written as an array of strings). [Template literals tagged with these tags](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) will not be checked.

```js
{
  "rules": {
    "hijup/no-wrap-template-string": ["error", {"exceptionTags": "stripIndents", "oneLineTrim"}] // All template literals tagged with "stripIndents" or "oneLineTrim" will not be checked.
  }
}
```


## When Not To Use It

If you (or developers in your team) are familiar with template string's whitespace behavior and therefore don't need to be helped by this rule.

## Further Reading

* http://2ality.com/2016/05/template-literal-whitespace.html
