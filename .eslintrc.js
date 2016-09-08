module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/airbnb/javascript
  extends: 'airbnb-base',
  rules: {
    "no-unused-vars": process.env.NODE_ENV === 'prod' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'prod' ? 2 : 0,
    "comma-dangle": 0,
    "semi": [2, "never"],
    "one-var": 0,
    "no-console": 0,
    'import/no-extraneous-dependencies': 0,
  },
  globals: {
    window: true,
  },
}
