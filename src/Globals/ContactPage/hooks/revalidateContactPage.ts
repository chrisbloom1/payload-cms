import type { GlobalAfterChangeHook } from 'payload'
import { safeRevalidateTag } from '@/utilities/safeRevalidate'

export const revalidateContactPage: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info('Revalidating contact page')
  safeRevalidateTag('global_contact-page', 'max')
  return doc
}
