import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    linterOptions: { reportUnusedDisableDirectives: "error" },
    rules: {
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".js", ".jsx"],
        },
      ],
      "no-unused-vars": 0,
      "no-console": 0,
      "no-use-before-define": 0,
      "no-underscore-dangle": 0,
      "no-param-reassign": 0, 
      "import/no-unresolved": 0, 
      "global-require": 0, 
      "react/no-array-index-key": 0,
      "react/no-unescaped-entities": 0,
      "react/destructuring-assignment": 0,
      "react/jsx-props-no-spreading": 0,
      "react/state-in-constructor": 0,
      "react/no-danger": 0,
      "react/prop-types": 0,
      "react/forbid-prop-types": 0,
      "react/require-default-props": 0,
      "react/default-props-match-prop-types": 0,
      "react/no-unused-prop-types": 0,
      "react/react-in-jsx-scope": 0, // after react v17
      "react/jsx-uses-react": 0, // after react v17
      "react/jsx-no-bind": 0,
    },
  },
];
