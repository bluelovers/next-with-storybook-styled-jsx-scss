// @ts-check

import { RouterContext } from 'next/dist/shared/lib/router-context';
import { cookieDecorator } from 'storybook-addon-cookie';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: true,
    },
    root: '#storybook-root',
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  backgrounds: {
    default: 'light',
  },
}

export const decorators = [
  cookieDecorator,
];
