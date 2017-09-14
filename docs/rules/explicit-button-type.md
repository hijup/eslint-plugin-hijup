# `<button>` must explicitly has prop `type` (explicit-button-type)

Value of prop `type` of `<button>` can be `submit` or `button` which has different behavior. When a `<button>` does not explicitly has prop `type`, it uses default value, which is `submit`. Most developers don't know about this. As consequence, they unknowingly use submit button when they want to use simple button, and when the button behaves unexpectedly, they tend to fix wrong thing because they don't know the bug's root cause.

## Rule Details

This rule aims to prevent developers from unknowingly use submit button by forcing them to explicitly set `type` of `<button>` so developers will only use submit button when they meant it.

Examples of **incorrect** code for this rule:

```js
/* eslint hijup/explicit-button-type: "error" */

<button>Do something</button>;
```

Examples of **correct** code for this rule:

```js
/* eslint hijup/explicit-button-type: "error" */

<button type="button">Edit</button>;
```

### Options

This rule does not have any options.

## When Not To Use It

When all developers in your team know about `<button>`'s `type` default value and behavior so you don't need to be helped by this rule.
