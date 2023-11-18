const {compilerOptions} = require('./tsconfig.json');

const {baseUrl, paths} = compilerOptions;

const getAliases = () => {
  return Object.entries(paths).reduce((aliases, alias) => {
    const key = alias[0].replace('/*', '');
    const value = baseUrl + alias[1][0].replace('*', '');
    return {
      ...aliases,
      [key]: value,
    };
  }, {});
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: getAliases(),
      },
    ],
    'nativewind/babel',
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    'module:react-native-dotenv',
  ],
};
