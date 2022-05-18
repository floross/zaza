const {
  hapifyDefaultConfig,
  getValidatorPath,
} = require('@tractr/hapify-config');

module.exports = {
  ...hapifyDefaultConfig,
  version: '1',
  name: 'prisma',
  description: 'Library to host generated codes',
  validatorPath: getValidatorPath(__dirname),
  project: '../../hapify-models.json',
  extends: ['@tractr/hapify-templates-prisma'],
  importReplacements: {
    'nestjs-models': '@zaza/nestjs-models',
    'nestjs-models-common': '@zaza/nestjs-models-common',
  },
};
