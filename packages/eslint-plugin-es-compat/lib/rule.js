const delegateeConfigs = require('./delegateeConfigs').all;
const { createDelegatee, delegatingVisitor } = require('./delegation');

module.exports = {
  meta: {
    schema: [], // no options
  },
  create(context) {
    const visitors = delegateeConfigs.map(config => createDelegatee(config, context));

    return delegatingVisitor(visitors);
  },
};
