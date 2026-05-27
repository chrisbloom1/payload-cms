import type { GlobalAfterChangeHook } from 'payload'
import { safeRevalidateTag } from '@/utilities/safeRevalidate'

export const revalidateBrandsPage: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info('Revalidating brands page')
  safeRevalidateTag('global_brands-page', 'max')
  return doc
}
