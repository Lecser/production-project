module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'i18next',
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'consistent-return': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/no-unstable-nested-components': [
      2,
      {
        allowAsProps: true
      }
    ],
    'react/no-array-index-key': 0,
    'class-methods-use-this': 0,
    '@typescript-eslint/no-redeclare': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 0,
    'import/order': 0,
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // External packages.
          ['^'],
          // Internal packages.
          ['^@'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$']
        ]
      }
    ]
  },
  globals: {
    IS_DEV: true,
    API: true
  }
};
