# eslint-plugin-hijup

Various ESLint rules used by HIJUP

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-hijup`:

```
$ npm install eslint-plugin-hijup --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-hijup` globally.

## Usage

Add `hijup` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "hijup"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "hijup/rule-name": 2
    }
}
```

## Supported Rules

* no-wrap-template-string
