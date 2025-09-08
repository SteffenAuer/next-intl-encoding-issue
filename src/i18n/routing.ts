import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en'],
  defaultLocale: 'en',
  pathnames: {
    '/test/[param]':'/test/[param]'
  }
});
