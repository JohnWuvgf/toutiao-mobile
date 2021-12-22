module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: "off", // 双引号可以使用
    semi: "off", // 行莫分号可以使用
    "comma-dangle": "off", // 逗号可以使用
    "space-before-function-paren": 0,
  },
};
