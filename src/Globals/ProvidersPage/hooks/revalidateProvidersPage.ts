import type { GlobalAfterChangeHook } from 'payload'
import { safeRevalidateTag } from '@/utilities/safeRevalidate'

export const revalidateProvidersPage: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info('Revalidating providers page')
  safeRevalidateTag('global_providers-page', 'max')
  return doc
}
