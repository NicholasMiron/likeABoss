module.exports = {
  extends: './node_modules/eslint-config-airbnb-base/index.js',
  "globals": {
    "document": true,
  },
  "env": {
    "jest": true,
    "amd": true,
    "node": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  plugins: ['react'],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "comma-dangle": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": "warn",
    "no-console": 1,
    "no-unexpected-multiline": "warn"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "15.6.1"
    },
  },
};