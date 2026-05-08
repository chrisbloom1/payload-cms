import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

/**
 * Revalidate the home-page cache tag whenever an editor saves the
 * HomePage global. Matches the Header/Footer revalidation pattern.
 */
export const revalidateHomePage: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info('Revalidating home page')

  revalidateTag('global_home-page', 'max')

  return doc
}
