import type { GlobalAfterChangeHook } from 'payload'
import { safeRevalidateTag } from '@/utilities/safeRevalidate'

export const revalidateCompanyPage: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info('Revalidating company page')
  safeRevalidateTag('global_company-page', 'max')
  return doc
}
