const { defaults } = require('jest-config');

module.exports = {
  // jest cached, default: '/tmp/<path>',
  // cacheDirectory: '/tmp/<path>',
  // extentions modules use, default: ["js", "jsx", "ts", "tsx", "json", "node"]
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ignore pattern, default: ["/node_modules/"]
  coveragePathIgnorePatterns: ['/node_modules/'],
};
