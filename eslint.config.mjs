import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import jest from 'eslint-plugin-jest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:jest/recommended'
  ),
  {
    plugins: {
      prettier,
      jest,
    },
  },
  {
    files: ['./src/**/*.ts', './src/**/*.tsx', '**/*.d.ts'],
    env: {
      jest: true, // Add Jest environment
    },
  },
];
export default config;
