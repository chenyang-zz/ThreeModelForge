// stylelint.config.js
module.exports = {
  root: true,

  extends: [
    "stylelint-config-standard", // 标准 CSS 规则
    "stylelint-config-recess-order" // 属性顺序规范
  ],

  overrides: [
    {
      files: ["**/*.{css,less}"], // 针对 CSS/LESS 文件
      customSyntax: "postcss-less" // 使用 LESS 解析器
    }
  ],

  rules: {
    "function-url-quotes": "always",
    "color-hex-length": "long",
    "rule-empty-line-before": "never",

    "font-family-no-missing-generic-family-keyword": null,
    "property-no-unknown": null,
    "no-empty-source": null,
    "selector-class-pattern": null,
    "value-no-vendor-prefix": null,
    "no-descending-specificity": null,
    "value-keyword-case": null,

    // 取消重复选择器报错
    "no-duplicate-selectors": null,

    "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: [] }]
  },

  // 忽略 JS/TS 文件
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"]
};
