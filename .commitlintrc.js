const types = {
  deploy: 'Deploy',
  bump: 'Bump',
  migration: 'Migration',
  feature: 'Feature',
  fix: 'Fix',
  chore: 'Chore',
  refactor: 'Refactor',
  style: 'Style',
  other: 'Other',
  wip: 'Wip',
  none: '.'
};
const allowTypes = [
  types.deploy,
  types.bump,
  types.migration,
  types.feature,
  types.fix,
  types.chore,
  types.refactor,
  types.style,
  types.other
];
const ignoreTypes = [types.wip, types.none];

module.exports = {
  parserPreset: {
    parserOpts: {
      headerCorrespondence: ['type', 'subject']
    }
  },
  rules: {
    'type-enum': [2, 'always', allowTypes],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never']
  },
  ignores: [(commit) => ignoreTypes.includes(commit.trim())]
};
