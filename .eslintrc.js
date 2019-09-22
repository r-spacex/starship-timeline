const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y'],
  env: {
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': {
      webpack: { config: { resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] } } }
    }
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ]
  }
};
