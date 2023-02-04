// @ts-check

/**
 * @type { import('@storybook/core-common').StorybookConfig }
 */
const storybookConfig = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
    '@whitespace/storybook-addon-html',
    '@bbbtech/storybook-formik/register',
    'storybook-addon-next-router',
    'storybook-color-picker',
    '@geometricpanda/storybook-addon-badges',
    'storybook-fixtures',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {},
    }
  },
  features: {
    interactionsDebugger: true,
  },
};

export default storybookConfig;
