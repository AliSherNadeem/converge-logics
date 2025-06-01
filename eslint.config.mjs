// // eslint.config.mjs
// import eslintPluginImport from 'eslint-plugin-import';
// import js from '@eslint/js';
// import tsPlugin from '@typescript-eslint/eslint-plugin';

// export default [
//   js.configs.recommended,
//   {
//     files: ['**/*.{js,jsx}'], // Only apply to JavaScript/JSX files
//     plugins: {
//       import: eslintPluginImport,
//       '@typescript-eslint': tsPlugin,
//     },
//     rules: {
//       'import/no-unresolved': 'error', // Catch missing imports
//       'import/named': 'error', // Catch invalid named imports
//       '@typescript-eslint/no-explicit-any': 'off', // Disable type-related rules
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-unused-vars': 'warn', // Optional: Warn on unused vars
//     },
//     settings: {
//       'import/resolver': {
//         typescript: {
//           alwaysTryTypes: true,
//           project: './jsconfig.json', // Point to jsconfig.json
//         },
//       },
//     },
//   },
//   // Use minimal TypeScript rules without type checking
//   {
//     files: ['**/*.{js,jsx}'],
//     ...tsPlugin.configs.disableTypeChecked, // Explicitly disable type-checked rules
//   },
// ];