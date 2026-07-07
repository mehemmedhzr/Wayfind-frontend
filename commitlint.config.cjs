/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "refactor",
        "perf",
        "test",
        "style",
        "ci",
        "build",
        "revert",
      ],
    ],
    // Reject start-case, pascal-case, upper-case subjects
    "subject-case": [2, "never", ["start-case", "pascal-case", "upper-case"]],
    // Don't require subject to be lowercase (sentence-case is fine)
    "subject-full-stop": [0],
    "header-max-length": [2, "always", 72],
    "body-leading-blank": [2, "always"],
    // Warn only (level 1) — existing commit bodies may run long
    "body-max-line-length": [1, "always", 100],
  },
};
