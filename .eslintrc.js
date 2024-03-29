module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'i18next'],

  rules: {
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/function-component-definition': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    '@typescript-eslint/naming-convention': 'warn',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],
    'no-param-reassign': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: '**/*.{test,stories}.{ts,tsx}',
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
