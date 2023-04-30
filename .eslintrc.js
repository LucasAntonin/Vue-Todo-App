module.exports = {
  parser: "@babel/eslint-parser",
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "plugin:vue/essential",
    "standard",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": "error",
  },
  plugins: ["vue", "prettier"],
};
