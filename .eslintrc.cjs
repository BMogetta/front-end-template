module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended', // This needs to be the last element of the array to override stuff
  ],
  plugins: [
    'react',
    'react-security',
    'no-unsanitized',
    'import',
    'simple-import-sort',
    'prettier',
    'testing-library',
    'jest-dom',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/no-danger': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/jsx-no-script-url': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    // https://github.com/mozilla/eslint-plugin-no-unsanitized
    'no-unsanitized/method': 'error',
    'no-unsanitized/property': 'error',
    // https://www.npmjs.com/package/eslint-plugin-import
    'import/no-extraneous-dependencies': 'error',
    'import/no-deprecated': 'error',
    //'import/no-relative-parent-imports': 'error',
    'import/no-unresolved': 'error',
    //
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    //
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    //https://github.com/testing-library/eslint-plugin-testing-library
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    //https://github.com/testing-library/eslint-plugin-jest-dom
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
  },
};
