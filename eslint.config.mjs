import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    vue: true,
    typescript: true,
    pnpm: true,
    unocss: true,

    // Avoid enforcing style rules on docs/config files across the monorepo
    markdown: false,
    yaml: false,
    jsonc: false,
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/.vite-ssg-dist/**',
      '**/.vite-ssg-temp/**',
      '**/public/**',
      '**/typings/**',
      '**/run/**',
      '**/cache/**',
      '**/logs/**',
      '**/data/**',
      '**/auto-imports.d.ts',
      '**/components.d.ts',
      '**/typed-router.d.ts',
    ],
  },
  // Project-specific overrides
  {
    files: ['api/**/*.{js,cjs,mjs,ts,cts,mts}'],
    rules: {
      // Keep parity with previous api/.eslintrc.json relaxations
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-empty': 'off',
      'eqeqeq': 'off',
      'prefer-const': 'off',

      // api does not use UnoCSS; avoid requiring uno.config.ts
      'unocss/order': 'off',
      'unocss/order-attributify': 'off',
    },
  },
)
