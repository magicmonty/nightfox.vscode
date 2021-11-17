module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: ["prettier", "standard", "plugin:jsonc/recommended-with-jsonc"],
  rules: {
    "prettier/prettier": "error",
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "always"],
    "eol-last": ["error", "always"],
  },
};
