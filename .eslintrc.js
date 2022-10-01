module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended', // ESLintの推奨設定をオンにする
    'plugin:@typescript-eslint/recommended', // TypeScriptをチェックするプラグインの推奨ルールをオンにする
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking', // 型情報によるリンティング
    'prettier', // prettierのextendsは他のextendsより後に記述する
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    // tsconfigRootDir: __dirname, // 型情報によるリンティング
    project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定、パス間違えないように
  },
  plugins: ['@typescript-eslint'],
  root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
  rules: {
    // disable the rule for all files
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
  ],
};
