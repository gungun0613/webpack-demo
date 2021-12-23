module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended", 
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // "off" or 0 - 关闭规则
    // "warn" or 1 - 将规则视为一个警告（不会影响退出码）
    // "error" or 2 - 将规则视为一个错误 (退出码为1)
    // 禁用 console
    "no-console": 2,
    // 需要分号
    "semi": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 1,
    // 禁止修改类声明的变量
    "no-class-assign": 1,
    'react/prop-types': 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
  },
};
