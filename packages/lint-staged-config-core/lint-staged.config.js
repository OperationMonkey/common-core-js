module.exports = {
  "*.md": ["prettier --write"],
  "*.{ts,tsx}": ["prettier --write"],
  "*.{js,jsx,json,ts,tsx}": ["eslint --quiet"],
  "*.{js,jsx,ts,tsx}": ["jest -b --findRelatedTests --passWithNoTests"],
};
