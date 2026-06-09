import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = [
  // 1. CRITICAL: Global ignores MUST be the very first item in the array.
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'next-env.d.ts',
      'dist/**',
      'build/**',
      'public/**',
      'components/ui/**', // Optional: Ignore Shadcn UI components so you don't lint generated code
    ],
  },

  // 2. Next.js and TypeScript base configs
  ...nextCoreWebVitals,
  ...nextTypescript,

  // 3. Your custom strict rules
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      'react-hooks/exhaustive-deps': 'error',
      eqeqeq: ['error', 'always'],
      'no-param-reassign': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-unneeded-ternary': 'error',
      'object-shorthand': 'error',
    },
  },

  // 4. Prettier integration
  eslintPluginPrettierRecommended,
];

export default eslintConfig;
