module.exports = {
  '*.{js,jsx,ts,tsx}': [() => 'tsc --noEmit', 'eslint --fix', 'prettier --write'],
  '*.{md,mdx,css,yaml,yml}': ['prettier --write']
};
