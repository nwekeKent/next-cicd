import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier' // ✅ Disables ESLint rules that conflict with Prettier
  ),
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
    },
  },
];

export default config;
